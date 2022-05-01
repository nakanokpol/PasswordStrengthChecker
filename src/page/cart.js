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
    // const li_default_cart_data = []
    // const li_cart_error = []
    /////////////test var////////////


    const li_default_cart_data = [
        {Number_lottery: "474125",Amount: "1",Pack_Flag: "N",PackAmount: "-",Storename: "สวัสดี"},
        {Number_lottery: "753573",Amount: "1",Pack_Flag: "N",PackAmount: "-",Storename: "ซู่ซู่"},
        {Number_lottery: "456852",Amount: "1",Pack_Flag: "N",PackAmount: "-",Storename: "ซู่ซู่"},
        {Number_lottery: "451278",Amount: "1",Pack_Flag: "Y",PackAmount: "3",Storename: "สวัสดี"},
        {Number_lottery: "121231",Amount: "1",Pack_Flag: "Y",PackAmount: "2",Storename: "ใจดี"},
        {Number_lottery: "987654",Amount: "1",Pack_Flag: "N",PackAmount: "-",Storename: "ใจดี"},
        {Number_lottery: "570412",Amount: "1",Pack_Flag: "N",PackAmount: "-",Storename: "ใจดี"},
        {Number_lottery: "999999",Amount: "2",Pack_Flag: "N",PackAmount: "-",Storename: "ซู่ซู่"},
        {Number_lottery: "999789",Amount: "2",Pack_Flag: "Y",PackAmount: "2",Storename: "ซู่ซู่"}
    ]

    const li_cart_error = [
        {Number: "999999", Amount: 1, Stock: 0, Storename: "ใจดี", PackAmount: "-", SID: 4, Status: "Changed Amount"},
        {Number: "987654", Amount: 1, Stock: 0, Storename: "ใจดี", PackAmount: "2", SID: 4, Status: "Changed Amount"}
    ]


    ///////////////////////////////////

    const [cartData, setCartData] = useState(li_default_cart_data)
    const [checkFirstGetCart, setCheckGetCart] = useState(true)
    const [cost, setcost] = useState(0)
    const [newCartData, setNewCartData] = useState(li_default_cart_data)
    const [errorCartData, setErrorCartData] = useState([])
    const [cartResponseCode, setCartResponseCode] = useState("")
    // let orderIDpath = ""
    const [orderIDpath, setOrderIDpath] = useState("")
    
    const navigate  = useNavigate();
    
    useEffect((event)=>{
        if(checkFirstGetCart === true){
            axios.get(global_url_token.url+'/getCart/'+global_url_token.customer_token)
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
            token: global_url_token.customer_token,
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
        for(let i = 0; i<newCartData.length;i++){
            newCartData[i]["Amount"] = Number(newCartData[i]["Amount"])
            newCartData[i]["Draw"] = "20"
            newCartData[i]["Money"] = newCartData[i].Pack_Flag === "Y" ? String(Number(newCartData[i].Amount)*Number(newCartData[i].PackAmount)*80) : String(Number(newCartData[i].Amount)*80)
            newCartData[i]["Number"] = newCartData[i]["Number_lottery"];
            newCartData[i]["pack"] = newCartData[i]["Pack_Flag"];
            delete newCartData[i]["Number_lottery"]
            delete newCartData[i]["Pack_Flag"]
        }
        // [
        //     {
        //         "Number": "474125",
        //         "Draw": "20",
        //         "DrawDate": "16 เมษายน 2565",
        //         "Money": "80",
        //         "Storename": "สวัสดี",
        //         "Amount": 1,
        //         "pack": "N"
        //     },
        //     {
        //         "Number": "753573",
        //         "Draw": "20",
        //         "DrawDate": "16 เมษายน 2565",
        //         "Money": "80",
        //         "Storename": "ซู่ซู่",
        //         "Amount": 1,
        //         "pack": "N"
        //     }
        // ]

        // Pending Review (res)
        // {
        //     "status": "200CE",
        //     "message": "Please review!",
        //     "ListError": [
        //         {
        //             "Number": "888231",
        //             "Amount": 1,
        //             "Stock": 0,
        //             "Storename": "ใจดี",
        //             "PackAmount": "-",
        //             "SID": 4,
        //             "Status": "Changed Amount"
        //         }
        //     ],
        //     "Status": "Cancelled",
        //     "orderID": 88
        // }

        // removeLotteryCart (Customer)
        // {
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxveW9uZyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0OTI1OTYwNywiZXhwIjoxNjQ5MjYzMjA3fQ.uUBmZYRkNVLAlSv_Xf3b5vSwIKmOX1EY5vLziLAoKy4",
        // "Number_lottery":"121212",
        //     "Storename":"ยัง"
        //     "pack":"Y", // ดูว่า PackAmount เป็น - หรือ ตัวเลข
        //     "PackAmount":"2",
        // }

        setCartResponseCode("200CE")///////////////////////////////////////////////////////////
        setErrorCartData(li_cart_error)////////////////////////////////////////////////////////
        setCartData(li_default_cart_data)//////////////////////////////////////////////////////

        console.log("test CART_ERROR",{
            "CartResponseCode": cartResponseCode,
            "ErrorCartData": errorCartData,
            "CartData" : cartData})

        axios.post(global_url_token.url+'/confirmedOrder',{
            token:global_url_token.customer_token,
            delivery:"Yes",
            lotteryList: newCartData
        })
        .then(function (response) {
            console.log("check response cartData",response)
            if(response.data.status === "200OK"){
                // orderIDpath = response.data.orderID
                setOrderIDpath(response.data.orderID)
                console.log("orderIDpath 200OK", orderIDpath)
                // console.log("isResponse canpay 200OK", isResponse)
                card_props.order_ID([response.data.orderID, newCartData])
                toPaymentMethod()
            }
            else if(response.data.status === "200CE"){
                // setCartResponseCode("200CE")
                // setErrorCartData(response.data.listError)

                // console.log("isResponse canpay 200CE", isResponse)
                // return [false, response.data.listError]
            }
            console.log("check getOrderID",{
            token:global_url_token.customer_token,
            delivery:"Yes",
            lotteryList: newCartData
        })
        // console.log("isResponse canpay", isResponse)
        })
        .catch(function (error) {
            console.log(error);
        });
        
        // return 
    }

    return (
        <div className="">
            <div className="h-16"/>
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
                        })}0
                    </div>
                    <div style={{height:"2.5vw"}}></div>
                    <div style={{marginBottom:"1vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191"}}>
                        <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0.6vw", color:"#999191"}}>ยอดรวมสินค้า<span>{cost}&ensp; บาท</span></p>
                        <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0.6vw", color:"#999191"}}>ค่าจัดส่งสินค้า<span>40 &ensp;บาท</span></p>
                        <p className="text-2xl font-semibold" style={{display:"flex", justifyContent:"right"}}>ยอดรวมสุทธิ &ensp;&ensp;<span> {40+cost} &ensp; บาท</span></p>
                    </div>
                    <div>
                        <form>
                            {/* <Link to="/paymentmethod" className={isResponse===true ? "enableLink" : "disableLink"} state= {{token: token, delivery:"Yes", lotteryList: newCartData, cost:cost, costAndDelivery: cost+40}}> */}
                                <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={cartData.length < 1} onClick={getOrderID}>
                                    <p>ดำเนินการชำระเงิน</p>
                                </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
            <CartPopUp trigger = {cartResponseCode === "200CE"} cartItem = {cartData} errorItem = {errorCartData} cartItemNewForm = {newCartData}/>
        </div>
    );
}

export default Cart