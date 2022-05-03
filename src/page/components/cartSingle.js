import React, { useState } from "react";
import SingleCardTemplateCart from "./singleCardCart";
import { global_url_token } from '../global_url_token';
import './cartSingle.css'

const CartSingle = (card_props)=>{

    console.log("CartSingle ", card_props)

    const sendRemoveNumToCart=(event)=>{
        event.preventDefault()
        card_props.numberToRemove(card_props.cardInfo)
        console.log("single_send remove to cart:",card_props.cardInfo)
    }

    return (
        <div className="font-prompt flex" style={{marginBottom:"1vw",paddingBottom:"0.8vw", borderBottomWidth:"0.1vw", borderColor:"#999191"}}>
            <div className="flex" style={{marginLeft:"1vw", width:"100%"}}>
                <SingleCardTemplateCart Number_lottery={card_props.cardInfo.Number_lottery === undefined ? card_props.cardInfo.Number : card_props.cardInfo.Number_lottery} DrawDate={card_props.cardInfo.DrawDate}/>
                <div style={{marginLeft:"2.5vw", height:"100%", width:"100%"}}>
                    <div style={{display:"flex", justifyContent:"space-between",height:"75%"}}>
                        <div style={{}}>
                            <h1 className="font-normal text-lg" style={{color:"#E54E3D"}}>ลอตเตอรี่เดี่ยว</h1>
                            <p>ร้าน {card_props.cardInfo.Storename}</p>
                        </div>
                        <div style={{}}>
                            <form>
                                <button onClick={sendRemoveNumToCart}>
                                <p style={{fontSize:"1.2rem", color:"#aaaaaa"}}>x</p>
                            </button>
                            </form>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between",height:"20%"}}>
                        <div style={{height:"50%"}}>
                            <p style={{display: "flex-end"}}>จำนวน: {card_props.cardInfo.Amount} ใบ</p>
                        </div>
                        <div style={{}}>
                            <p style={{}}><span style={{fontSize:"2rem"}}>{Number(card_props.cardInfo.Amount) * 80}</span> บาท</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSingle