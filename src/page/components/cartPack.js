import React from "react";
import PackedCardTemplateCart from "./packedCardCart";
import { global_url_token } from '../global_url_token';
import './cartPack.css'

const CartPack = (card_props)=>{

    console.log("CartPack ", card_props)
    console.log("CartPack show removeButton", card_props.showRemoveButton)

    const sendRemoveNumToCart=(event)=>{
        event.preventDefault()
        card_props.numberToRemove(card_props.cardInfo)
        console.log("pack_send remove to cart:",card_props.cardInfo)
    }

    return (
        <div className="font-prompt flex" style={{marginBottom:"1vw",paddingBottom:"0.8vw", borderBottomWidth:"0.1vw", borderColor:"#999191"}}>
            <div className="flex" style={{marginLeft:"1vw", width:"100%"}}>
                <PackedCardTemplateCart Number_lottery={card_props.cardInfo.Number_lottery===undefined?card_props.cardInfo.Number:card_props.cardInfo.Number_lottery} DrawDate={card_props.cardInfo.DrawDate} PackAmount ={card_props.cardInfo.PackAmount}/>
                <div style={{marginLeft:"2.5vw", height:"100%", width:"100%"}}>
                    <div style={{display:"flex", justifyContent:"space-between",height:"75%"}}>
                        <div style={{}}>
                            <h1 className="font-normal text-lg" style={{color:"#E54E3D"}}>ลอตเตอรี่ชุด</h1>
                            <p>ร้าน {card_props.cardInfo.Storename}</p>
                        </div>
                        <div style={{}}>
                            <form>
                                <button className="remove-button" disabled={!card_props.showRemoveButton} onClick={sendRemoveNumToCart} >
                                    <p style={{}}>x</p>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between",height:"20%"}}>
                        <div style={{height:"50%",display:"flex"}}>
                            <p style={{display:"flex-end"}}>จำนวน: (ชุด {card_props.cardInfo.PackAmount} ใบ) x {card_props.cardInfo.Amount}<span className={card_props.cardInfo.Stock!== undefined ? "have-stock" : "no-stock"}>&emsp;(คงเหลือ {card_props.cardInfo.Stock} ใบ)</span></p>
                        </div>
                        <div style={{}}>
                            <p style={{}}><span style={{fontSize:"2rem"}}>{Number(card_props.cardInfo.PackAmount) * Number(card_props.cardInfo.Amount) * 80}</span> บาท</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPack