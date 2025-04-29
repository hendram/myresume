"use client";

import React from "react";
import educationportrait from "../styles/educationportrait.module.css";
import { edudata } from "@/app/lib/education.js";
import { certification } from "@/app/lib/certification.js";

const Educationportrait =  () => {


return (
<div className={educationportrait.fullframe}>
  <div className={educationportrait.degreelist_backgroundsvg}>
  <table className={educationportrait.degreelist_table}>
    <thead className={educationportrait.degreelist_thead}>
     <tr>
      <th className={educationportrait.degreelist_th_word} >Education</th>
     </tr>
    </thead>
    <tbody className={educationportrait.degreelist_tbody_university}>
    <tr>
      <td className={educationportrait.degreelist_td_universityword}>
        University
      </td>
      <td className={educationportrait.degreelist_td_colon1}>:</td>
      <td className={educationportrait.degreelist_td_universitydata}>{edudata.university}</td>
   </tr>
      <tr>
      <td className={educationportrait.degreelist_td_periodword}>
        Period
      </td>
      <td className={educationportrait.degreelist_td_colon2}>:</td>
      <td className={educationportrait.degreelist_td_perioddata}>{edudata.period}</td>
   </tr>
     <tr>
      <td className={educationportrait.degreelist_td_degreeword}>
        Degree
      </td>
      <td className={educationportrait.degreelist_td_colon3}>:</td>
      <td className={educationportrait.degreelist_td_degreedata}>{edudata.degree}</td>
     </tr>
     <tr>
      <td className={educationportrait.degreelist_td_majorword}>
        Major
      </td>
      <td className={educationportrait.degreelist_td_colon4}>:</td>
      <td className={educationportrait.degreelist_td_majordata}>{edudata.major}</td>
     </tr>
     <tr>
      <td className={educationportrait.degreelist_td_gpaword}>
        GPA
      </td>
      <td className={educationportrait.degreelist_td_colon5}>:</td>
      <td className={educationportrait.degreelist_td_gpadata}>{edudata.GPA}</td>
     </tr>
    </tbody> {/* closing degreelist_university */}
  </table> {/* closing degreelist */}
 </div>
  <div className={educationportrait.certificatelist_backgroundsvg} >
  <table className={educationportrait.certificatelist_table}>
    <thead className={educationportrait.certificatelist_thead}>
     <tr>
      <th className={educationportrait.certificatelist_th_word}>Certification</th>
     </tr>
    </thead>
    <tbody className={educationportrait.certificatelist_tbody_listcontainer}>
     <tr>      
      <td className={educationportrait.certificatelist_td_networkingword}>
        Networking
      </td>
      <td className={educationportrait.certificatelist_td_colon1}>:</td>
      <td className={educationportrait.certificatelist_td_networkingdata}>{certification.networking}</td>
    </tr>
      <tr>
      <td className={educationportrait.certificatelist_td_ethicalhackingword}>
        Ethical Hacking
      </td>
      <td className={educationportrait.certificatelist_td_colon2}>:</td>
      <td className={educationportrait.certificatelist_td_ethicalhackingdata}>{certification.ethical_hacking}</td>
   </tr>
     <tr>
      <td className={educationportrait.certificatelist_td_cloudword}>
        Cloud
      </td>
      <td className={educationportrait.certificatelist_td_colon3}>:</td>
      <td className={educationportrait.certificatelist_td_clouddata}>{certification.cloud}</td>
     </tr>
    </tbody> {/* closing certificatelist_listcontainer */}
  </table> {/* closing certificatelist */}
</div>
</div>

)

};

export default Educationportrait;
