import React from 'react';
import biodataportrait from "@/styles/biodataportrait.module.css"; 
import localFont from 'next/font/local';
import Detailedbioportrait from "@/components/Detailedbioportrait.js";
import { mybiodata } from "@/app/lib/mybiodata.js";

const merriweather = localFont({
src: [
    {
      path: '../fonts/merriweather/ttf/merriweather-latin-300-normal.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/merriweather/ttf/merriweather-latin-300-italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/merriweather/ttf/merriweather-latin-900-normal.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/merriweather/ttf/merriweather-latin-900-italic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
 variable: '--font-merriweather'
});
 
const Biodataportrait = () => {
return (
<div className={biodataportrait.toppage} >
  <div className={biodataportrait.level1svg} >
    <div className={biodataportrait.photoside} >
      <img src="./foto.jpg" alt="Hendra Mulyanto" className={biodataportrait.image} />
    </div>  
  </div>
  <div className={biodataportrait.mynameandtitle}>
    <div className={biodataportrait.mynamebox}>
      <span className={` ${merriweather.variable} ${biodataportrait.myname} `}>Hendra Mulyanto </span>
    </div>
    <div className={biodataportrait.mytitlebox}>
      <span className={` ${merriweather.variable} ${biodataportrait.mytitle} `}> Web Developer </span>
    </div>
  </div>

  <div className={biodataportrait.bottomframe} >
    <Detailedbioportrait detbio={mybiodata} /> 
  </div>
</div>

  );
};

export default Biodataportrait;


