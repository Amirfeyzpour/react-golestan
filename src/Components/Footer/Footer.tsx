import type React from "react";
import Divider from "../Divider/Divider";
import FooterCopyRight from "./FooterCopyRight";
interface FooterLink {
  id: number;
  title: string;
  url: string;
}
interface FooterSection {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  links: FooterLink[];
}
const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      id: 1,
      title: "چای گلستان",
      image: `${import.meta.env.BASE_URL}aseest/footer-icon1.png`,
      imageAlt: "چای گلستان",
      links: [
        { id: 1, title: "چای ممتاز هندوستان", url: "#" },
        { id: 2, title: "چای ممتاز ارل گری", url: "#" },
        { id: 3, title: "چای سیلان عطری", url: "#" },
        { id: 4, title: "چای ممتاز سیلان", url: "#" },
        { id: 5, title: "چای صبحانه گلستان", url: "#" },
      ],
    },
    {
      id: 2,
      title: "تی بگ گلستان",
      image: `${import.meta.env.BASE_URL}aseest/footer-icon4.png`,
      imageAlt: "تی بگ گلستان",
      links: [
        { id: 1, title: "تی بگ بلک لاین", url: "#" },
        { id: 2, title: "تی بگ ارل گری", url: "#" },
        { id: 3, title: "دمنوش نعناع", url: "#" },
        { id: 4, title: "دمنوش بابونه", url: "#" },
        { id: 5, title: "دمنوش چای سبز", url: "#" },
      ],
    },
    {
      id: 3,
      title: "ادویه گلستان",
      image: `${import.meta.env.BASE_URL}aseest/footer-icon3.png`,
      imageAlt: "ادویه گلستان",
      links: [
        { id: 1, title: "زعفران ممتاز خراسان", url: "#" },
        { id: 2, title: "ادویه کاری", url: "#" },
        { id: 3, title: "ادویه ماست و خیار", url: "#" },
        { id: 4, title: "فلفل سیاه خالص", url: "#" },
        { id: 5, title: "زردچوبه ممتاز", url: "#" },
      ],
    },
    {
      id: 4,
      title: "حبوبات گلستان",
      image: `${import.meta.env.BASE_URL}aseest/footer-icon2.png`,
      imageAlt: "حبوبات گلستان",
      links: [
        { id: 1, title: "لوبیا قرمز ممتاز", url: "#" },
        { id: 2, title: "لوبیا چیتی گلستان", url: "#" },
        { id: 3, title: "عدس کانادایی", url: "#" },
        { id: 4, title: "نخود زودپز کرمانشاه", url: "#" },
        { id: 5, title: "لوبیا سفید گلستان", url: "#" },
      ],
    },
  ];
  return (
    <div className="h-115 max-w-400 bg-[#292929] text-white mx-auto">
      <div className="center w-170 h-full  mx-auto flex justify-between">
        {footerSections?.map(item => {
          return (
            <div className="w-30 h-78  mt-10  " key={item.id}>
              <img src={item.image} alt="" />
              <Divider />
              <h1 className="text-[16px] text-center mt-2">{item.title}</h1>
              <Divider />
              {item.links.map(items => {
                return (
                  <h2 className="text-[13px] mb-2 mt-4 text-gray-400" key={items.id}>
                    <a className="hover:text-red-500 hover:text-[14px]" href={items.url}>{items.title}</a>
                  </h2>
                );
              })}
            </div>
          );
        })}
      </div>
      <FooterCopyRight/>
    </div>
  );
};

export default Footer;
