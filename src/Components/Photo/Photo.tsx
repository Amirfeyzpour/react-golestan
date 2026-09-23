import type React from "react";
import Divider from "../Divider/Divider";
const Photo:React.FC = () => {
    const image = `${import.meta.env.BASE_URL}aseest/image-2.jpg`
    return ( <div className="max-w-400 h-141 relative bg-[#E9D69F] mx-auto ">
        <Divider/>
        <img className="object-cover w-full h-122 mt-4 mb-10 " src={image} alt="" />
        <div className="h-25 w-72 bg-red-600 absolute bottom-0 right-1/3  justify-center items-center">
            <h1 className="text-2xl text-white pr-4 mb-3 ">برنج گلستان</h1>
            <h1 className="text-2xl text-white pr-4 ">معرفی محصول</h1>
        </div>
        <Divider/>
    </div> );
}
 
export default Photo;