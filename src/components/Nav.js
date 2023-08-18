
function Nav() {

    function onClick(){
      console.log("clicked")
    }
    return (
      <div className="bg-[#6B4E54] h-16 items-center grid grid-cols-3 place-items-center">
        <div/>
        <div className=" bg-contain bg-no-repeat w-24 h-16 bg-center  " style={{ backgroundImage: "url('images/notifiedLogoSmall.png')" }}/>
        <div onClick = {()=>onClick()} href='/#/Login' className = "ml-auto mr-[8vmin]" style={{fontSize:"3vmin"}}>
            <button  className=" bg-blue-500  hover:bg-blue-400 text-[#E84A65] hover:text-[#C7F800] font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <h1 className = "font-extrabold">
                  <a href = "/#/Login">ENTER</a>
              </h1>
            </button>
        </div>

      </div>
    );
  }
  
  export default Nav;
  