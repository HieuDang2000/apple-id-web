"use client";

import RunningText from "./Runing-text";
import SideBar from "./SideBar/SideBar";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import AdminHeader from "../admin/AdminHeader";

const HeaderSideBar = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {pathname.includes("/admin") ? (
        <>
          <AdminSideBar show={showSidebar} setter={setShowSidebar} />
          <div className="bg-gray-950 w-1/2 sm:w-1/4 lg:w-[250px] hidden sm:block transition-[margin-left] ease-in-out duration-500 ml-[-500px] sm:ml-0"></div>
          <div className="w-full sm:w-3/4 lg:w-[calc(100%-250px)] static bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
            <AdminHeader setter={setShowSidebar} />
            <div className=" p-2 ">
              <div className="h-10 w-full sm:w-3/4 lg:w-[calc(100%-250px)]"></div>
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          <SideBar show={showSidebar} setter={setShowSidebar} />

          <div className="bg-gray-950 w-1/2 sm:w-1/4 lg:w-[250px] hidden sm:block transition-[margin-left] ease-in-out duration-500 ml-[-500px] sm:ml-0"></div>

          <div className="w-full sm:w-3/4 lg:w-[calc(100%-250px)] static bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
            <Header setter={setShowSidebar} />
            <div className=" p-2 ">
              <div className="h-10 w-full sm:w-3/4 lg:w-[calc(100%-250px)]"></div>

              <RunningText text="THÔNG BÁO : Trong toán học và nghệ thuật, hai đại lượng được gọi là có tỷ số vàng hay tỷ lệ vàng nếu tỷ số giữa tổng của các đại lượng đó với đại lượng lớn hơn bằng tỷ số giữa đại lượng lớn hơn với đại lượng nhỏ hơn." />

              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderSideBar;
