import React from 'react';
import biodata from "@/styles/biodata.module.css"; 
import localFont from 'next/font/local';
import Detailedbio from "@/components/Detailedbio.js";
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
 
const Biodata = () => {
return (
<div className={biodata.toppage} >
  <div className={biodata.topframe}>
    <div className={biodata.photoside}>
      <img src="./foto.jpg" alt="Hendra Mulyanto" className={biodata.image} />
    </div>
    <div className={biodata.mynameandtitle}>
      <div className={biodata.mynamebox}>
        <span className={` ${merriweather.variable} ${biodata.myname} `}>Hendra Mulyanto </span>
      </div>
      <div className={biodata.mytitlebox}>
        <span className={` ${merriweather.variable} ${biodata.mytitle} `}> Web Developer </span>
      </div>
    </div>
  </div>
  <div className={biodata.bottomframe} >
    <Detailedbio detbio={mybiodata} /> 
  </div>
</div>
  );
};

export default Biodata;


