import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./content/Dropdown";
import Navbar from "./content/Navbar";
import {Routes,Route}from"react-router-dom";
import Home from "./page/home";
import SingleLotteryInfo from "./page/singleLotteryInfo";
import PackLotteryInfo from "./page/packLotteryInfo";
import axios from "axios";
import Cart from "./page/cart";
import Payment from "./page/payment";
import Store from "./page/store";
import SlipPayment from "./page/slipSuccess";
import OrderID_API from "./page/components/orderID_API";
import Account from "./page/account";
import Account_merchant from "./page/account_merchant";
import Account_admin from "./page/account_admin";
import Random from "./page/random";
import LogIn from "./page/logIn";
import Register from "./page/register";

const url_ = 'http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMDk1MDY5LCJleHAiOjE2NTExMDU4Njl9.zZTFWwlN6yIPsi6UAETNHnsminyO6h4jjsazH4j0fa4'

function App() {
  const li_default_data = []
  /////////// Test Variables ///////////////
  // const li_default_data = [
  //   {Number:"000000", DrawDate:"1 เมษายน 2565", Draw: "20", Storename: "สำรีขายหวย", pack:"N"},
  //   {Number:"123456", DrawDate:"16 เมษายน 2565", Draw: "10", Storename: "แมวน้ำตัวเล็", Amount:"2", pack:"Y",},
  //   {Number:"878461", DrawDate:"1 เมษายน 2565", Draw: "2", Storename: "สำรีขายไก่", pack:"N"},
  //   {Number:"484461", DrawDate:"1 เมษายน 2565", Draw: "1", Storename: "ทำไมทำไม", pack:"N"},
  //   {Number:"090545", DrawDate:"1 เมษายน 2565", Draw: "15", Storename: "ไข่เป็นแฟนได้หมอ", Amount:"3", pack:"Y"},
  //   {Number:"140154", DrawDate:"1 เมษายน 2565", Draw: "17", Storename: "เป็นลูกครึ่งนิดนึง", Amount:"5", pack:"Y"},
  //   {Number:"090145", DrawDate:"16 เมษายน 2565", Draw: "33", Storename: "หยุดโดยไม่มีอะไรกั้น", Amount:"2", pack:"Y"},
  //   {Number:"999997", DrawDate:"1 เมษายน 2565", Draw: "27", Storename: "แลคตาซอยห้าบาท", pack:"N"},
  //   {Number:"774164", DrawDate:"1 เมษายน 2565", Draw: "13", Storename: "ขอบคุณแต่คราวหลังไม่ต้อง", pack:"N"},
  //   {Number:"851945", DrawDate:"1 เมษายน 2565", Draw: "15", Storename: "ฉันคือประธานบริษัท", pack:"N"},
  //   {Number:"156174", DrawDate:"1 เมษายน 2565", Draw: "17", Storename: "สำรวยขายหวี", pack:"N"},
  //   {Number:"784166", DrawDate:"16 เมษายน 2565", Draw: "33", Storename: "แมวตัวโปรด", Amount:"3", pack:"Y"},
  //   {Number:"196135", DrawDate:"1 เมษายน 2565", Draw: "27", Storename: "ไข่เป็นคนเอ้าจอ", pack:"N"},
  //   {Number:"151512", DrawDate:"1 เมษายน 2565", Draw: "13", Storename: "หวยชี้ฟ้า", pack:"N"}
  // ]
  const [data_toShow, setData] = useState(li_default_data)
  const [checkFirstGet, setCheckGet] = useState(true)
  const [orderID_Global, setOrderID_Global] = useState("")

  useEffect((event)=>{
    if(checkFirstGet === true){
      axios.post(url_+'/getSearch', 
      {SearchNumber: "xxxxxx"})
      .then(function (response) {
        setData(response.data.search_lottery)
      })
      .catch(function (error) {
        console.log(error);
      });
      setCheckGet(false)
    }
  })
  const sendSearchNumberToBase = (searchNum)=>{
    axios.post(url_+'/getSearch', 
      {SearchNumber: searchNum.number})
      .then(function (response) {
        setData(response.data.search_lottery)
        console.log("test4")
      })
      // const data_from_get = [...tempSingle,...tempPack]
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("Home => App:",searchNum)
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 766 && isOpen) {
        setIsOpen(false);
        console.log("i resizeddd");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const getOrderID = (item) =>{
    setOrderID_Global(item)
  }

  // const sampleLink = <Link to="/paymentmethod" state={{}}></Link>

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home li_dataToshow={data_toShow} searchNumApp={sendSearchNumberToBase}/>}/>
        {/* <Route path="/account"  element={<Account/>}/> */}
        <Route path="/account" element={<Account_admin/>} />
        <Route path="/accountmerchant" element={<Account_merchant/>} />
        <Route path="/singlelotteryinfo"  element={<SingleLotteryInfo/>}/>
        <Route path="/packlotteryinfo"  element={<PackLotteryInfo/>}/>
        <Route path="/cart"  element={<Cart order_ID = {getOrderID}/>}/>
        <Route path="/paymentmethod" element={ <OrderID_API.Provider value = {orderID_Global}><Payment /></OrderID_API.Provider>}/>
        <Route path="/store"  element={<Store/>}/>
        <Route path="/paymentsuccess"  element={<SlipPayment/>}/>
        <Route path="/random"  element={<Random/>}/>
        <Route path="/login"  element={<LogIn/>}/>
        <Route path="/register"  element={<Register/>}/>
        
      </Routes>
    </>
  );
}

export default App;
