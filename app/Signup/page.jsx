import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 bg-white/30 z-50">
        <div className="flex flex-col justify-center items-center w-5/6 sm:w-1/2 h-1/2 rounded-[40px] bg-slate-200">
          <div className="text-black">
            <Link href="/" key="home" className={" rounded-lg p-2 bg-gray-600"}>
              X
            </Link>
            <p>Tên Tài Khoản</p>
            <input type="text" />
            <p>Mật Khẩu</p>
            <input type="text" />
            <p>Nhập lại Mật Khẩu</p>
            <input type="text" />
          </div>
          <button className="rounded-lg p-2 bg-gray-600">Đăng Nhập</button>
          <Link
            href="/Login"
            key="login"
            className={" rounded-lg p-2 bg-gray-600"}
          >
            Đã có tài khoản ? Đăng Nhập
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
