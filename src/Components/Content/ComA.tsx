import type React from "react";
interface blogData {
    id:number,
    title:string,
    description:string,
    descriptionextra:string
}
const CompA:React.FC = () => {
        const blog:blogData = {
        id:1,
        title:"معرفی گلستان",
        description:"آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.",
        descriptionextra:"هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی "

    };
    return ( 
        <div className="">
            <div className="center w-191  mx-auto h-full ">
            <h1 className="w-full mx-auto border-b border-gray-300 mt-20 pb-5">
            </h1>
            <h1 className="text-2xl text-red-600 mt-10 ">{blog.title}</h1>
            <p className="text-[16px] text-gray-400 mt-4 leading-8">{blog.description}</p>
            <p className="text-[16px] text-gray-400 mt-4 leading-8">{blog.descriptionextra}
                <span className="text-red-500">شرکت گلستان </span>
                 است. 
            </p>
            
            </div>
        </div>
     );
}
 
export default CompA;