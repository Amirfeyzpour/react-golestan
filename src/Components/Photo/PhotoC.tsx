import type React from "react";
import Divider from "../Divider/Divider";
const PhotoC:React.FC = () => {
    const img = `${import.meta.env.BASE_URL}aseest/image4-new.jpg`
    return ( 
       <div className="max-w-400 h-141 relative bg-[#E9D69F] mx-auto ">
        
        <img className="object-cover w-full h-130  mb-10 " src={img} alt="" />
        <div className="h-25 w-72 bg-red-600 absolute bottom-0 right-1/3  justify-center items-center">
            <h1 className="text-2xl text-white pr-4 mb-3 ">پسته گلستان</h1>
            <h1 className="text-2xl text-white pr-4 ">معرفی محصول</h1>
        </div>
        <Divider/>
    </div>
     );
}
 
export default PhotoC;