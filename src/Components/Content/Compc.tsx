import type React from "react";
import Button from "../Button/Button";
interface FoodData {
    id:number,
    title:string,
    description:string
}
const CompC:React.FC = () => {
    const Food:FoodData = {
        id:1,
        title:"رکن اول غذای ایرانی",
        description:"مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند."
    }
    return ( <div className="max-w-400 bg-white mx-auto">
    <div className="center w-191  mx-auto h-full  ">
            <h1 className="text-2xl text-red-500 pt-15">{Food.title}</h1>
            <p className="text-[16px] text-gray-400 leading-10 mt-3.5">
                {Food.description}
            </p>
            <div className="flex gap-2 ">
                <Button  text="محصولات برنج"/>
            <Button text="آشپزخانه گلستان"/>
            </div>
            <h1 className="w-full mx-auto border-b border-gray-300 mt-15 pb-5"></h1>
        </div>
        </div> );
}
 
export default CompC;