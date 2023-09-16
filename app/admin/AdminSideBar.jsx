import {
  TagIcon,
  HomeIcon,
  BookOpenIcon,
  ListBulletIcon,
  UserGroupIcon,
  UserIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import logo from "../components/SideBar/logo.png";
import SideBarContent from "./AdminSideBarContent";

const AdminSideBar = ({ show, setter }) => {
  const className =
    "text-black dark:text-white bg-slate-50 dark:bg-gray-950 w-1/2 sm:w-1/4 lg:w-[250px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-500px] sm:ml-0";

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex sm:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`${className} ${appendClass}`}
      >
        <div className="p-2 ">
          {/* logo  */}
          <div className="pb-2 flex">
            <Image src={logo.src} width={40} height={40} alt="Logo" />
            <h1 className="flex items-center w-1/2 pl-2 text-xl font-semibold">
              LOGO
            </h1>
          </div>

          <hr className="border-slate-600" />

          <div className="mt-4">
            <div className="text-sm text-gray-400">Tài khoản:</div>
            <div className="">AikoCute Admin</div>
          </div>

          <hr className="border-slate-600 mt-4" />

          <SideBarContent
            header=""
            list={["Đăng Xuất"]}
            icon={[<ArrowLeftOnRectangleIcon />]}
            navLinks={["/Login"]}
          />

          <SideBarContent
            header="Quản lý"
            list={[
              "Trang Chủ",
              "Sản Phẩm",
              "Hướng Dẫn",
              "Đơn Hàng",
              "Người dùng",
            ]}
            icon={[
              <HomeIcon />,
              <TagIcon />,
              <BookOpenIcon />,
              <TagIcon />,
              <TagIcon />,
            ]}
            navLinks={["/", "/SanPham", "/HuongDan", "/HuongDan", "/HuongDan"]}
          />
          <SideBarContent
            header="Thống Kê"
            list={["Doanh Thu Tổng", "CTV"]}
            icon={[<HomeIcon />, <TagIcon />, <BookOpenIcon />]}
            navLinks={["/", "/SanPham", "/HuongDan"]}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
};

export default AdminSideBar;
