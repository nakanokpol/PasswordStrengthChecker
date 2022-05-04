import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./content/Dropdown";
import Navbar from "./content/Navbar";
import {Routes,Route,Navigate}from"react-router-dom";
import Home from "./page/home";
import SingleLotteryInfo from "./page/singleLotteryInfo";
import PackLotteryInfo from "./page/packLotteryInfo";
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
import Notification from "./page/notification";

function App() {
  
  console.log("localStorage.getItem(token)",localStorage.getItem("token"))

  const [orderID_Global, setOrderID_Global] = useState("")

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
      <div className={localStorage.getItem("token") === undefined || localStorage.getItem("token") === null ?
        "hidden" : ""
      }>
        <Navbar toggle={toggle}/>
      </div>
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route exact path="*" element={
            localStorage.getItem("token") === undefined || localStorage.getItem("token") === null? (
              <Navigate to="/login"/>
            ) : (
              <Navigate to="/home"/>
            )
          }/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/account"  element={<Account/>}/>
          <Route path="/accountadmin" element={<Account_admin/>} />
          <Route path="/accountmerchant" element={<Account_merchant/>} />
          <Route path="/singlelotteryinfo"  element={<SingleLotteryInfo/>}/>
          <Route path="/packlotteryinfo"  element={<PackLotteryInfo/>}/>
          <Route path="/cart"  element={<Cart order_ID = {getOrderID}/>}/>
          <Route path="/paymentmethod" element={ <OrderID_API.Provider value = {orderID_Global}><Payment /></OrderID_API.Provider>}/>
          <Route path="/store"  element={<Store/>}/>
          <Route path="/paymentsuccess"  element={<SlipPayment/>}/>
          <Route path="/random"  element={<Random/>}/>
          <Route path="/register"  element={<Register/>}/>
          <Route path="/notification"  element={<Notification/>}/>
      </Routes>
    </>
  );
}

export default App;
