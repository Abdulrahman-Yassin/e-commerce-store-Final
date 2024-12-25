/*eslint-disable */

import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

function Slider({ name, price, image, id}) {


  return (
    <Link to={`/${name}`}>
      <div className={styles.slide}>
        <div className={styles.image}>
          <div className={styles.main}><img src={image} alt={name} /></div>
          <div className={styles.eye}>
            
            
          </div>
          {/* <span style={appliedStyle}>{offer}</span> */}
        </div>
        <div className={styles.captions}>
          <h5>{name}</h5>
          <span className={styles.price}> {price}</span>
          {/* <div className={styles.price}>
          </div> */}
          {/* <div className={styles.rating}>
            <div className={styles.stars}>
              <img src={rating.image1} alt="" />
              <img src={rating.image2} alt="" />
              <img src={rating.image3} alt="" />
              <img src={rating.image4} alt="" />
              <img src={rating.image5} alt="" />
              <span>({review})</span>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default Slider;
