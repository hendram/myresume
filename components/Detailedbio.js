import React from 'react';
import detailedbio from "@/styles/detailedbio.module.css";

const Detailedbio = ({detbio}) => {


return(
<div className={detailedbio.detbioframe}>
  <div className={detailedbio.leftbioframe}>
    <div className={detailedbio.ellipsebio}> 
      <div className={detailedbio.birthdate}></div>
      <div className={detailedbio.address}></div>
      <div className={detailedbio.email}></div>
      <div className={detailedbio.citizenship}></div>
      <div className={detailedbio.religion}></div>
    </div>
  </div>  
  <div className={detailedbio.rightbioframe}>
    <div className={detailedbio.insiderightbioframe}>
      <h3 className={detailedbio.mybirthdate}>{detbio.birthdate}</h3>
      <h3 className={detailedbio.myaddress}>{detbio.address}</h3>
      <h3 className={detailedbio.myemail}>{detbio.email}</h3>
      <h3 className={detailedbio.mycitizenship}>{detbio.citizenship}</h3>
      <h3 className={detailedbio.myreligion}>{detbio.religion}</h3>
    </div>
  </div> 
</div>
);
};

export default Detailedbio;
