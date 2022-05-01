import React, { useEffect } from "react";
import Cart from "../cart";
import { global_url_token } from '../global_url_token';
import SingleCardTemplateCart from "./singleCardCart";
import PackedCardTemplateCart from "./packedCardCart";
import { useState } from "react";
import './cartPopUp.css'

function CartPopUp (props){

    console.log("check cart popup props",props)
    console.log("check cart popup props.errItem",props.errorItem)

    let errorItem_changeform = props.errorItem
    for(let i =0; i < errorItem_changeform.length; i++){
        errorItem_changeform[i]["Amount"] = String(errorItem_changeform[i]["Amount"])
        errorItem_changeform[i]["Number_lottery"] = errorItem_changeform[i]["Number"]
        errorItem_changeform[i]["Pack_Flag"] = (errorItem_changeform[i].PackAmount === "-" ? "Y" : "N")
        errorItem_changeform[i]["Stock"] = String(errorItem_changeform[i]["Stock"])

        delete errorItem_changeform[i]["Number"]
    }
    console.log("errorItem_changeform", errorItem_changeform)
    
    return (props.trigger === true ?
        <div className="popup font-prompt">
            <div className="popup-inner rounded-xl shadow-xl">
                <div style={{margin:"2%"}}>
                    <p style={{textAlign:"center", fontWeight:"600", fontSize:"2rem", marginBottom:"1%"}}>แจ้งแก้ไขตะกร้าสินค้า</p>
                    <p style={{textAlign:"center", fontWeight:"600", fontSize:"1.5rem",color:"#ff0000", marginBottom:"5%"}}>รายการสลากดังต่อไปนี้มีจำนวนคงเหลือน้อยกว่าในตะกร้าของคุณ</p>
                </div>
                <div>
                {errorItem_changeform.map((element)=>{
                    if(element.Pack_Flag === "Y"){
                        return (
                            <SingleCardTemplateCart cardInfo={element}/>)
                    }else{
                        return (
                            <PackedCardTemplateCart cardInfo={element}/>)
                    }
                })}
                </div>
                <div className="flex" style={{justifyContent:"space-between", width:"100%"}}>
                    <div>
                        <button>
                            อัพเดตรายการในตะกร้า
                        </button>
                    </div>
                    <div>
                        <button >
                            ยกเลิกรายการทั้งหมด
                        </button>
                    </div>
                </div>
            </div>
        </div>
        :""
    );
}

export default CartPopUp