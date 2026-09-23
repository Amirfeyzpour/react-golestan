import type React from "react";

const Navbar:React.FC = () => {
    return ( 
        <div className="">
            <div className=" text-[#FDFEFE]   w-full ">
     <div className="collapse-title navbar">
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><button>صفحه اصلی</button></li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
        <li>
          <details>
            <summary>شرکت گلستان</summary>
            <ul className="p-2 bg-[#282828] w-40 z-1">
              <li><button>معرفی شرکت</button></li>
              <li><button>ناریخ چه گلستان </button></li>
              <li><button>اخبار و اطلاعیه ها</button></li>
              <li><button>مسئولیت های اجتماعی</button></li>
              <li><button>سازمان فروش</button></li>
              <li><button>سازمان توزیع</button></li>
              <li><button>برندها</button></li>
            </ul>
          </details>
        </li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
        <li>
          <details>
            <summary>محصولات</summary>
            <ul className="p-2 bg-[#282828] w-40 z-1">
              <li><button>معرفی شرکت</button></li>
              <li><button>ناریخ چه گلستان </button></li>
              <li><button>اخبار و اطلاعیه ها</button></li>
              <li><button>مسئولیت های اجتماعی</button></li>
              <li><button>سازمان فروش</button></li>
              <li><button>سازمان توزیع</button></li>
              <li><button>برندها</button></li>
            </ul>
          </details>
        </li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
        <li>
            <details>
                <summary>وبلاگ</summary>
                <ul className="p-2 bg-[#282828] w-40 z-1">
        <li><button>مجله ی گلستان</button></li>
        </ul>
        </details>
        </li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
         <li><button>قرعه کشی</button></li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
         <li><button>استخدام</button></li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
        <li>
            <details>
                <summary>تماس با ما</summary>
                <ul className="p-2 bg-[#282828] w-40 z-1">
                    <li><button>دفتر رکزی</button></li>
              <li><button>صدای مصرف کنندگان</button></li>
              <li><button>ارتباط با مشترکین</button></li>
                </ul>
            </details>
        </li>
        <span className="w-0.5 bg-gray-600 h-10"></span>
        <li><button>EN</button></li>
        
      </ul>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default Navbar;