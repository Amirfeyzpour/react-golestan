import type React from "react";
import Divider from "../Divider/Divider";
import CompA from "./ComA";
import ComB from "./ComB";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

const Content:React.FC = () => {

    return ( 
        <div className="h-280 bg-[#FFFFFF] max-w-400 mx-auto">
            <Divider/>
            <div className="center w-191  mx-auto h-full ">
            <CompA/>
            <h1 className="w-full mx-auto border-b border-gray-300 mt-15 pb-5"></h1>
            
            <ComB/>
            <CategoryNavigation/>
            </div>
        </div>
     );
}
 
export default Content;