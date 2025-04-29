"use client"

import '@/app/globals.css';
import Biodata from "@/components/Biodata";
import Biodataportrait from "@/components/Biodataportrait";
import Bottompage from "@/components/Bottompage";
import Bottompageportrait from "@/components/Bottompageportrait";
import page  from "@/styles/page.module.css";
import pageportrait from "@/styles/pageportrait.module.css";
import { useEffect, useState } from "react";

export default function MainPage() {

  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation(); // Initial check
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

    return isPortrait ? 
    (
     <div className={pageportrait.fullpage} >
        <Biodataportrait />
      <Bottompageportrait />
     </div>
) : (
 <div className={page.fullpage} >
        <Biodata />
      <Bottompage />
     </div>

);

}
