"use client";

import React, { useState, useEffect } from "react";
import slideshow from "../styles/slideshow.module.css";
import Slide from "./Slide";
import { data } from "@/app/lib/data";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const goNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length);
    console.log(currentIndex); 
 };

  const goPrev = () => {
    setCurrentIndex((currentIndex) => (currentIndex - 1 + data.length) % data.length);
    console.log(currentIndex);
  };


  return (
<div className={slideshow.fullframe}>
  <div className={slideshow.workexperience}>
    <div className={slideshow.workexperience_company}>
      <Slide data={data[currentIndex]} />
    </div>
    <div className={slideshow.workexperience_navigate}>
      <div className={slideshow.workexperience_ellipse}>
        <div className={slideshow.workexperience_navBox}>
          <button className={slideshow.workexperience_navButtonLeft} onClick={goPrev}>&lt;</button>
          <button className={slideshow.workexperience_navButtonRight} onClick={goNext}>&gt;</button>
        </div>
      </div> {/* end of slideshow.workexperience_ellipse */}
    </div> {/* end of slideshow.workexperience_navigate */}
  </div> {/* end of slideshow.workexperience */}

  <div className={slideshow.skills}>
    <div className={slideshow.skillsword}>
      <div className={slideshow.skillsword_ellipse}>
        <span className={slideshow.skillsword_skillsspan}>Skills</span>
      </div>
    </div>

    <div className={slideshow.skillslist}>
      <span className={slideshow.skillslist_javascript}>Javascript</span>
      <span className={slideshow.skillslist_typescript}>Typescript</span>
      <span className={slideshow.skillslist_htmlcss}>HTML/CSS</span>
      <span className={slideshow.skillslist_nextjs}>Nextjs</span>
      <span className={slideshow.skillslist_nodejs}>Nodejs</span>
      <span className={slideshow.skillslist_python}>Python</span>
    </div>
  </div> {/* end of slideshow.skills */}
</div>
 );
};

export default Slideshow;
