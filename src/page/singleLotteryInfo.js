import React, { useState } from "react";
import axios from "axios";
import SingleCardTemplateInfo from "./components/singleCardInfo"
import { useLocation, Link } from "react-router-dom";
import './singleLotteryInfo.css'

function SingleLotteryInfo(props) {
  const cardInfo = useLocation()
  const cardInfoState = cardInfo.state

  const sendSelectItemToCart = (item)=>{
    console.log("sendSelectItemToCart : Succuss", item)/////////////////////////////////////////////
    axios.post('http://bf6c-2403-6200-88a4-54b-70f6-c834-414a-daa1.ngrok.io/getSearch', 
    {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwOTY1ODA1LCJleHAiOjE2NTA5Njk0MDV9.7MBSCD88VkHxkNe2c4kdczsVdSzgDZkxzpn9wwQOTco",
     Number_lottery: item.Number,
     Amount:item.Stock,
     Storename: item.Storename,
     Pack_Flag:item.pack,
     PackAmount:"-"})
    .then(function (response) {
      // console.log("check singleaddtocart",{
      //   Number_lottery: item.Number,
      //   Amount:item.Stock,
      //   Storename: item.Storename,
      //   Pack_Flag:item.pack,
      //   PackAmount:"-"
      // })
      // setData(response.data.search_lottery)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className = "h-screen bg-white viewInfo font-prompt" style={{display: "flex"}}>
      <div className = "" style={{width:"57%",height:"100%" , backgroundColor:"#FFE5A3"}}>
        <SingleCardTemplateInfo cardInfoData={cardInfoState}/>
      </div>
      <div className = "justify-items-center" style={{width: "43%", height:"100%"}}>
        <div style={{marginTop: "10.5VW", marginLeft: "6VW", height: "3.5VW", width: "12VW",borderRadius: "5VW", backgroundColor:"#D3FAFA"}}>
          <h1 className="text-center font-semibold" style={{fontSize: "2.2VW"}}>สลากเดี่ยว</h1>
        </div>
          <h2 className=" font-semibold" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "2VW"}}>หมายเลข {cardInfoState.cardInfo.Number}</h2>
          <p className=" font-semibold" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>ราคา: <span style={{fontSize: "1.6VW"}}>80</span> บาท</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>งวดวันที่: {cardInfoState.cardInfo.DrawDate}</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>งวดที่: {cardInfoState.cardInfo.Draw}</p>
          <p className=" font-light" style={{marginTop: "1.5VW", marginLeft: "7VW", fontSize: "1.2VW"}}>ร้าน: {cardInfoState.cardInfo.Storename}</p>
          <div className = "justify-items-center flex" style={{marginLeft: "7VW",marginTop: "2.2VW"}}>
            <form>
              <Link to="/">
                  <button id="sendSetNumber" className="flex sendSetNumber" style={{marginTop: "2.5VW"}} onClick={sendSelectItemToCart(cardInfoState.cardInfo)}>
                      <p>เพิ่มลงตะกร้า</p>
                  </button>
              </Link>
            </form>
          </div>
      </div>
    </div>
  );
}

export default SingleLotteryInfo;
