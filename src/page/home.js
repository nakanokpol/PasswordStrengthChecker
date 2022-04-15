import React from "react";
import CardTemplate from "./components/card"
function Home() {
  return (
    <div className="h-screen flex justify-evenly items-center bg-white" style={{marginLeft: "2%",marginRight: "2%"}}>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      
    </div>
  );
}

export default Home;
