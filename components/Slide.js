import React, { useState } from "react";
import slide from "../styles/slide.module.css";

const Slide = ({ data, setSkills }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
   <div className={slide.slide}>
      <h2 className={slide.company}>{data.company}</h2>
      <h3 className={slide.position}>{data.position}</h3>
      <p className={slide.duration}>{data.duration}</p>
      <ul className={slide.details}>
        {data.details.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => {
                  setHoveredIndex(index);
                  setSkills(item.skills);
                  } }
            onMouseLeave={() => {
               setHoveredIndex(null);
               setSkills(""); 
               }}
            className={slide.detailItem}
          >
            {item.text}
            {hoveredIndex === index && (
              <div className={slide.tooltip}>
                <div className={slide.tooltipbox}>
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

export default Slide;
