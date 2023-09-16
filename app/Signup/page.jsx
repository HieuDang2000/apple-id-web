import Link from "next/link";

const page = () => {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center  fixed top-0 right-0 bottom-0 left-0">
        <div class=" p-8 shadow-md rounded-md w-80">
          <h2 class="text-2xl font-semibold mb-6">Sign Up</h2>
          <form>
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-600 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Password"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="password_confirmation"
                class="block text-gray-600 text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>
          <div class="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/Login"
              key="signup"
              className={" text-indigo-500 hover:underline"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
