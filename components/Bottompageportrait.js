import bottompageportrait from "@/styles/bottompageportrait.module.css";
import Slideshowportrait from "@/components/Slideshowportrait.js";
import Educationportrait from "@/components/Educationportrait.js";

const Bottompageportrait = () => {

return (
   <div className={bottompageportrait.fullpage}>
     <Slideshowportrait />
     <Educationportrait />
    </div>
)

};

export default Bottompageportrait;
