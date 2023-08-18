import Nav from "./Nav"
function Landing() {
  return (
    <>
      <Nav/>
      <div className="bg-slate-700 h-screen">
        <div className = "bg-black p-8 mx-auto grid grid-cols-1 w-4/5 place-content-center md:grid-cols-2 xl:w-3/5">
          <div className=" bg-contain bg-no-repeat  w-full h-24 xl:h-32 " style={{ backgroundImage: "url('images/notifiedLogo.png')" }}/>
          <div className=" items-center ">
            <p className = "text-white">
              Lorem ipsum dolor sit amet,  adipiscing elit. 
              Nullam hendrerit ante in libero pretium facilisis. Morbi
              id mauris et libero condimentum suscipit. Sed porttitor 
              urna consequat nisl laoreet, eget mollis enim facilisis. Nulla 
              tempor nibh cursus ullamcorper sagittis. Nam at tortor nunc.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Landing;
