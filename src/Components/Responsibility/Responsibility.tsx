import type React from "react";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
interface ResponsibilityData {
  id: number;
  title: string;
  EnTitle: string;
  EnTitle2: string;
  Heading: string;
  priority: number;
  descriptin1: string;
  brand: string;
  descriptin2: string;
  src: string;
  alt: string;
  url: string;
}
const Responsibility:React.FC = () => {
    const responsibility: ResponsibilityData = {
    id: 1,
    title: "مسئوليت‌های اجتماعی گلستان",
    EnTitle: "Golestan Social Responsibility",
    EnTitle2: "Mahdi Hospital",
    Heading: "مسئوليت‌های اجتماعی شركت گلستان",
    priority: 1,
    descriptin1:
      "كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.",
    brand: "گلستان",
    descriptin2:
      "در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.",
    src:  `${import.meta.env.BASE_URL}aseest/Hospital.jpg`,
    alt: "Mahdi Hospital",
    url: "#",
  };
    return (<div>
        <div className="max-w-400 h-159 bg-[#E9D69F] mx-auto">
         <div className="max-w-400 mx-auto h-150 bg-[#105153] flex  ">
            <div className="center w-102  h-full mx-auto mt-70 ">
                <h1 className="text-center text-amber-200">{responsibility.Heading}</h1>
                <Divider/>
                <h1 className="text-[#00C7D8] text-2xl text-center pt-3">{responsibility.EnTitle}</h1>
                <h1 className="text-gray-400 text-center pt-3 text-[18px]">{responsibility.EnTitle2}</h1>
                <img className="text-center pr-1.5 pt-3 block" src={responsibility.src} alt={responsibility.alt} />
            </div>
    </div>
    </div>
    <div className="h-130 bg-white mx-auto max-w-400 flex items-end ">
        <div className="center w-180  mx-auto h-90 ">
            <h1 className="text-2xl text-red-500 pr-4">{responsibility.Heading}</h1>
            <p className="leading-8 pr-4 mt-3 text-gray-400 pl-1">{responsibility.descriptin1} 
                 <span className="text-red-500">{responsibility.brand} </span>
                {responsibility.descriptin2}
            </p>
            <div className="pr-3 mt-3.5">
                <Button text="ادامه مطلب "/>
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Responsibility;