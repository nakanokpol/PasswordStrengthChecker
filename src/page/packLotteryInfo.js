import React, { useState } from "react";
import axios from "axios";
import PackedCardTemplateInfo from "./components/packedCardInfo";
import { useLocation } from "react-router-dom";

function PackLotteryInfo(props) {
  const cardInfo = useLocation()
  const cardInfoState = cardInfo.state
  return (
    <div className = "h-screen bg-white viewInfo font-prompt" style={{display: "flex"}}>
      <div className = "" style={{width:"57%",height:"100%" , backgroundColor:"#FFE5A3"}}>
        <PackedCardTemplateInfo cardInfoData={cardInfoState}/>
      </div>
      <div className = "justify-items-center" style={{width: "43%", height:"100%"}}>
        <div style={{marginTop: "10.5VW", marginLeft: "2VW", height: "3.5VW", width: "12VW",borderRadius: "5VW", backgroundColor:"#D4FAAF"}}>
          <h1 className="text-center font-semibold" style={{fontSize: "2.2VW"}}>สลากชุด</h1>
        </div>
          <h2 className=" font-semibold" style={{marginTop: "0VW", marginLeft: "2.8VW", fontSize: "2VW"}}>หมายเลข {cardInfoState.cardInfo.Number}</h2>
          <p className=" font-semibold" style={{marginTop: "0VW", marginLeft: "2.8VW", fontSize: "1.2VW"}}>ราคา: <span style={{fontSize: "1.6VW"}}>80</span> บาท</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "2.8VW", fontSize: "1.2VW"}}>งวดวันที่: {cardInfoState.cardInfo.DrawDate}</p>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "2.8VW", fontSize: "1.2VW"}}>งวดที่: {cardInfoState.cardInfo.Draw}</p>
          <br/>
          <p className=" font-light" style={{marginTop: "0VW", marginLeft: "2.8VW", fontSize: "1.2VW"}}>ร้าน: {cardInfoState.cardInfo.Storename}</p>
      </div>
    </div>
  );
}

export default PackLotteryInfo;
