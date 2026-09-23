import type React from "react";
import Button from "../Button/Button";
interface videoData {
  id: number;
  title: string;
  priority: number;
  descriptin: string;
  source: string;
  btnText: string;
  url: string;
}
const Vidio:React.FC = () => {
     const blog: videoData[] = [
    {
      id: 1,
      title: "سالاد نودل",
      descriptin:
        "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
      priority: 1,
      source:
        "https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame",
      btnText: "ویدئو های بیشتر",
      url: "#",
    },
    {
      id: 2,
      title: "اینستاگرام هاتی نودل",
      descriptin:
        "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
      priority: 2,
      source:
        "https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame",
      btnText: "ادامه مطلب",
      url: "#",
    },
    {
      id: 3,
      title: "برنج گلستان",
      descriptin:
        "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
      priority: 3,
      source:
        "https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame",
      btnText: "مشاهده محصولات",
      url: "#",
    },
  ];
    return ( 
        <div className="max-w-400 h-143 mx-auto bg-white flex items-center">
            <div className="center w-248 h-115  mx-auto flex items-center justify-between  ">
           {blog.map((item)=>{
            return <div className="w-79 h-112 shadow-xl shadow-gray-400 " key={item.id}>
                <figure className="aspect-video">
                <iframe src={item.source} className="w-full h-full " allowFullScreen></iframe>
                </figure>
                <h1 className="text-red-500 pr-4 text-[18px] pb-5 ">{item.title}</h1>
                <p className="leading-7 pr-2 text-gray-400">{item.descriptin}</p>
                <div className="flex pr-4">
                    <Button text={item.btnText}/>
                </div>
            </div>
           })}
            </div>
        </div>
     );
}
 
export default Vidio;