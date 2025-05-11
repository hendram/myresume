import React, { useState } from "react";
import slideportrait from "../styles/slideportrait.module.css";

const Slideportrait = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={slideportrait.slide}>
      <h2 className={slideportrait.company}>{data.company}</h2>
      <h3 className={slideportrait.position}>{data.position}</h3>
      <p className={slideportrait.duration}>{data.duration}</p>
      <ul className={slideportrait.details}>
        {data.details.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={slideportrait.detailItem}
          >
            {item.text}
            {hoveredIndex === index && (
              <div className={slideportrait.tooltip}>
                <div className={slideportrait.tooltipbox}>
                  {item.desc}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slideportrait;
