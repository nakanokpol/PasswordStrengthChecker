import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SingleCardTemplate from "./components/singleCard"
import PackedCardTemplate from "./components/packedCard"
import StoreHeaderComponent from "./components/storeHeaderComponent";
import axios from "axios";
import { global_url_token } from "./global_url_token";
import { useLocation } from "react-router-dom";

function Store(props) {

  const li_default_data = []
  const [li_dataToShow, setLi_dataToShow] = useState(li_default_data)
  console.log("store li_dataToshow ",li_dataToShow)

  const [checkFirstGet, setCheckGet] = useState(true)
  const storeName = useLocation()
  console.log("storeName in store",storeName.state.Storename)

  useEffect((event)=>{
  if(checkFirstGet === true){
    axios.get(global_url_token.url+'/getLottery/'+ storeName.state.Storename)
    .then(function (response) {
      console.log("get lottery store",response)
      setLi_dataToShow(response.data.lottery)
    })
    .catch(function (error) {
      console.log(error);
    });
    setCheckGet(false)
  }
    })

  // Method : "GET" , get_lottery -> "/getLottery/:Storename"

  return (
    <div className="h-screen">
      <div className="h-16"/>
      <div style={{position:"fixed", width:"100%"}}>
        <StoreHeaderComponent storeName = {storeName.state.Storename} numberOfListItem = {li_dataToShow.length}/>
      </div>
      <div className="h-screen bg-white" style={{margin:"0vh 5% 5% 5%", paddingTop:"146px"}}>
        <div className="h-screen grid gap-12 grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center">
          {li_dataToShow.map((element)=>{
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

export default Store;
