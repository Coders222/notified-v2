import { useState } from "react";
import Nav from "./nav/NavLanding";
function PasswordReset() {
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("clicked");
  }
  return (
    <>
      <Nav/>
        <div class="bg-slate-700 justify-center items-center flex min-h-[calc(100vh-4rem)]">
          <div class="m:auto shadow-2xl bg-[#111827] text-white rounded-3xl p-8 w-3/5 d:w-2/5 lg:w-1/3">
            <h1 class="text-center font-bold " style={{ fontSize: "5vmin" }}>
              Reset Password
            </h1>

            <div class="px-16 py-8">
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

            <div class="grid grid-rows-3 justify-center mt-4">
              <div class="justify-center flex">
                <button
                  type="submit"
                  onClick={() => onSubmit()}
                  class="text-md lg:text-xl self-center rounded-lg bg-indigo-600 px-8 py-4 md:px-16 md:py-5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>
              <div />
              <div class="mt-10 self-end">
                <p class="text-center">
                  Not a member?&nbsp;
                  <a href="/#/Register" class="text-blue-400">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default PasswordReset;
