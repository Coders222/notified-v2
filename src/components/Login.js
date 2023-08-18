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
      <div class=" bg-[#111827] text-white rounded-3xl p-8 w-3/5 h-3/5 md:w-2/5 md:h-2/3 lg:w-1/3 lg:h-2/3 m-auto">
        <h1 class="text-center font-bold " style={{ fontSize: "5vmin" }}>
          Sign in
        </h1>
        <div class="grid px-4 grid-rows-2 gap-8 mt-4 justify-items-center">
          <div class="grid grid-rows-2 gap-8">
            <div>
              <label
                class="px-2 py-2 font-sans"
                style={{ fontSize: "2.5vmin" }}
              >
                Username
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Lebron"
                required
              />
            </div>
            <div>
              <label
                class="px-2 py-2 font-sans"
                style={{ fontSize: "2.5vmin" }}
              >
                Password
              </label>
              <input
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="James"
                required
              />
            </div>
          </div>
          <div class="grid grid-rows-2 ">
            <div class="self-center ">
              <button
                type="submit"
                class="justify-center rounded-lg bg-indigo-600 px-16 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div class="flex items-start justify-center mb-5">
              <a href="/">
                <div class="text-blue-400"> Forgot password? </div>
              </a>
            </div>
          </div>
        </div>
        <div id = "register" class = "mt-10">
          <p class = "text-right">
            Not a member?&nbsp;  
            <a href = "/#/Register" class="text-blue-400">
             Sign up
            </a> 
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
