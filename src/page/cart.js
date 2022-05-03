import React, {useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPack from "./components/cartPack";
import CartSingle from "./components/cartSingle";
import CartPopUp from "./components/cartPopUp";
import axios from "axios";
import './cart.css'
import { global_url_token } from "./global_url_token";

const Cart = (card_props)=>{
    const li_default_cart_data = []
    const li_cart_error = []

    const [cartData, setCartData] = useState(li_default_cart_data)
    const [checkFirstGetCart, setCheckGetCart] = useState(true)
    const [cost, setcost] = useState(0)
    const [errorCartData, setErrorCartData] = useState(li_cart_error)
    const [cartResponseCode, setCartResponseCode] = useState("")
    const [canpay, setCanpay] = useState(false)
    // let orderIDpath = ""
    const [orderIDpath, setOrderIDpath] = useState("")
    
    const navigate  = useNavigate();
    
    useEffect((event)=>{
        if(checkFirstGetCart === true){
            axios.get(global_url_token.url+'/getCart/'+global_url_token.customer_token)
            .then(function (response) {
                setCartData(response.data.Cart)
                console.log("response.Cart",response.data.Cart)
                console.log("check cartData",cartData)
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        setCheckGetCart(false)
        setcost(totalCost(cartData))
        console.log("cartData UseEffect",cartData)
    })

    const removeCartNumber = (item)=>{
        console.log("remove : ", item)
        axios.delete(global_url_token.url+'/removeLottery', 
        {data : {
            token: global_url_token.customer_token,
            Number_lottery: item.Number_lottery,
            Storename: item.Storename,
            pack: item.Pack_Flag,
            PackAmount: item.PackAmount
        }})
        .then(function (response) {
            console.log("remove response : ", response)
            axios.get(global_url_token.url+'/getCart'+'/'+global_url_token.customer_token)/////////////////////
            .then(function (response) {
                setCartData(response.data.Cart)
                console.log("response.Cart after removed",response.data.Cart)
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
            data : {
                token: global_url_token.customer_token,
                Number_lottery: item.Number_lottery,
                Storename: item.Storename,
                pack: item.Pack_Flag,
                PackAmount: item.PackAmount
            }})
    }

    const totalCost = (item)=>{
        console.log("check item",item)
        // const sum = 0//////////////////////////////////////////////////
        const sum = item.reduce((total, element)=> (element.Pack_Flag === "N" ? total+=Number(element.Amount) : total+=((Number(element.Amount))*Number(element.PackAmount))),0) * 80
        console.log("check Total Sum", sum, item)
        return sum
    }

    const toPaymentMethod = useCallback(() => navigate("/paymentmethod", {replace: true}), [navigate]);

    const getOrderID = (event)=>{
        event.preventDefault()
        for(let i = 0; i<cartData.length;i++){
            cartData[i]["Amount"] = Number(cartData[i]["Amount"])
            cartData[i]["Draw"] = "20"
            cartData[i]["Money"] = cartData[i].Pack_Flag === "Y" ? String(Number(cartData[i].Amount)*Number(cartData[i].PackAmount)*80) : String(Number(cartData[i].Amount)*80)
            cartData[i]["Number"] = cartData[i]["Number_lottery"];
            cartData[i]["pack"] = cartData[i]["Pack_Flag"];
            delete cartData[i]["Number_lottery"]
            delete cartData[i]["Pack_Flag"]
        }

        axios.post(global_url_token.url+'/confirmedOrder',{
            token:global_url_token.customer_token,
            delivery:"Yes",
            lotteryList: cartData
        })
        .then(function (response) {
            console.log("check response cartData",response)

            if(response.data.status === "200OK"){
                card_props.order_ID([response.data.orderID, cost + 40])
                toPaymentMethod()
            }
            else if(response.data.status === "200CE"){
                // event.preventDefault()
                setCartResponseCode("200CE")
                console.log("orderIDpath 200CE", orderIDpath)
                setOrderIDpath(response.data.orderID)
                setErrorCartData(response.data.ListError)
                
                if (response.data.orderStatus === "Pending Payment"){
                    const tempListErr = response.data.ListError
                    let sumerrcost = 0
                    for(let i = 0; i < tempListErr.length; i++){
                        if(tempListErr[i].Pack_Flag === "N"){
                            sumerrcost += 80*Number(tempListErr[i].Amount)
                        }
                        else if (tempListErr[i].Pack_Flag === "Y"){
                            sumerrcost += 80*Number(tempListErr[i].Amount)*Number(tempListErr[i].PackAmount)
                        }
                    }
                    console.log("sumerrcost", sumerrcost)
                    card_props.order_ID([response.data.orderID, cost - sumerrcost + 40])
                    setCanpay(true)
                }
                else if (response.data.orderStatus === "Cancelled"){
                    setCanpay(false)
                }

                console.log("response 200CE", response)
                console.log("response.data.listError 200CE", response.data.ListError)
                // return [false, response.data.listError]
            }
            console.log("check getOrderID",{
            token:global_url_token.customer_token,
            delivery:"Yes",
            lotteryList: cartData,
            cartData: cartData
        })
        // console.log("isResponse canpay", isResponse)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="">
            <div className="h-16"/>
            <div className="font-prompt flex justify-center" style={{}}>
                <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                    <h1 class="text-xl font-bold mb-2" style={{color:"#E54E3D"}}>ตะกร้าของคุณ</h1>
                    <div className="justify-left" style={{marginTop:"1vw"}}>
                        {cartData.map((element)=>{
                            if (element.Pack_Flag==="Y" || element.pack ==="Y") {
                            return <CartPack cardInfo={element} numberToRemove={removeCartNumber} showRemoveButton = {true}/>
                            }else if (element.Pack_Flag==="N" || element.pack ==="N"){
                            return <CartSingle cardInfo={element} numberToRemove={removeCartNumber} showRemoveButton = {true}/>
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
                            {/* <Link to="/paymentmethod" className={isResponse===true ? "enableLink" : "disableLink"} state= {{token: token, delivery:"Yes", lotteryList: cartData, cost:cost, costAndDelivery: cost+40}}> */}
                                <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={cartData.length < 1} onClick={getOrderID}>
                                    <p>ดำเนินการชำระเงิน</p>
                                </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
            <CartPopUp trigger = {cartResponseCode === "200CE"} orderID = {orderIDpath} errorItem = {errorCartData} canpay = {canpay}/>
        </div>
    );
}

export default Cart