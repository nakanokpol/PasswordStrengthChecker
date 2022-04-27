import React from "react";
import { useLocation,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './cart.css';
import Logo from './imgComponents/tempPhoto.jpg';
import './payment.css';

const url_ = 'http://a1f7-2403-6200-88a4-54b-eda0-294a-e446-b93.ngrok.io'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMDcwMTYxLCJleHAiOjE2NTEwODA5NjF9.KmKrjDS012ivBmVFJ2_Bohs2SkcedVaXKq-V_kMJm-A'

const Payment = (card_props)=>{

    const [images, setImages] = useState([]);
	const [imageURLs, setImagwURLs] = useState([]);

    useEffect(()=>{
        if (images.length < 1)return;
        const newImageURL = [];
        images.forEach((image)=> newImageURL.push(URL.createObjectURL(image)))
        setImagwURLs(newImageURL);
    },[images])

    function onImageChange(e){
        setImages([...e.target.files]);
    }

    const sendImageURL = () =>{
        axios.put(url_+'/updateOrderSlip',
            {
                token:token,
                URLSlip:imageURLs[0],

            })
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
        // updateOrderSlip=
        //     {
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUwMjkxODM2LCJleHAiOjE2NTAyOTU0MzZ9.Jnmoydu3Fqf2nq-5DNj86KaNsC72G6jbU9lmM3RXjMA",
        //     "URLSlip":"/image.png",
        //     // "OrderID":"27"
        //     }
    }

    const paymentInfo = useLocation()
    const paymentInfoState = paymentInfo.state
    console.log("paymentInfoState",paymentInfoState)
    return (
        <div className="font-prompt flex justify-center" style={{backgroundColor:"#FFE5A3"}}>
            <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                <div>
                    <h1 class="text-xl font-semibold mb-2" style={{color:"#E54E3D"}}>การชำระเงิน</h1>
                    <div className="justify-left" style={{marginTop:"0vw"}}></div>
                    <div style={{height:"1vw"}}></div>
                    <div style={{marginBottom:"0vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191"}}>
                        <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0vw", color:"#000000"}}>ยอดเงินที่ต้องชำระ<span class="text-2xl font-semibold" style={{color:"#E54E3D"}}>{paymentInfoState.costAndDelivery}&ensp; บาท</span></p>
                    </div>
                    <div className="flex" style={{justifyContent:"center", marginBottom:"1vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191", justifyItems:"center"}}>
                        <img style={{maxWidth:"70%",justifySelf:"center"}} src={Logo} />
                    </div>
                </div>
                <div className="" style={{display:"flex",justifyContent:"center", width:"50อไ"}}>
                    <input className="custom-file-input" type="file" access="image/*" style={{justifyItems:"center"}} onChange={onImageChange}/>
                </div>
                <div className="" style={{display:"flex",justifyContent:"center", width:"100%"}}>
                    {imageURLs.map(imageSrc => <img style={{maxWidth:"50%",justifySelf:"center"}} src={imageSrc}/>)}
                </div>
                <div>
                    <form>
                        <Link to="/" className={images.length < 1 ? "disableLink" : "enableLink"} state= {{}}>
                            <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={images.length < 1 ? true: false} onClick={sendImageURL}>
                                <p>ดำเนินการชำระเงิน</p>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment