import { useState } from "react";

function Nav() {

  // make it as first name, 1st letter of last name
  const [user, setUser] = useState('Kyrie I');
  function onClick() {
    console.log("clicked");
  }
  return (
    <div className="bg-[#6B4E54] h-16 items-center grid grid-cols-3 place-items-center">
      <div class = 'bg-black'/>
      <a href="/">
        <div
          className=" bg-contain bg-no-repeat w-24 h-16 bg-center  "
          style={{ backgroundImage: "url('images/notifiedLogoSmall.png')" }}
        />
      </a>
      <a href="/#/AccountSettings" class = "flex justify-self-end items-center mr-6 xl:mr-24">
      <div
          className=" bg-contain bg-no-repeat w-4 h-16 bg-center  "
          style={{ backgroundImage: "url('images/userDark.png')" }}
        />
        <div class = "font-semibold text-white">
        &nbsp;&nbsp;{user}
        </div>
      </a>
    </div>
  );
}

export default Nav;
