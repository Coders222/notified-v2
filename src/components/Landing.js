
function Landing() {
  return (
    <div className="bg-slate-700 h-screen">
      <div className = "mx-auto justify-center md:flex md: w-4/5 xl:w-3/5">
        <div className=" bg-contain bg-no-repeat w-2/3 h-72 md:mt-16 md: flex-1 xl:w-1/3 xl:h-72 " style={{ backgroundImage: "url('images/notifiedLogo.png')" }}/>
        <div className="flex-1 flex items-center justify-center ">
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
  );
}

export default Landing;
