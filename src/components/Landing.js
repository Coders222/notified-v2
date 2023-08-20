import Nav from "./Nav";
function Landing() {
  return (
    <>
      <Nav/>
      <div className="bg-slate-700 h-screen">
        <div className=" p-8 mx-auto grid grid-cols-1 w-4/5 place-content-center md:grid-cols-2 xl:w-3/5">
          <div
            className=" bg-contain bg-no-repeat  w-full h-24 xl:h-32 "
            style={{ backgroundImage: "url('images/notifiedLogo.png')" }}
          />
          <div className=" items-center ">
            <p className="text-white">
              LeBron James is a basketball legend celebrated for his exceptional
              athleticism, versatility, and leadership. Standing 6'8" and 250
              pounds, he boasts rare physical attributes that empower him to
              excel in various positions. His playmaking ability, marked by
              extraordinary court vision and passing skills, consistently places
              him among the league's top assist leaders. His global impact and enduring legacy have
              solidified his status as one of the greatest basketball players of
              all time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
