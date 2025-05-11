import React, { useState, useRef, useEffect } from "react";
import slideportrait from "../styles/slideportrait.module.css";
import PortalTooltip from "./PortalTooltipportrait.js"; 

const Slideportrait = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const itemRefs = useRef([]);

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const rect = itemRefs.current[hoveredIndex].getBoundingClientRect();
      setTooltipPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [hoveredIndex]);

  const tooltipProps =
    hoveredIndex !== null
      ? {
          desc: data.details[hoveredIndex].desc,
          style: tooltipPos,
        }
      : null;

  return (
    <div className={slideportrait.slide}>
      <h2 className={slideportrait.company}>{data.company}</h2>
      <h3 className={slideportrait.position}>{data.position}</h3>
      <p className={slideportrait.duration}>{data.duration}</p>
      <ul className={slideportrait.details}>
        {data.details.map((item, index) => (
          <li
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={slideportrait.detailItem}
          >
            {item.text}
          </li>
        ))}
      </ul>

      { tooltipProps && 
        <PortalTooltip {...tooltipProps} />
      }

    </div>
  );
};

export default Slideportrait;
