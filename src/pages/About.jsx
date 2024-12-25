/*eslint-disable */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../components/style.css";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import styles from "./About.module.css";

import Img1 from "../images/image 46.png"
import Img2 from "../images/image 48.png"
import Side from "../images/Side Image.png"
import Right from "../images/Icon-secure.png"
import service from "../images/Icon-Customer service.png"
import delivery from "../images/icon-delivery.png"
import Linkedin from "../images/Icon-Linkedin.png"
import nstagram from "../images/icon_nstagram.png"
import Twitter from "../images/Icon-Twitter.png"
import Services3 from "../images/Services (3).png"
import Services2 from "../images/Services (2).png"
import Services1 from "../images/Services (1).png"

function About() {
  const TEAM = [
    {
      img: Img1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
    },
    {
      img: Img2,
      name: "Will Smith",
      position: "Product Designer",
    },
    {
      img: Img2,
      name: "Will Smith",
      position: "Product Designer",
    },
    {
      img: Img1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
    },
    {
      img: Img1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
    },
    {
      img: Img2,
      name: "Will Smith",
      position: "Product Designer",
    },
    {
      img: Img2,
      name: "Will Smith",
      position: "Product Designer",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <span>Home / </span>
            <span> About </span>
          </div>
          <div className={styles.text}>
                <h1>Our Story</h1>
                <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
                makterplace with an active presense in Bangladesh. Supported by
                wide range of tailored marketing, data and service solutions,
                Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                customers across the region. <br /> <br /> Exclusive has more than 1 Million
                products to offer, growing at a very fast. Exclusive offers a
                diverse assotment in categories ranging from consumer.
                </p>
          </div>
        </div>
        <img src={Side} alt="" className={styles.sideImage} />
      </div>
      <div className={styles.Container}>
        <div>
          <img src={Services1} alt="" />
          <span>10.5k</span>
          <p>Sallers active our site</p>
        </div>
        <div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
             loading="lazy"
          >
            <path
              opacity="0.3"
              d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40" cy="40" r="29" fill="black" />
            <path
              d="M40.0003 57.2728C49.5397 57.2728 57.273 49.5395 57.273 40C57.273 30.4606 49.5397 22.7273 40.0003 22.7273C30.4608 22.7273 22.7275 30.4606 22.7275 40C22.7275 49.5395 30.4608 57.2728 40.0003 57.2728Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.0914 34.547C44.762 33.9758 44.2834 33.505 43.707 33.1848C43.1305 32.8646 42.4777 32.7072 41.8186 32.7294H38.1823C37.2178 32.7294 36.2929 33.1124 35.611 33.7941C34.929 34.4759 34.5459 35.4005 34.5459 36.3647C34.5459 37.3288 34.929 38.2535 35.611 38.9353C36.2929 39.617 37.2178 40 38.1823 40H41.8186C42.783 40 43.708 40.383 44.3899 41.0648C45.0719 41.7465 45.455 42.6712 45.455 43.6354C45.455 44.5995 45.0719 45.5242 44.3899 46.2059C43.708 46.8877 42.783 47.2707 41.8186 47.2707H38.1823C37.5232 47.2929 36.8704 47.1354 36.2939 46.8153C35.7174 46.4951 35.2389 46.0242 34.9095 45.453"
              stroke="#FAFAFA"
              stroke-width="2.75"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 28.1818V32.1212M40 47.8787V51.8181"
              stroke="#FAFAFA"
              stroke-width="2.75"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>33k</span>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div>
          <img src={Services2} alt=""  loading="lazy"/>
          <span>45.5k</span>
          <p>Customer active in our site</p>
        </div>
        <div>
          <img src={Services3} alt=""  loading="lazy"/>
          <span>25k</span>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className={styles.sliders}>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TEAM.map((product) => (
            <SwiperSlide key={product.name}>
              <div className={styles.slide}>
                <div>
                <img src={product.img} alt="" />
                </div>
                <h4>{product.name}</h4>
                <p>{product.position}</p>
                <div className={styles.icon}>
                  <img src={Twitter} alt=""  loading="lazy"/>
                  <img src={nstagram} alt=""  loading="lazy"/>
                  <img src={Linkedin} alt=""  loading="lazy"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.features}>
                <div>
                    <img src={delivery} alt=""  loading="lazy"/>
                    <h6>FREE AND FAST DELIVERY</h6>
                    <p>Free delivery for all orders over L.E  140</p>
                </div>
                <div>
                    <img src={service} alt=""  loading="lazy"/>
                    <h6>24/7 CUSTOMER SERVICE</h6>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div>
                    <img src={Right} alt=""  loading="lazy"/>
                    <h6>MONEY BACK GUARANTEE</h6>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
    </>
  );
}

export default About;
