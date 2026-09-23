import type React from "react";

const Banner: React.FC = () => {
  return (
    <div className="max-w-400  mx-auto h-130 bg-white">
      <div
        className={`w-full bg-[url(/public/aseest/recipe-baner-1.png)] bg-[length:100%_600px] h-90  bg-fixed bg-center  `}
      ></div>
      <div className=" w-full   ">
        <div className="center w-190  pt-15  items-center mx-auto">
        <h1 className="text-2xl text-red-500 ">مجله گلستان</h1>
      </div>
      </div>
    </div>
  );
};

export default Banner;
