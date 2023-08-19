import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");

  function onSubmit() {
    if (user === "" || pswd === "") {
      console.log("Incomplete fields");
    } else {
    }
  }

  return (
    <div className="bg-slate-700 h-screen content-center justify-center flex">
      <div class=" bg-[#111827] text-white rounded-3xl p-8 w-3/5 h-4/5 md:w-2/5 lg:w-1/3 xl:w-1/3 xl:h-2/3 m-auto">
        <h1 class="text-center font-bold " style={{ fontSize: "5vmin" }}>
          Register
        </h1>
        <div class="grid px-4 grid-rows-6 md:grid-rows-5 gap-4 mt-4 place-items-center">
          <div class = "col-span-2 lg:col-span-1">
            <label class="text-gray-300 px-2 py-2 font-sans" style={{ fontSize: "2.5vmin" }}>
              First Name
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
              placeholder="Lebron"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div class = "col-span-2 lg:col-span-1"> 
            <label class="text-gray-300 px-2 py-2 font-sans" style={{ fontSize: "2.5vmin" }}>
              Last Name
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
              placeholder="James"
              onChange={(e) => setPswd(e.target.value)}
              required
            />
          </div>
          <div class = "w-full col-span-2">
            <label class="text-gray-300 px-2 py-2 font-sans" style={{ fontSize: "2.5vmin" }}>
              Email
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
              placeholder="goat@gmail.com"
              onChange={(e) => setPswd(e.target.value)}
              required
            />
          </div>
          <div class = "w-full col-span-2">
            <label class="text-gray-300 px-2 py-2 font-sans" style={{ fontSize: "2.5vmin" }}>
              Password
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
              placeholder="Dunk"
              onChange={(e) => setPswd(e.target.value)}
              required
            />
          </div>
          <div class = "w-full col-span-2">
            <label class="text-gray-300 px-2 py-2 font-sans" style={{ fontSize: "2.5vmin" }}>
              Confirm Password
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
              placeholder="Dunk"
              onChange={(e) => setPswd(e.target.value)}
              required
            />
          </div>


          <div class=" col-span-2 self-center justify-self-center">
            <button
              type="submit"
              class="justify-center rounded-lg bg-indigo-600 px-16 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create account
            </button>
          </div>
        </div>
        <div id="Login" class="mt-10">
            <p class="text-right">
              Have an account?&nbsp;
              <a href="/#/Login" class="text-blue-400">
                Sign in
              </a>
            </p>
          </div>  
      </div>
    </div>
  );
}

export default Login;
