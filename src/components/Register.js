import { useState } from "react";
import NavLogo from "./nav/NavLogo.js";
import { request } from "./fetch.js";

function Login() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswd2, setPswd2] = useState("");

  function onSubmit() {
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      pswd2 === "" ||
      pswd === ""
    ) {
      console.log("Incomplete fields");
    } else if (pswd !== pswd2) {
      console.log("passwords do not match");
    } else {
      fetch("post", "/accounts/register", {
        firstName: fname,
        lastName: lname,
        email: email,
        password: pswd,
      }).then((res) => {
        console.log(res);
      });
    }
  }

  return (
    <div>
      <NavLogo />
      <div className="min-h-[calc(100vh-4rem)] bg-slate-700 content-center justify-center flex">
        <div class=" bg-[#111827] text-white rounded-3xl p-8 w-4/5 md:w-3/5 lg:w-1/3 xl:w-1/3 xl:p-24 m-auto">
          <h1 class="text-center font-bold text-3xl">Register</h1>
          <div class="md:text-xl font-bold grid px-4 grid-rows-6 md:grid-rows-5 gap-1 mt-4">
            <div class="col-span-2 w-full xl:col-span-1">
              <label class="text-gray-300 px-2 py-2 font-sans">
                First Name
              </label>
              <input
                value={fname}
                type="text"
                class="text-lg lg:text-xl bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Lebron"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div class="col-span-2 w-full xl:col-span-1">
              <label class="text-gray-300 px-2 py-2 font-sans">Last Name</label>
              <input
                value={lname}
                type="text"
                class="text-lg lg:text-xl bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="James"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
            <div class="w-full col-span-2">
              <label class="text-gray-300 px-2 py-2 font-sans">Email</label>
              <input
                value={email}
                type="text"
                class="text-lg lg:text-xl bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="goat@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="w-full col-span-2">
              <label class="h-8 text-gray-300 px-2 py-2 font-sans">
                Password
              </label>
              <input
                value={pswd}
                type="password"
                class="text-lg lg:text-xl bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Dunk"
                onChange={(e) => setPswd(e.target.value)}
                required
              />
            </div>
            <div class="w-full col-span-2">
              <label class="text-gray-300 px-2 py-2 font-sans">
                Confirm Password
              </label>
              <input
                value={pswd2}
                type="password"
                class="text-lg lg:text-xl bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Dunk"
                onChange={(e) => setPswd2(e.target.value)}
                required
              />
            </div>

            <div class="mt-4 col-span-2 self-center justify-self-center">
              <button
                type="submit"
                onClick={() => onSubmit()}
                class="text-md lg:text-xl self-center rounded-lg bg-indigo-600 px-8 py-4 md:px-16 md:py-5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create an account
              </button>
            </div>
          </div>
          <div class="mt-10">
            <p class="text-center text-sm md:text-md lg:text-lg xl:text-xl">
              Have an account?&nbsp;
              <br></br>
              <a href="/#/Login" class="text-blue-400">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
