import type React from "react";
import Menu from "../Menu/Menu";
import Lottery from "../Lottry/Lotrry";
import Content from "../Content/Content";
import Photo from "../Photo/Photo";
import CompC from "../Content/Compc";
import PhotoB from "../Photo/PhotoB";
import ComD from "../Content/ComD";
import PhotoC from "../Photo/PhotoC";
import ComF from "../Content/ComF";
import Banner from "../Content/Banner";
import Pasta from "../Pasta/Pasta";
import Vidio from "../Vidio/Vidio";
import Responsibility from "../Responsibility/Responsibility";
import Footer from "../Footer/Footer";

const App: React.FC = () => {
    return ( 
        <div>
            <Menu/>
            <Lottery/>
            <Content/>
           
            <Photo/>
            
            <CompC/>
            
            <PhotoB/>
            <ComD/>
            <PhotoC/>
            <ComF/>
            <Banner/>
            <Pasta/>
            <Vidio/>
            <Responsibility/>
            <Footer/>
        </div>
     );
}
 
export default App;