import type React from "react";
import Img from "../../../public/aseest/logo-golestan-web-1.webp"
import Navbar from "./Navbar";
const Menu:React.FC = () => {
    return ( 
        <div className="max-w-400 bg-[#282828] h-27 mx-auto">
            <div className="center flex justify-center gap-10 pt-3 items-center">
                <div className="logo">
                    <img src={Img} alt="" />
                </div>
                <div className="menu-navbar">
                    <Navbar/>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;