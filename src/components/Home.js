import Nav from "./nav/NavHome";

function Home() {
    function onClick() {
      console.log("clicked");
    }
    return (
      <div className = "h-screen bg-orange-300">
        <Nav/>
        <div className = "h-full bg-red-200"></div>
        
       
      </div>
    );
  }
  
  export default Home;
  