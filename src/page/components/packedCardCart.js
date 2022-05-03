import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { global_url_token } from '../global_url_token';
import './packedCard.css'

const PackedCardTemplateCart = (card_props)=>{
    console.log("PackedCardTemplateCart", card_props)

    const {Number_lottery, DrawDate, PackAmount} = card_props

    const setAmountClass = (amount) =>{
        if(amount === "2"){
            return "amountclass_2"
        }
        else if (amount === "3"){
            return "amountclass_3"
        }
        else if (amount === "5"){
            return "amountclass_5"
        }
        else{
            return ""
        }
    }

    return (
        <div className="font-prompt" style={{height: "8.5VW", width: "17VW"}}>
            <div className="bg-white items-center" style={{height: "7.9VW", width: "17VW", borderWidth:"0.01VW", boxShadow:"0px 0px 7px 0px #B0CE93"}}>
                <div style={{marginLeft: "6.545VW", marginTop: "0.9875VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "15.57VW", marginTop: "-2.4695VW",height: "7.8588VW", width: "1.35VW", backgroundColor: "#D4FAAF"}}></div>
                <div style={{marginLeft: "1.2784VW", marginTop: "-6.8788VW",height: "4.7095VW", width: "4.7288VW", backgroundColor: "#C4C4C4"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D4FAAF"}}>
                    <h1 className="text-center" style={{fontSize: "0.55VW"}}>งวดที่</h1>
                </div>
                <div style={{marginLeft: "8.6VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                    <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>-</h1>
                </div>
                <div style={{marginLeft: "12VW", marginTop: "-0.9115VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D4FAAF"}}>
                    <h1 className="text-center" style={{fontSize: "0.55VW"}}>ชุดที่</h1>
                </div>
                <div style={{marginLeft: "14.055VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                    <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>-</h1>
                </div>
                <div style={{marginLeft: "6.545VW", marginTop: "-5.89VW",height: "1.482VW", width: "8.5VW"}}>
                    <h1 className="text-center font-normal" style={{fontSize: "1.2VW", letterSpacing:"0.35VW"}}>{Number_lottery}</h1>
                </div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.9VW",height: "1.482VW", width: "8.5VW"}}>
                    <h1 className="text-center font-light" style={{fontSize: "0.8VW"}}>{DrawDate}</h1>
                </div>
            </div>
            <div className={setAmountClass(PackAmount)} style={{height:"6vw",width:"6vw", marginTop: "-7.9VW"}}></div>
            <div style={{marginLeft: "0.2VW", marginTop: "-5.8VW"}}>
                <p style={{marginLeft:"0.304VW", fontSize:"0.8VW"}}>ชุด</p> 
                <p style={{marginLeft:"0.2vw",marginTop: "-0.5VW",fontSize:"2.4VW"}}>{PackAmount}</p>
                <p style={{marginLeft:"1.9vw",marginTop: "-3VW",fontSize:"0.8VW"}}>ใบ</p>
            </div>
        </div>
    );
}

export default PackedCardTemplateCart