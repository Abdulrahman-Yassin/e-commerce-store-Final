import { useState } from "react";
import styles from "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);  
  const [hoverRating, setHoverRating] = useState(0); 
  const [review, setReview] = useState(""); 

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleAddReview = () => {
    console.log("Rating:", rating, "Review:", review);
    setRating(0);  
    setReview("");  
  };

  return (
    <div className={styles.review}>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`L.E  {styles.star} L.E  {
              (hoverRating || rating) >= star ? styles.filled : ""
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        placeholder="Write a review"
        value={review}
        onChange={handleReviewChange}
      />
      <button
        onClick={handleAddReview}
        disabled={rating === 0 || review.trim() === ""}
      >
        Add a review
      </button>
    </div>
  );
};

export default StarRating;
