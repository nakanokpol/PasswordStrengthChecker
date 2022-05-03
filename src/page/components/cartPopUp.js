import React, { useEffect, useCallback } from "react";
import Cart from "../cart";
import { global_url_token } from '../global_url_token';
import SingleCardTemplateCart from "./singleCardCart";
import PackedCardTemplateCart from "./packedCardCart";
import CartPack from "./cartPack";
import CartSingle from "./cartSingle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './cartPopUp.css'

function CartPopUp (props){

    console.log("check cart popup props",props)
    console.log("check cart popup props.errIte",props.errorItem)

    let errorItem_changeform = props.errorItem
    for(let i = 0; i < errorItem_changeform.length; i++){
        errorItem_changeform[i]["Amount"] = String(errorItem_changeform[i]["Amount"])
        errorItem_changeform[i]["Number_lottery"] = errorItem_changeform[i]["Number"]
        errorItem_changeform[i]["Pack_Flag"] = (errorItem_changeform[i].PackAmount === "-" ? "N" : "Y")
        errorItem_changeform[i]["Stock"] = String(errorItem_changeform[i]["Stock"])
    } 
    
    const navigate  = useNavigate();
    const toPaymentMethod = useCallback(() => navigate("/paymentmethod", {replace: true}), [navigate]);
    const toHome = useCallback(() => navigate("/home", {replace: true}), [navigate]);

    const checkCanpay =() =>{
        if(props.canpay === true){
            toPaymentMethod()
        }
        else{
            toHome()
        }
    }
    
    return (props.trigger === true ?
        <div className="popup font-prompt">
            <div className="popup-inner rounded-xl shadow-xl">
                <div style={{margin:"2%"}}>
                    <p style={{textAlign:"center", fontWeight:"600", fontSize:"2rem", marginBottom:"1%"}}>แจ้งแก้ไขตะกร้าสินค้า</p>
                    <p style={{textAlign:"center", fontWeight:"600", fontSize:"1.5rem",color:"#ff0000", marginBottom:"5%"}}>รายการสลากดังต่อไปนี้ไม่สามารถดำเนินการชำระได้เนื่องจากมีจำนวน<br/>คงเหลือน้อยกว่าในตะกร้าของคุณ</p>
                </div>
                <div>
                {errorItem_changeform.map((element)=>{
                    if(element.Pack_Flag === "Y"){
                        return (
                            // <SingleCardTemplateCart Number_lottery={element.Number_lottery} DrawDate={element.DrawDate}/>
                            <CartPack cardInfo={element} showRemoveButton = {false}/>
                            )
                    }else{
                        return (
                            // <PackedCardTemplateCart Number_lottery={element.Number_lottery} DrawDate={element.DrawDate} />
                            <CartSingle cardInfo={element} showRemoveButton = {false}/>
                            )
                    }
                })}
                </div>
                <div className="grid justify-items-center" style={{width:"100%"}}>
                    <button className="button_" onClick={checkCanpay}>
                        <p>ยืนยันการชำระเงิน</p>
                    </button>
                </div>
            </div>
        </div>
        :""
    );
}

export default CartPopUp