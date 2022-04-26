import React from "react";
import PackedCardTemplateCart from "./packedCardCart";

const CartPack = (card_props)=>{
    return (
        <div className="font-prompt flex" style={{marginBottom:"1vw",paddingBottom:"0.8vw", borderBottomWidth:"0.1vw", borderColor:"#999999"}}>
            <div className="flex" style={{marginLeft:"1vw"}}>
                <PackedCardTemplateCart cardInfo={card_props.cardInfo}/>
                <div style={{marginLeft:"2.5vw", height:"100%"}}>
                    <div style={{height:"75%"}}>
                        <h1 className="font-normal" style={{fontSize:"1.5em", color:"#E54E3D"}}>ลอตเตอรี่ชุด</h1>
                        <p>ร้าน {card_props.cardInfo.Storename}</p>
                    </div>
                    <div style={{display:"flex",height:"20%"}}>
                        <div style={{height:"50%", width:"14vw"}}>
                            <p style={{display:"flex-end"}}>จำนวน: (ชุด {card_props.cardInfo.PackAmount} ใบ) x {card_props.cardInfo.Amount}</p>
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