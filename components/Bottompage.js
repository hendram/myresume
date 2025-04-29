import bottompage from "@/styles/bottompage.module.css";
import Slideshow from "@/components/Slideshow.js";
import Education from "@/components/Education.js";

const Bottompage = () => {

return (
   <div className={bottompage.fullpage}>
     <Slideshow />
     <Education />
    </div>
)

};

export default Bottompage;
