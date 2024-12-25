// /*eslint-disable */

import Slider from "../components/Slider"
import styles from './AllProducts.module.css'

// import star  from "../images/icon/star.png"
// import noStar  from "../images/icon/noStar.png"
// import halfStar  from "../images/icon/star-half-filled.png"

// import BreedDryDogFood  from "../images/products/10.png"
// import CANONEOSDSLRCamera  from "../images/products/11.png"
// import ASUSFHDGamingLaptop  from "../images/products/12.png"
// import CurologyProductSet  from "../images/products/13.png"
// import KidsElectricCar  from "../images/products/14.png"
// import JrZoomSoccerCleats  from "../images/products/15.png"
// import GP11ShooterUSBGamepad  from "../images/products/16.png"
// import QuiltedSatinJacket  from "../images/products/17.png"

import { useContext } from 'react';
import { ProductContext } from '../ProductContext';

function AllProducts() {

  const { products } = useContext(ProductContext);
  

    // const ALL_PRODUCT = [
    //     {
    //       name: "Breed Dry Dog Food",
    //       price: "L.E  100",
    //       price2: "",
    //       image: BreedDryDogFood,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: noStar,
    //         image5: noStar,
    //       },
    //       offer: "",
    //       review: "35",
    //     },
    //     {
    //       name: "CANON EOS DSLR Camera",
    //       price: "L.E  360",
    //       price2: "",
    //       image: CANONEOSDSLRCamera,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: noStar,
    //       },
    //       offer: "",
    //       review: "95",
    //     },
    //     {
    //       name: "ASUS FHD Gaming Laptop",
    //       price: "L.E  700",
    //       price2: "",
    //       image: ASUSFHDGamingLaptop,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: star,
    //       },
    //       offer: "",
    //       review: "325",
    //     },
    //     {
    //       name: "Curology Product Set ",
    //       price: "L.E  500",
    //       price2: "",
    //       image: CurologyProductSet,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: noStar,
    //       },
    //       offer: "",
    //       review: "145",
    //     },
    //     {
    //       name: "Kids Electric Car",
    //       price: "L.E  960",
    //       price2: "",
    //       image: KidsElectricCar,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: star,
    //       },
    //       offer: "",
    //       review: "65",
    //     },
    //     {
    //       name: "Jr. Zoom Soccer Cleats",
    //       price: "L.E  1160",
    //       price2: "",
    //       image: JrZoomSoccerCleats,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: star,
    //       },
    //       offer: "",
    //       review: "45",
    //     },
    //     {
    //       name: "GP11 Shooter USB Gamepad",
    //       price: "L.E  660",
    //       price2: "",
    //       image: GP11ShooterUSBGamepad,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: halfStar,
    //       },
    //       offer: "",
    //       review: "96",
    //     },
    //     {
    //       name: "Quilted Satin Jacket",
    //       price: "L.E  660",
    //       price2: "",
    //       image: QuiltedSatinJacket,
    //       rating: {
    //         image1: star,
    //         image2: star,
    //         image3: star,
    //         image4: star,
    //         image5: halfStar,
    //       },
    //       offer: "",
    //       review: "53",
    //     }]

    return(
        <div className={styles.products}>
            {products.map((product) => {
              return(
                <div key={product.name} className={styles.product}>
                <Slider
                name={product.name}
                price={product.price}
                image={product.image1}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
            />
            </div>
              )
            })}
        </div>
    )
}

export default AllProducts