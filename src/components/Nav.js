
function Nav() {
    return (
      <div className="bg-[#6FA3E0] h-16 items-center grid grid-cols-3 place-items-center">
        <div/>
        <div className=" bg-contain bg-no-repeat w-24 h-16 bg-center  " style={{ backgroundImage: "url('images/notifiedLogoSmall.png')" }}/>
        <div className = "ml-auto mr-[8vmin] text-white" style={{fontSize:"3vmin"}}>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <h1 className = "font-extrabold  text-[#C7F800]">
                  ENTER
              </h1>
            </button>
        </div>

      </div>
    );
  }
  
  export default Nav;
  