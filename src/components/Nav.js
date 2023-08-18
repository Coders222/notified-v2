
function Nav() {
    return (
      <div className="bg-[#6FA3E0] h-16 items-center grid grid-cols-3 place-items-center">
        <div/>
        <div className=" bg-contain bg-no-repeat w-24 h-16 bg-center  " style={{ backgroundImage: "url('images/notifiedLogoSmall.png')" }}/>
        <div className = "ml-auto mr-16 text-white" style={{fontSize:"3vmin"}}>
            <h1 className = "font-extrabold  text-[#C7F800]">
                ENTER
            </h1>
        </div>

      </div>
    );
  }
  
  export default Nav;
  