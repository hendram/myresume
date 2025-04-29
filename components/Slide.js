import React from "react";
import styles from "../styles/slide.module.css";

const Slide = ({ data }) => {
  return (
    <div className={styles.slide}>
      <h2 className={styles.company}>{data.company}</h2>
      <h3 className={styles.position}>{data.position}</h3>
      <p className={styles.duration}>{data.duration}</p>
      <ul className={styles.details}>
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Slide;
