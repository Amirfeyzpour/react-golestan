import type React from "react";
import Button from "../Button/Button";
interface comdData {
  id: number;
  title?: string;
  description?: string;
  titleName?: string;
  description2?: string;
}
const ComD: React.FC = () => {
  const comD: comdData[] = [
    {
      id: 1,
      title: "سابقه‌ای به قدمت یک عمر",
      description:
        "چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.",
    },
    {
      id: 2,
      description2:
        " با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.برای مردمان ایران زمین نام ",
      titleName: "گلستان ",
    },
  ];
  return (
    <div className="max-w-400 h-120  bg-white mx-auto">
      <div className="center w-191  mx-auto h-full">
        {comD.map((item)=>{
            return <div key={item.id} className="py-7">
                <h1 className="text-2xl text-red-600 ">{item.title}</h1>
                <p className=" text-[#818597] leading-7 ">{item.description}{item.description2}</p>
              
            </div>
        })}
        <Button text="محصولات چای" href="https://www.golestan.com/%DA%86%D8%A7%DB%8C-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA/"/>
      </div>
    </div>
  );
};
export default ComD;
