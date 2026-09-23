import type React from "react";
interface prouductData {
    id:number,
    title:string,
    description:string,
    nameIndustrie:string
}
const ComB:React.FC = () => {
        const product :prouductData = {
        id:2,
        title:"محصولات گلستان​",
        nameIndustrie:"نام تجاری گلستان",
        description:" قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند."

    }
    return ( 
        <div className="center w-191  mx-auto  ">
            <h1 className="text-2xl text-red-500 mt-20">{product.title}</h1>
            <p className="text-[16px] text-gray-400 leading-10 mt-3.5">
                <span className="text-red-500">{product.nameIndustrie}</span>
                {product.description}
            </p>
            <h1 className="w-full mx-auto border-b border-gray-300 mt-15 pb-5"></h1>
        </div>
     );
}
 
export default ComB;