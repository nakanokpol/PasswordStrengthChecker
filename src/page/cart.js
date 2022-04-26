import React from "react";
import { Link } from "react-router-dom";
import CartPack from "./components/cartPack";
import CartSingle from "./components/cartSingle";

const Cart = (card_props)=>{
    const li_test_data = [
        {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwOTY1ODA1LCJleHAiOjE2NTA5Njk0MDV9.7MBSCD88VkHxkNe2c4kdczsVdSzgDZkxzpn9wwQOTco",
            Number: "999789",
            Amount: "1",
            Storename: "ซู่ซู่",
            pack: "Y",
            PackAmount: "2"
        },
        {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwOTY1ODA1LCJleHAiOjE2NTA5Njk0MDV9.7MBSCD88VkHxkNe2c4kdczsVdSzgDZkxzpn9wwQOTco",
            Number: "111189",
            Amount: "1",
            Storename: "ซู่ซู่",
            pack: "N",
            PackAmount: "-"
        },
        {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwOTY1ODA1LCJleHAiOjE2NTA5Njk0MDV9.7MBSCD88VkHxkNe2c4kdczsVdSzgDZkxzpn9wwQOTco",
            Number: "999789",
            Amount: "1",
            Storename: "ซู่ซู่",
            pack: "Y",
            PackAmount: "2"
        }
      ]
    // const removeCart = (indexToRemove)=>{
        
    // }

    return (
        <div className="font-prompt flex justify-center" style={{}}>
            <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                <h1 class="text-xl font-semibold mb-2" style={{color:"#E54E3D"}}>ตะกร้าของคุณ</h1>
                <div className="justify-left" style={{marginTop:"1vw"}}>
                    {li_test_data.map((element)=>{
                        if (element.pack==="N") {
                        return <CartSingle cardInfo={element}/>
                        }else{
                        return <CartPack cardInfo={element}/>
                        }
                    })}
                </div>
                <div style={{height:"10vw"}}></div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Cart