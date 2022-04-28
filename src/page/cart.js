import React, {useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPack from "./components/cartPack";
import CartSingle from "./components/cartSingle";
import axios from "axios";
import './cart.css'


const url_ = 'http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMTA2OTUyLCJleHAiOjE2NTExNDI5NTJ9.daO6VuY34u68xyNzBU8-c_RdGoiI-fItwSFW2p1VsQQ'

const Cart = (card_props)=>{
    const li_default_cart_data = []
    const [cartData, setCartData] = useState(li_default_cart_data)
    const [checkFirstGetCart, setCheckGetCart] = useState(true)
    const [cost, setcost] = useState(0)
    const [newCardData, setNewCartData] = useState(li_default_cart_data)
    // const [canPay, setCanPay] = useState(false)

    const navigate  = useNavigate();

    // let isResponse = false
    let orderIDpath = ""

    useEffect((event)=>{
        if(checkFirstGetCart === true){
            axios.get(url_+'/getCart'+'/'+token)/////////////////////
            .then(function (response) {
                setCartData(response.data.Cart)
                setNewCartData(response.data.Cart)
                console.log("response.Cart",response.data.Cart)
                console.log("check cartData",cartData)
            })
            .catch(function (error) {
                console.log(error);
            });
            setCheckGetCart(false)
        }
        setcost(totalCost(cartData))
        console.log("cartData UseEffect",cartData)
    })

    const removeCartNumber = (item)=>{
        console.log("remove : ", item)
        axios.delete(url_+'/removeLottery', ////////////////////////////
        {data : {
            token: token,
            Number_lottery: item.Number_lottery,
            Storename: item.Storename,
            pack: item.Pack_Flag,
            PackAmount: item.PackAmount
        }})
        .then(function (response) {
            console.log("remove response : ", response)
            axios.get(url_+'/getCart'+'/'+token)/////////////////////
            .then(function (response) {
                setCartData(response.data.Cart)
                setNewCartData(response.data.Cart)
                console.log("response.Cart",response.data.Cart)
                console.log("check cartData",cartData)
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log({
            token: token,
            Number_lottery: item.Number_lottery,
            Storename: item.Storename,
            pack: item.Pack_Flag,
            PackAmount: item.Amount})
    }

    const totalCost = (item)=>{
        console.log("check item",item)
        // const sum = 0//////////////////////////////////////////////////
        const sum = item.reduce((total, element)=> (element.Pack_Flag === "N" ? total+=Number(element.Amount) : total+=((Number(element.Amount))*Number(element.PackAmount))),0) * 80
        console.log("check Total Sum", sum, item)
        return sum
    }

    const toPaymentMethod = useCallback(() => navigate(`/paymentmethod/${String(orderIDpath)}`, {replace: true}), [navigate]);

    const getOrderID = (event)=>{
        event.preventDefault()
        for(let i = 0; i<newCardData.length;i++){
            newCardData[i]["Amount"] = Number(newCardData[i]["Amount"])
            newCardData[i]["Draw"] = "20"
            newCardData[i]["Money"] = newCardData[i].Pack_Flag === "Y" ? String(Number(newCardData[i].Amount)*Number(newCardData[i].PackAmount)*80) : String(Number(newCardData[i].Amount)*80)
            newCardData[i]["Number"] = newCardData[i]["Number_lottery"];
            newCardData[i]["pack"] = newCardData[i]["Pack_Flag"];
            delete newCardData[i]["Number_lottery"]
            delete newCardData[i]["Pack_Flag"]
        }
        axios.post(url_+'/confirmedOrder',{
            token:token,
            delivery:"Yes",
            lotteryList: newCardData
        })
        .then(function (response) {
            console.log("check response cartData",response)
            if(response.data.status === "200OK"){
                // isResponse = true
                orderIDpath = response.data.orderID
                console.log("orderIDpath 200OK", orderIDpath)
                // console.log("isResponse canpay 200OK", isResponse)
                card_props.order_ID([response.data.orderID, newCardData])
                toPaymentMethod()
            }
            else if(response.data.status === "200CE"){
                // isResponse = false
                // console.log("isResponse canpay 200CE", isResponse)
                return [false, response.data.listError]
            }
            console.log("check getOrderID",{
            token:token,
            delivery:"Yes",
            lotteryList: newCardData
        })
        // console.log("isResponse canpay", isResponse)
        })
        .catch(function (error) {
            console.log(error);
        });
        
        // return 
    }

    return (
        <div className="font-prompt flex justify-center" style={{}}>
            <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                <h1 class="text-lg font-semibold mb-2" style={{color:"#E54E3D"}}>ตะกร้าของคุณ</h1>
                <div className="justify-left" style={{marginTop:"1vw"}}>
                    {cartData.map((element)=>{
                        if (element.Pack_Flag==="N") {
                        return <CartSingle cardInfo={element} numberToRemove={removeCartNumber}/>
                        }else{
                        return <CartPack cardInfo={element} numberToRemove={removeCartNumber}/>
                        }
                    })}
                </div>
                <div style={{height:"2.5vw"}}></div>
                <div style={{marginBottom:"1vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191"}}>
                    <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0.6vw", color:"#999191"}}>ยอดรวมสินค้า<span>{cost}&ensp; บาท</span></p>
                    <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0.6vw", color:"#999191"}}>ค่าจัดส่งสินค้า<span>40 &ensp;บาท</span></p>
                    <p className="text-2xl font-semibold" style={{display:"flex", justifyContent:"right"}}>ยอดรวมสุทธิ &ensp;&ensp;<span> {40+cost} &ensp; บาท</span></p>
                </div>
                <div>
                    <form>
                        {/* <Link to="/paymentmethod" className={isResponse===true ? "enableLink" : "disableLink"} state= {{token: token, delivery:"Yes", lotteryList: newCardData, cost:cost, costAndDelivery: cost+40}}> */}
                            <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={cartData.length < 1} onClick={getOrderID}>
                                <p>ดำเนินการชำระเงิน</p>
                            </button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cart