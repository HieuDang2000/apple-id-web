import {
  TagIcon,
  HomeIcon,
  BookOpenIcon,
  ListBulletIcon,
  UserGroupIcon,
  UserIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import logo from "./logo.png";
import SideBarContent from "./SideBarContent";

export default function SideBar({ show, setter }) {

  const className =
    "bg-gray-950 w-1/2 sm:w-1/4 lg:w-[250px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40";
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
        <div className="p-2 bg-gray-950">
          {/* logo  */}
          <div className="pb-2 flex">
            <Image src={logo.src} width={40} height={40} alt="Logo" />
            <h1 className="flex items-center w-1/2 pl-2 text-xl font-semibold">
              LOGO
            </h1>
          </div>

          <hr className="border-slate-600" />

          {/* user info */}
          <div className="p-2 flex flex-col md:flex-row">
            <div className="mr-2 md:w-1/2">
              <div className="text-sm text-gray-400">Tài khoản:</div>
              <div className="">AikoCute</div>
            </div>
            <div className="md:w-1/2">
              <div className="text-sm text-gray-400">Số dư:</div>
              <div className="">100.000đ</div>
            </div>
          </div>

          <hr className="border-slate-600" />

          <SideBarContent
            header="Các Trang Chính"
            list={["Trang Chủ", "Sản Phẩm", "Hướng Dẫn"]}
            icon={[<HomeIcon />, <TagIcon />, <BookOpenIcon />]}
            navLinks={["/", "/SanPham", "/HuongDan"]}
          />
          <SideBarContent
            header="Hóa Đơn"
            list={["Đơn Hàng", "Cộng Tác Viên"]}
            icon={[<ListBulletIcon />, <UserGroupIcon />]}
            navLinks={["/DonHang", "/CTV"]}
          />
          <SideBarContent
            header="Người Dùng"
            list={["Thông Tin", "Nạp tiền"]}
            icon={[<UserIcon />, <CurrencyDollarIcon />]}
            navLinks={["/ThongTin", "/NapTien"]}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
