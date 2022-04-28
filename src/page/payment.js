import React, {useCallback} from "react";
import { useLocation,Link,useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import OrderID_API from "./components/orderID_API";
import axios from "axios";
import './cart.css';
import Logo from './imgComponents/tempPhoto.jpg';
import './payment.css';


const url_ = 'http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMTA2OTUyLCJleHAiOjE2NTExNDI5NTJ9.daO6VuY34u68xyNzBU8-c_RdGoiI-fItwSFW2p1VsQQ'

const Payment = (card_props)=>{
    // const [temp_id,temp_li] = useContext(OrderID_API)
    const temp_id = 145
    const temp_li = [{Amount: 1,
        Draw: "20",
        DrawDate: "16 เมษายน 2565",
        Money: "80",
        Number: "745245",
        PackAmount: "-",
        Storename: "ใจดี",
        pack: "N"
    }]

    const [newCardData, setNewCartData] = useState([])

    const [images, setImages] = useState([]);
	const [imageURLs, setImagwURLs] = useState([]);
    // let cost = 0

    const navigate  = useNavigate();
    let orderIDpath = ""

    useEffect(()=>{
        if (images.length < 1)return;
        const newImageURL = [];
        images.forEach((image)=> newImageURL.push(URL.createObjectURL(image)))
        setImagwURLs(newImageURL);
    },[images])

    const totalCost = ()=>{
        console.log("check item")
        // const sum = item.reduce((total, element)=> (element.Pack_Flag === "N" ? total+=Number(element.Amount) : total+=((Number(element.Amount))*Number(element.PackAmount))),0) * 80
        let sum = 0
        for (let i = 0; i<temp_li.length; i++){
            sum += Number(temp_li[i]["Money"])
            console.log("Sum", i,":",sum,temp_li,temp_li[i],temp_li[i]["Money"])
        }
        console.log("temp_li[0]", temp_li[0])
        console.log("temp_li[0][Money]", temp_li[0]["Money"])
        console.log("check Total Sum", sum)
        return sum
    }

    function onImageChange(e){
        e.preventDefault()
        setImages([...e.target.files]);
    }

    const toPaymentSuccess = useCallback(() => navigate('/paymentsuccess', {replace: true}), [navigate]);

    const sendImageURL = (event) =>{
        event.preventDefault()
        axios.put(url_+'/updateOrderSlip',
           {
                token:token,
                URLSlip:imageURLs[0],
                OrderID:String(temp_id)
            })
        .then(function (response) {
            console.log("temp_id", temp_id)
            console.log("temp_li", temp_li)
            console.log("response payment img",response)
            console.log("check data sending",{
                token:token,
                URLSlip:imageURLs[0],
                OrderID:String(temp_id)
            })
            if(response.data.status === "200OK"){
                // isResponse = true
                orderIDpath = response.data.orderID
                console.log("orderIDpath 200OK", orderIDpath)
                // console.log("isResponse canpay 200OK", isResponse)
                card_props.order_ID([response.data.orderID, newCardData])
                toPaymentSuccess()
            }
            else if(response.data.status === "200CE"){
                // isResponse = false
                // console.log("isResponse canpay 200CE", )
                toPaymentSuccess()
            }
            else{
                toPaymentSuccess()
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log("check data sending7777",{
            token:token,
            URLSlip:imageURLs[0],
            OrderID:String(temp_id)
        })
    }

    return (
        <div className="font-prompt flex justify-center" style={{backgroundColor:"#FFE5A3"}}>
            <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                <div>
                    <h1 class="text-xl font-semibold mb-2" style={{color:"#E54E3D"}}>การชำระเงิน</h1>
                    <div className="justify-left" style={{marginTop:"0vw"}}></div>
                    <div style={{height:"1vw"}}></div>
                    <div style={{marginBottom:"0vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191"}}>
                        <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0vw", color:"#000000"}}>ยอดเงินที่ต้องชำระ<span class="text-2xl font-semibold" style={{color:"#E54E3D"}}>{totalCost() + 40}&ensp; บาท</span></p>
                    </div>
                    <div className="flex" style={{justifyContent:"center", marginBottom:"1vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191", justifyItems:"center"}}>
                        <img style={{maxWidth:"70%",justifySelf:"center"}} src={Logo} />
                    </div>
                </div>
                <div className="" style={{display:"flex",justifyContent:"center"}}>
                    <input className="custom-file-input" type="file" access="image/*" style={{justifyItems:"center"}} onChange={onImageChange}/>
                </div>
                <div className="" style={{display:"flex",justifyContent:"center", width:"100%"}}>
                    {imageURLs.map(imageSrc => <img style={{maxWidth:"50%",justifySelf:"center"}} src={imageSrc}/>)}
                </div>
                <div>
                    <form>
                        {/* <Link to="/" className={images.length < 1 ? "disableLink" : "enableLink"} state= {paymentInfo.state}> */}
                            <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={images.length < 1 ? true: false} onClick={sendImageURL}>
                                <p>ดำเนินการชำระเงิน</p>
                            </button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment