import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./content/Dropdown";
import Navbar from "./content/Navbar";
import {Routes,Route}from"react-router-dom";
import Account from "./page/account";
import Home from "./page/home";
import SingleLotteryInfo from "./page/singleLotteryInfo";
import PackLotteryInfo from "./page/packLotteryInfo";
import axios from "axios";

function App() {
  ///////////// Test Variables ///////////////
  const li_default_data = [
    {Number:"000000", DrawDate:"1 เมษายน 2565", Draw: "20", Storename: "สำรีขายหวย", pack:"N"},
    {Number:"123456", DrawDate:"16 เมษายน 2565", Draw: "10", Storename: "แมวน้ำตัวเล็ก", pack:"Y"},
    {Number:"878461", DrawDate:"1 เมษายน 2565", Draw: "2", Storename: "สำรีขายไก่", pack:"N"},
    {Number:"484461", DrawDate:"1 เมษายน 2565", Draw: "1", Storename: "ทำไมทำไม", pack:"N"},
    {Number:"090545", DrawDate:"1 เมษายน 2565", Draw: "15", Storename: "ไข่เป็นแฟนได้หมอ", pack:"Y"},
    {Number:"140154", DrawDate:"1 เมษายน 2565", Draw: "17", Storename: "เป็นลูกครึ่งนิดนึง", pack:"Y"},
    {Number:"090145", DrawDate:"16 เมษายน 2565", Draw: "33", Storename: "หยุดโดยไม่มีอะไรกั้น", pack:"Y"},
    {Number:"999997", DrawDate:"1 เมษายน 2565", Draw: "27", Storename: "แลคตาซอยห้าบาท", pack:"N"},
    {Number:"774164", DrawDate:"1 เมษายน 2565", Draw: "13", Storename: "ขอบคุณแต่คราวหลังไม่ต้อง", pack:"N"},
    {Number:"851945", DrawDate:"1 เมษายน 2565", Draw: "15", Storename: "ฉันคือประธานบริษัท", pack:"N"},
    {Number:"156174", DrawDate:"1 เมษายน 2565", Draw: "17", Storename: "สำรวยขายหวี", pack:"N"},
    {Number:"784166", DrawDate:"16 เมษายน 2565", Draw: "33", Storename: "แมวตัวโปรด", pack:"Y"},
    {Number:"196135", DrawDate:"1 เมษายน 2565", Draw: "27", Storename: "ไข่เป็นคนเอ้าจอ", pack:"N"},
    {Number:"151512", DrawDate:"1 เมษายน 2565", Draw: "13", Storename: "หวยชี้ฟ้า", pack:"N"}
  ]
  const [data_toShow, setData] = useState(li_default_data)
  const [firstTimeSingleGet, setFirstTimeSingleGet] = useState([])
  const [firstTimePackGet, setFirstTimePackGet] = useState([])
  const [checkFirstSingleGet, setCheckFirstSingleGet] = useState(true)
  const [checkFirstPackGet, setCheckFirstPackGet] = useState(true)

  useEffect((event)=>{
    if (checkFirstSingleGet===true){
      setCheckFirstSingleGet(false)
      axios.get('http://ef4f-2403-6200-88a4-54b-f066-85f2-cf29-16be.ngrok.io/getSingleLottery')
      .then(function (response) {
        if(!response){
          setFirstTimeSingleGet(response.data.single_lottery)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  })
  useEffect((event)=>{
    if (checkFirstPackGet===true){
      setCheckFirstPackGet(false)
      axios.get('http://ef4f-2403-6200-88a4-54b-f066-85f2-cf29-16be.ngrok.io/getPackLottery')
      .then(function (response) {
        if(!response){
          setFirstTimePackGet(response.data.pack_lottery)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  })
  useEffect((event)=>{
    console.log("firstTimePackGet.length() ",firstTimeSingleGet.length)
    console.log("firstTimePackGet.length() ",firstTimePackGet.length)
    if (!(checkFirstSingleGet || checkFirstPackGet) && (firstTimeSingleGet.length>0 || firstTimePackGet.length>0)){
      setData([...firstTimeSingleGet, ...firstTimePackGet])
    }
  },[checkFirstSingleGet, checkFirstPackGet])

  const sendSearchNumberToBase = (searchNum)=>{
    axios.post('http://ef4f-2403-6200-88a4-54b-f066-85f2-cf29-16be.ngrok.io/getSearch', 
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
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home li_dataToshow={data_toShow} searchNumApp={sendSearchNumberToBase}/>}/>
        <Route path="/account"  element={<Account/>}/>
        <Route path="/singlelotteryinfo"  element={<SingleLotteryInfo/>}/>
        <Route path="/packlotteryinfo"  element={<PackLotteryInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
