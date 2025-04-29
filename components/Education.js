"use client";

import React, { useState, useEffect } from "react";
import education from "../styles/education.module.css";
import { edudata } from "@/app/lib/education.js";
import { certification } from "@/app/lib/certification.js";

const Education =  () => {


return (
    <div className={education.fullframe}>
<div className={education.degreelist}>
  <div className={education.degreelist_headbanner} >
    <span>Education</span>
  </div>

  <div className={education.degreelist_university}>
    <div className={education.degreelist_universityword}>
      University
    </div>
    <div className={`${education.degreelist_colonpart} ${education.degreelist_colon1}`}>: </div>
    <div className={education.degreelist_universitydata}>{edudata.university}</div>

    <div className={education.degreelist_periodword}>
      Period
    </div>
    <div className={`${education.degreelist_colonpart} ${education.degreelist_colon2}`}>: </div>
    <div className={education.degreelist_perioddata}>{edudata.period}</div>

    <div className={education.degreelist_degreeword}>
      Degree
    </div>
    <div className={`${education.degreelist_colonpart} ${education.degreelist_colon3}`}>: </div>
    <div className={education.degreelist_degreedata}>{edudata.degree}</div>

    <div className={education.degreelist_majorword}>
      Major
    </div>
    <div className={`${education.degreelist_colonpart} ${education.degreelist_colon4}`}>: </div>
    <div className={education.degreelist_majordata}>{edudata.major}</div>

    <div className={education.degreelist_gpaword}>
      GPA
    </div>
    <div className={`${education.degreelist_colonpart} ${education.degreelist_colon5}`}>: </div>
    <div className={education.degreelist_gpadata}>{edudata.GPA}</div>
  </div> {/* closing degreelist_university */}
</div> {/* closing degreelist */}

<div className={education.certificatelist}>
  <div className={education.certificatelist_headbanner}>
    <span>Certification</span>
  </div>

  <div className={education.certificatelist_listcontainer}>
    <div className={education.certificatelist_networkingword}>
      Networking
    </div>
    <div className={`${education.certificatelist_colonpart} ${education.certificatelist_colon1}`}>: </div>
    <div className={education.certificatelist_networkingdata}>{certification.networking}</div>

    <div className={education.certificatelist_ethicalhackingword}>
      Ethical Hacking
    </div>
    <div className={`${education.certificatelist_colonpart} ${education.certificatelist_colon2}`}>: </div>
    <div className={education.certificatelist_ethicalhackingdata}>{certification.ethical_hacking}</div>

    <div className={education.certificatelist_cloudword}>
      Cloud
    </div>
    <div className={`${education.certificatelist_colonpart} ${education.certificatelist_colon3}`}>: </div>
    <div className={education.certificatelist_clouddata}>{certification.cloud}</div>
  </div> {/* closing certificatelist_listcontainer */}
</div> {/* closing certificatelist */}
</div>

)

};

export default Education;
