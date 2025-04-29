import React from "react";
import slideportrait from "../styles/slideportrait.module.css";

const Slideportrait = ({ data }) => {
  return (
    <div className={slideportrait.slide}>
      <h2 className={slideportrait.company}>{data.company}</h2>
      <h3 className={slideportrait.position}>{data.position}</h3>
      <p className={slideportrait.duration}>{data.duration}</p>
      <ul className={slideportrait.details}>
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Slideportrait;
