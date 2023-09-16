'use client'
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import DMButton from './DMButton'
import { usePathname } from "next/navigation";

const Header = ({ setter }) => {

  const pathname = usePathname();

  return (
    <>
      <div className="z-20 h-10 fixed w-full sm:w-3/4 lg:w-[calc(100%-250px)] flex justify-between items-center p-1 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white">
        <div className="flex">
          {/* hamburger button */}
          <button
            onClick={() => {
              setter((oldVal) => !oldVal);
            }}
            className="sm:hidden"
          >
            <Bars3Icon className="h-6 w-6 ml-4 hover:bg-slate-500 " />
          </button>

          <div className="text-sm text-gray-400 px-2">Doanh thu tháng: </div>
          <div className=""> 100.000đ</div>
        </div>
        <div className="flex justify-between items-center">
          <DMButton />
        </div>
      </div>
    </>
  );
};

export default Header;
