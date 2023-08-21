
function NavLogo(props){
    return (
        <div className="bg-[#6B4E54] h-16 items-center grid grid-cols-3 place-items-center">
        <div />
          <a href = "/">
          <div
          className=" bg-contain bg-no-repeat w-24 h-16 bg-center  "
          style={{ backgroundImage: "url('images/notifiedLogoSmall.png')" }}
        />
        </a>
      </div>
    )

}
export default NavLogo;