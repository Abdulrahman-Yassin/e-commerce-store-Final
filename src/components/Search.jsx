/*eslint-disable */

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Search.module.css";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import Slider from "./Slider";

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
import SearchIcon  from "../images/Vector (2).png"

import { useContext } from 'react';
import { ProductContext } from '../ProductContext';


function Search() {

  const { products } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // دالة البحث
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (event.target.value === "Admin Dashboard" ) {
    navigate(`/AdminDashboard`)
    setSearchTerm('');
    setResults([]);
  }

    if (value) {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  // دالة التنقل لصفحة تفاصيل المنتج
  const handleProductClick = (product) => {
    // الانتقال إلى صفحة تفاصيل المنتج
    navigate(`/${product.name}`);

    // تفريغ حقل البحث وإخفاء النتائج
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
        />
        <img src={SearchIcon} alt="" />
      </div>

      {results.length > 0 && (
        <div className={styles.results}>
          {results.map((product) => (
            <div key={product.name} onClick={() => handleProductClick(product)}>
              <Slider
                name={product.name}
                price={product.price}
                price2={product.price2}
                image={product.image1}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;


