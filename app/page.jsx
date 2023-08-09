export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-gray-800 text-white w-1/5 hidden sm:block">
          <div className="p-2">
            {/* logo  */}
            <div className="pb-2 flex flex-row items-center justify-center">
              <img
                src="https://th.bing.com/th/id/R.0cccbc84e639c3eee5853485ec63c7a6?rik=igAVfHUBD25GrA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-OnBHWZA0iwU%2fVgF8RpiV5jI%2fAAAAAAAAlJU%2fBn49E11oLYM%2fs1600%2fCircle-K-logo.png&ehk=O6MC0yAtm%2bnLNH%2faaTv65oNQ3uJfikRbTWos4wPp%2f2w%3d&risl=&pid=ImgRaw&r=0"
                alt="logo"
                className=" pr-1 w-1/2 "
              />
              <h1 className="w-1/2 text-xl font-semibold">LOGO</h1>
            </div>

            <hr />

            {/* user info */}
            <div className="p-2 flex flex-col lg:flex-row">
              <div className="mr-2 lg:w-1/2">
                <div className="text-sm">Tài khoản:</div>
                <div className="">AikoCute</div>
              </div>
              <div className="lg:w-1/2">
                <div className="text-sm">Số dư:</div>
                <div className="">100.000đ</div>
              </div>
            </div>

            <hr />

            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-500">Các Trang Chính</li>
              <li>
                <a href="#" className="flex  hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  Hướng Dẫn
                </a>
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-500">Hóa Đơn</li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Đơn Hàng
                </a>
              </li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Cộng Tác Viên
                </a>
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-500">Người Dùng</li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Thông Tin
                </a>
              </li>
              <li>
                <a href="#" className=" flex hover:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nạp tiền
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full p-4">
          <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </>
  );
}
