import React from 'react';
import detailedbioportrait from "@/styles/detailedbioportrait.module.css";

const Detailedbioportrait = ({detbio}) => {


return(
<table className={detailedbioportrait.dettableframe}>
  <tbody className={detailedbioportrait.dettablebody}>
    <tr className={detailedbioportrait.firsttr}>
      <td className={detailedbioportrait.td1birthdate}> 
        <div className={detailedbioportrait.birthdate}></div>
      </td>
      <td className={detailedbioportrait.td2birthdate}> 
        <div className={detailedbioportrait.mybirthdate}>{detbio.birthdate}</div>
      </td>
    </tr>

    <tr className={detailedbioportrait.secondtr}>
      <td className={detailedbioportrait.td1address}> 
        <div className={detailedbioportrait.address}></div>    
      </td>
      <td className={detailedbioportrait.td2address}> 
        <div className={detailedbioportrait.myaddress}>{detbio.address}</div>
      </td>
    </tr>

    <tr className={detailedbioportrait.thirdtr}>
      <td className={detailedbioportrait.td1email}> 
        <div className={detailedbioportrait.email}></div>
      </td>
      <td className={detailedbioportrait.td2email}> 
        <div className={detailedbioportrait.myemail}>{detbio.email}</div>
      </td>
    </tr>

    <tr className={detailedbioportrait.fourthtr}>
      <td className={detailedbioportrait.td1citizenship}> 
        <div className={detailedbioportrait.citizenship}></div>
      </td>
      <td className={detailedbioportrait.td2citizenship}> 
        <div className={detailedbioportrait.myemail}>{detbio.citizenship}</div>
      </td>
    </tr>

    <tr className={detailedbioportrait.fifthtr}>
      <td className={detailedbioportrait.td1religion}> 
        <div className={detailedbioportrait.religion}></div>
      </td>
      <td className={detailedbioportrait.td2religion}> 
        <div className={detailedbioportrait.myreligion}>{detbio.religion}</div>
      </td>
    </tr>
  </tbody>
</table>
);
};

export default Detailedbioportrait;
