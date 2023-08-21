import { useState } from "react";
import NavLogo from "./nav/NavLogo.js";
function Login() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  function onSubmit() {
    if (email === "" || pswd === "") {
      console.log("Incomplete fields");
    } else {
      console.log(email + pswd);
    }
  }

  return (
    <div className = "bg-slate-700 h-full">
      <NavLogo/>
      <div className="content-center justify-center flex min-h-[calc(100vh-4rem)]">
        <div class= "shadow-2xl bg-[#111827] text-white rounded-3xl p-8 w-3/5 md:w-2/5 lg:w-1/3  m-auto">
          <h1 class="text-center font-bold " style={{ fontSize: "5vmin" }}>
            Sign in
          </h1>
          <div class="grid grid-rows-2 gap-8 xl:px-16">
            <div>
              <label
                class="px-2 py-2 font-sans"
                style={{ fontSize: "2.5vmin" }}
              >
                Email
              </label>
              <input
                value={email}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Lebron"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPswd(e.target.value)}
                value={pswd}
                required
              />
            </div>
          </div>
          <div class="grid grid-rows-3 justify-center mt-4">
            <div class="self-center">
              <button
                type="submit"
                onClick={() => onSubmit()}
                class="self-center rounded-lg bg-indigo-600 px-16 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div class="flex items-start justify-center mb-5">
              <a href="/#/PasswordReset">
                <div class="text-blue-400"> Forgot password? </div>
              </a>
            </div>
            <div class="mt-10 self-end">
              <p class="text-right">
                Not a member?&nbsp;
                <a href="/#/Register" class="text-blue-400">
                  Register now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
