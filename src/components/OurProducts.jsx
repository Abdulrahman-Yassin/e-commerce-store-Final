/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import "./style.css";
import styles from "./OurProducts.module.css";

import { Navigation } from "swiper/modules";

import Slider from "./Slider";


import { useContext, useState } from 'react';
import { ProductContext } from '../ProductContext';

function OurProducts() {



  const { products } = useContext(ProductContext);

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price={product.price}
                image={product.image1}
                id={product.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default OurProducts;
