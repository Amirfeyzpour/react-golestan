import type React from "react";

import Button from "../Button/Button";
interface PastaData {
  id: number;
  title: string;
  priority: number;
  descriptin: string;
  src: string;
  alt: string;
  url: string;
}

const Pasta:React.FC = () => {
    const pasta: PastaData[] = [
    {
      id: 1,
      title: "ماکارونی با سبزیجات",
      descriptin:
        "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
      priority: 1,
      url: "#",
      src: `${import.meta.env.BASE_URL}aseest/pasta.jpg`,
      alt: "recipe-pic-2",
    },
    {
      id: 2,
      title: "سوپ مکزیکی",
      descriptin:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
      priority: 2,
      url: "#",
      src: `${import.meta.env.BASE_URL}aseest/soup.jpg`,
      alt: "recipe-pic3",
    },
    {
      id: 3,
      title: "چیلاکیله ",
      descriptin:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
      priority: 2,
      url: "#",
      src: `${import.meta.env.BASE_URL}aseest/chila.jpg`,
      alt: "recipe-pic4",
    },
  ];
    return ( <div className="max-w-400 h-193 bg-[#CDE4B0] mx-auto items-center flex">
        <div className="center w-248 h-153  mx-auto flex justify-between">
           { pasta?.map((item)=>{
            return <div className="card w-80 bg-white h-152  " key={item.id}>
                <img className="mb-8" src={item.src} alt={item.alt} />
                <h1 className="text-[20px] pr-5 pb-3 text-red-500">{item.title}</h1>
                <p className="text-gray-400 leading-7 px-3">{item.descriptin}</p>
                <div className="px-2">
                    <Button text="ادامه مطلب"/>
                </div>
            </div>
           })}
        </div>
    </div> );
}
 
export default Pasta;