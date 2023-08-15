import {
  MagnifyingGlassIcon,
  SunIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = ({ setter }) => {
  return (
    <>
      <div className="z-20 h-10 fixed w-full sm:w-3/4 lg:w-[calc(100%-250px)] flex justify-between items-center p-1 bg-slate-800">
        <div className="flex">
          <button
            onClick={() => {
              setter((oldVal) => !oldVal);
            }}
            className="sm:hidden"
          >
            <Bars3Icon className="h-6 w-6 ml-4 hover:bg-slate-500 " />
          </button>
          <MagnifyingGlassIcon className="h-6 w-6 ml-4" />
        </div>
        <div className="flex justify-between items-center">
          <SunIcon className="h-6 w-6 mr-4" />
          <HeartIcon className="h-6 w-6 mr-4" />

          {/* cart have 0 item */}
          <ShoppingCartIcon className="h-6 w-6 mr-2" />

          {/* cart have items in */}
          <div className="relative mr-4 hidden">
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
            <div className="absolute top-0 right-0">
              <div className="h-4 w-4 bg-red-700 text-xs rounded-full opacity-80 flex items-center justify-center text-white">
                2
              </div>
            </div>
          </div>

          <div className="text-xs sm:hidden">
            <p>Aiko</p>
            <p>100.000đ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
