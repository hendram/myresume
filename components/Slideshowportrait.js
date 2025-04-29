"use client";

import React from "react";
import slideshowportrait from "../styles/slideshowportrait.module.css";
import Slideportrait from "./Slideportrait";
import { data } from "@/app/lib/data";

const Slideshowportrait = () => {
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
<div className={slideshowportrait.fullframe}>
 <div className={slideshowportrait.workexperience_backgroundsvg}>
  <div className={slideshowportrait.workexperience}>
    <div className={slideshowportrait.workexperience_company}>
      <Slideportrait data={data[currentIndex]} />
    </div>
        <div className={slideshowportrait.workexperience_navBoxleft}>
          <button className={slideshowportrait.workexperience_navButtonLeft} onClick={goPrev}>&lt;</button>
        </div>
        <div className={slideshowportrait.workexperience_navBoxright}>
          <button className={slideshowportrait.workexperience_navButtonRight} onClick={goNext}>&gt;</button>
        </div>  
  </div> {/* end of slideshowportrait.workexperience */}
  </div> {/* end of slideshowportrait.workexperience_backgroundsvg */}

    <div className={slideshowportrait.skills_backgroundsvg} >
      <table className={slideshowportrait.skills_table} > 
      <thead className={slideshowportrait.skillsword_thead}>
       <tr>
        <th className={slideshowportrait.skillsword_th}> Skills</th>
       </tr>
      </thead>
    <tbody className={slideshowportrait.skillslist_tbody}>
     <tr  className={slideshowportrait.skillslist_tr_javascript}>
      <td className={slideshowportrait.skillslist_td_javascript}>Javascript</td>
     </tr>
     <tr  className={slideshowportrait.skillslist_tr_typescript} >
      <td className={slideshowportrait.skillslist_td_typescript}>Typescript</td>
     </tr>
      <tr  className={slideshowportrait.skillslist_tr_htmlcss} >
      <td className={slideshowportrait.skillslist_td_htmlcss}>HTML/CSS</td>
      </tr>
      <tr  className={slideshowportrait.skillslist_tr_nextjs} >
      <td className={slideshowportrait.skillslist_td_nextjs}>Nextjs</td>
      </tr>
      <tr  className={slideshowportrait.skillslist_tr_nodejs} >
      <td className={slideshowportrait.skillslist_td_nodejs}>Nodejs</td>
     </tr>
     <tr  className={slideshowportrait.skillslist_tr_python} >
       <td className={slideshowportrait.skillslist_td_python}>Python</td>
    </tr>
    </tbody>
  </table> {/* end of slideshowportrait.skills */}
</div>
</div>
 );
};

export default Slideshowportrait;
