import type React from "react";
import Button from "../Button/Button";

interface comfData{
    title:string,
    description:string,
    titleSpan:string,
    description2:string
}
const ComF:React.FC = () => {
    const comf:comfData={
        title:"آجيل‌های خوش خنده",
        description:"خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.",
        titleSpan:"پسته گلستان",
        description2:" اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد."
    }
    return ( <div className="max-w-400 mx-auto h-100 bg-white" >
        <div className="center w-191 mx-auto  h-full pt-10">
            <h1 className="text-2xl text-red-500 pb-4 ">{comf.title}</h1>
            <p className="text-gray-400 leading-7 pb-5">{comf.description}</p>
            <p className="text-gray-400 leading-8">
                <span className="text-red-500">{comf.titleSpan}</span>
                {comf.description2}
            </p>
            <Button text="ناتس گلستان" />
        </div>
     
    </div>
    
     );
}
 
export default ComF;