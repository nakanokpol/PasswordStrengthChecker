import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SingleCardTemplate from "./components/singleCard"
import PackedCardTemplate from "./components/packedCard"
import FormComponent from "./components/formComponent"
import ResultForNum from "./components/resultForNumAPI"
import axios from "axios";

function Home(props) {
  const {li_dataToshow} = props // li_data is default data to show on Home
  const [resultFor,setResultFor] = useState("------")
  const search_number = (searchNum)=>{
    console.log("formC => Home:",searchNum)
    props.searchNumApp(searchNum)
    setResultFor(searchNum.number.replace(/x/gi,"-"))
  }
  return (
    <div>
        <div>
        <ResultForNum.Provider value={resultFor}>
          <FormComponent search_num={search_number}/>
        </ResultForNum.Provider>
        </div>
      <div className="h-screen bg-white" style={{margin:"2% 5% 5% 5%"}}>
        <div className="h-screen grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center" style={{gridTemplateRows: "repeat(auto-fill, 11.5VW)"}}>
          {li_dataToshow.map((element)=>{
            if (element.pack==="N") {
              return <SingleCardTemplate cardInfo={element}/>
            }else{
              return <PackedCardTemplate cardInfo={element}/>
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
