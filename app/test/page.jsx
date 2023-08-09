import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-semibold text-lg">Logo</div>
          <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              About
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Contact
            </a>
          </div>
          <div className="sm:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full sm:w-1/2 lg:w-1/4 text-white bg-slate-500">
        div 1
      </div>
      <div className="p-4 md:p-6 lg:p-8 text-white bg-neutral-600">div 2</div>
      <div className="hidden md:block lg:hidden">Visible on medium screens</div>
      <div className="md:hidden lg:block">
        Visible on small and large screens
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">Column 1</div>
        <div className="w-full sm:w-1/2">Column 2</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

      <hr />

      <p className="text-sm md:text-lg lg:text-xl">Responsive Text</p>
      <div className="w-full my-2 md:my-4 lg:my-6 bg-white text-black">margin responsive</div>
    </>
  );
}
