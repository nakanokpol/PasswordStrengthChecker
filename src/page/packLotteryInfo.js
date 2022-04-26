import React, { useEffect, useState } from "react";
import axios from "axios";
import PackedCardTemplateInfo from "./components/packedCardInfo";
import { useLocation, Link, Routes, Route } from "react-router-dom";
import './packLotteryInfo.css'

function PackLotteryInfo(props) {
  const cardInfo = useLocation()
  const cardInfoState = cardInfo.state
  console.log("check print", cardInfoState)
  console.log("cardInfoState.cardInfo.Amount", cardInfoState.cardInfo.Amount)

  const [selectSet_2, setSelectSet_2] = useState(false)
  const [selectSet_3, setSelectSet_3] = useState(false)
  const [selectSet_5, setSelectSet_5] = useState(false)
  const [hasSomethingSelected, sethasSomethingSelected] = useState(false)

  console.log("selectSet_2, selectSet_3, selectSet_5 : ",selectSet_2, selectSet_3, selectSet_5)

  const isSet_2select = (event)=>{
    event.preventDefault()
    setSelectSet_2(true)
    setSelectSet_3(false)
    setSelectSet_5(false)
    console.log("selectSet_2, selectSet_3, selectSet_5 : ",selectSet_2, selectSet_3, selectSet_5)
  }
  const isSet_3select = (event)=>{
    event.preventDefault()
    setSelectSet_2(false)
    setSelectSet_3(true)
    setSelectSet_5(false)
    console.log("selectSet_2, selectSet_3, selectSet_5 : ",selectSet_2, selectSet_3, selectSet_5)
  }
  const isSet_5select = (event)=>{
    event.preventDefault()
    setSelectSet_2(false)
    setSelectSet_3(false)
    setSelectSet_5(true)
    console.log("selectSet_2, selectSet_3, selectSet_5 : ",selectSet_2, selectSet_3, selectSet_5)
  }

  const sendSelectItemToCart = (item)=>{
    console.log("sendPackItemToCart : Succuss", item)/////////////////////////////////////////////
    axios.post('http://bf6c-2403-6200-88a4-54b-70f6-c834-414a-daa1.ngrok.io/getSearch', 
    {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwOTY1ODA1LCJleHAiOjE2NTA5Njk0MDV9.7MBSCD88VkHxkNe2c4kdczsVdSzgDZkxzpn9wwQOTco",
     Number_lottery: item.Number,
     Amount:item.Stock,
     Storename: item.Storename,
     Pack_Flag:item.pack,
     PackAmount:item.Amount})
    .then(function (response) {
      console.log("check Packaddtocart",{
        Number_lottery: item.Number,
        Amount:item.Stock,
        Storename: item.Storename,
        Pack_Flag:item.pack,
        PackAmount:item.Amount})
      // setData(response.data.search_lottery)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect((event)=>{
    sethasSomethingSelected(selectSet_2 || selectSet_3 || selectSet_5)
  },[selectSet_2, selectSet_3, selectSet_5])

  return (
    <div className = "h-screen bg-white viewInfo font-prompt" style={{display: "flex"}}>
      <div className = "" style={{width:"57%",height:"100%" , backgroundColor:"#FFE5A3"}}>
        <PackedCardTemplateInfo cardInfoData={cardInfoState}/>
      </div>
      <div className = "justify-items-center" style={{width: "43%", height:"100%"}}>
        <div style={{marginTop: "10.5VW", marginLeft: "5VW", height: "3.5VW", width: "12VW",borderRadius: "5VW", backgroundColor:"#D4FAAF"}}>
          <h1 className="text-center font-semibold" style={{fontSize: "2.2VW"}}>สลากชุด</h1>
        </div>
          <h2 className=" font-semibold" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "2VW"}}>หมายเลข {cardInfoState.cardInfo.Number}</h2>
          <p className=" font-semibold" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>ราคา: <span style={{fontSize: "1.6VW"}}>80</span> บาท</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>งวดวันที่: {cardInfoState.cardInfo.DrawDate}</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "7VW", fontSize: "1.2VW"}}>งวดที่: {cardInfoState.cardInfo.Draw}</p>
          <p className=" font-light" style={{marginTop: "1.5VW", marginLeft: "7VW", fontSize: "1.2VW"}}>ร้าน: {cardInfoState.cardInfo.Storename}</p>
          <div className = "justify-items-center flex" style={{marginLeft: "7VW",marginTop: "2.2VW"}}>
            <form id="packaddtocartform">
              <div>
                <button id={selectSet_2 ? "selected":"not_selected"} className="flex button" disabled={!(cardInfoState.cardInfo.Amount==="2")} onClick={isSet_2select}>
                    <p>2 ใบ</p>
                </button>
                <button id={selectSet_3 ? "selected":"not_selected"} className="flex button" disabled={!(cardInfoState.cardInfo.Amount==="3")} onClick={isSet_3select}>
                    <p>3 ใบ</p>
                </button>
                <button id={selectSet_5 ? "selected":"not_selected"} className="flex button" disabled={!(cardInfoState.cardInfo.Amount==="5")} onClick={isSet_5select}>
                    <p>5 ใบ</p>
                </button>
              </div>
              <div style={{marginTop: "2.5VW"}}>
                <Link to="/" className={!hasSomethingSelected === true ? "disableLink" : "enableLink"}>
                  <button id="sendSetNumber" className="flex sendSetNumber" disabled={!hasSomethingSelected} onClick={sendSelectItemToCart(cardInfoState.cardInfo)}>
                    <p>เพิ่มลงตะกร้า</p>
                  </button>
                </Link>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default PackLotteryInfo;
