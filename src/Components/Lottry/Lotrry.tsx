import type React from "react";
import Img from "../../../public/aseest/image-2.png"
import Button from "../Button/Button";
interface LotteryData {
  id: number;
  title: string;
  Heading: string;
  priority: number;
  descriptin: string;
  src: string;
  alt: string;
  url: string;
}
const Lottery: React.FC = () => {
  //@ts-ignore
      const Lottery: LotteryData = {
    id: 1,
    priority: 1,
    title: "قرعه‌کشی مصرف‌کنندگان گلستان​",
    Heading: "قرعه‌کشی ویژه مصرف کنندگان  ",
    descriptin:
      "با خرید محصولات چای و ناتس گلستان، کد روی بسته را به شماره 30007405 ارسال کنید و در قرعه‌کشی جام جهانی با جایزه پلی‌استیشن شرکت کنید.",
    
    alt: "گلستان",
    url: "https://www.golestan.com/%D9%82%D8%B1%D8%B9%D9%87-%DA%A9%D8%B4%DB%8C-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86/",
  };
  return <div className="max-w-400 bg-[#F2F2F2] h-115 mx-auto">
    <div className="center w-210  h-full mx-auto pt-15 justify-center flex">
        <div className="center-right w-[55%] ">
            <h1 className="text-red-600 text-2xl ">{Lottery.title}</h1>
            <h2 className="text-sm text-[#58595B] mt-5">{Lottery.Heading}</h2>
             <p className="text-[#898989] leading-8 mt-3 w-110 text-justify text-sm">
                {Lottery.descriptin}
              </p>
              <Button text="اطلاعات بیشتر" href={Lottery.url} />
        </div>
        <div className="center-left ">
            <img src={Img} alt="" />
        </div>
    </div>

  </div>;
};

export default Lottery;
