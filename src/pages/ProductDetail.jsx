/*eslint-disable */

import styles from "./ProductDetail.module.css"
import NotFound from './NotFound';

import star  from "../images/icon/star.png"
import noStar  from "../images/icon/noStar.png"
import halfStar  from "../images/icon/star-half-filled.png"

import Return  from "../images/Icon-return.png"
import delivery  from "../images/delivery.png"

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../ProductContext';



function ProductDetail() {
  
  
  const { products } = useContext(ProductContext);
  
  const { name } = useParams();

  const product = products.find(p => p.name === name); // اختر المنتج المطلوب

  const allSizes = product && product.sizes ? product.sizes : [];
  
  const colors = product && product.color ? product.color : [];
  
  const Quantity = product && product.quantity && product.quantity;



  if (!product) {
    return <NotFound/>;
  }

  // Save user selections
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [totalPrice, setTotalPrice] = useState(parseFloat(product.price.replace('L.E  ', '')));

  // Handle color change
  const handleRadioChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Handle quantity increase/decrease
  // function handleClickPlus() {
  //   setQuantity(prevQuantity => prevQuantity + 1);
  //   updateTotalPrice(quantity + 1);
  // }

  const handleClickPlus = () => {
    if (quantity < Quantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
      updateTotalPrice(quantity + 1)
    }
  };
  

  function handleClickMinus() {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    updateTotalPrice(Math.max(quantity - 1, 1));
  }

  // Update total price based on quantity
  const updateTotalPrice = (newQuantity) => {
    const pricePerUnit = parseFloat(product.price.replace('L.E  ', ''));
    setTotalPrice(newQuantity * pricePerUnit);
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Prepare data to send to Checkout
  const checkoutData = {
    productName: product.name,
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
    totalPrice: `L.E${totalPrice.toFixed(2)}`
  };
  

  return (
    <div className={styles.Container}>
      <div className={styles.container}>
        <div>
          <div className={styles.gallery}>
            <div className={styles.images}>
              <div><img src={product.image2} /></div>
              <div><img src={product.image3} /></div>
              <div><img src={product.image4} /></div>
            </div>
            <div className={styles.main}><img src={product.image1} /></div>
          </div>
        </div>
        <div className={styles.detail}>
          <h5>{product.name}</h5>
          <div>
          </div>
          <span className={styles.price}>L.E {totalPrice.toFixed(2)}</span>
          <hr />
            <div>
              <div className={styles.colorSelector}>
                <span>Colours:</span>
                {colors.map((color) => (
                  <label key={color} className={`${styles.colorOption} ${styles[color]} ${selectedColor === color ? styles.selected : ''}`}>
                    <input
                      type="radio"
                      value={color}
                      checked={selectedColor === color}
                      onChange={handleRadioChange} 
                    />
                  </label>
                ))}
              </div>
            </div>
              <div className={styles.size}>
                <p>Size: </p>
                {allSizes.map((size) => (
                  <button key={size} onClick={() => handleSizeSelect(size)} className={selectedSize === size && styles.selected }>
                  {size}
                  </button>
                ))}
              </div>
              <div className={styles.buy}>
                <div className={styles.num}>
                  <span onClick={handleClickMinus}>-</span>
                  <span>{quantity}</span>
                  <span onClick={handleClickPlus}>+</span>
                </div>
                  <Link to="/CheckOut" state={checkoutData} > <button className={styles.buyNow}>Buy Now</button> </Link>
              </div>
              <div  className={styles.services}>
                <div  className={styles.delivery}>
                  <img src={delivery} alt="" />
                  <div>
                    <h6>Free Delivery</h6>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <hr />
                <div className={styles.edit}>
                  <div className={styles.delivery}>
                    <img src={Return} alt="" />
                    <div>
                      <h6>Return Delivery</h6>
                      <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProductDetail;


