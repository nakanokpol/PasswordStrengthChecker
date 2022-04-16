import React from "react";
import CardTemplate1 from "./components/card"

// const li_data = [
//   {Number:"000000", DrawDate:"1 เมษายน 2565", Draw: "20", Storename: "สำรีขายหวย"},
//   {Number:"123456", DrawDate:"16 เมษายน 2565", Draw: "10", Storename: "สำรีขายหวย"},
//   {Number:"878461", DrawDate:"1 เมษายน 2565", Draw: "2", Storename: "หวยล้นฟ้า"},
//   {Number:"484461", DrawDate:"1 เมษายน 2565", Draw: "1", Storename: "สำรีขายหวย"},
//   {Number:"090545", DrawDate:"1 เมษายน 2565", Draw: "15", Storename: "แมวตัวโปรด"},
//   {Number:"140154", DrawDate:"1 เมษายน 2565", Draw: "17", Storename: "โลกที่ไม่มีเธอ"},
//   {Number:"090145", DrawDate:"16 เมษายน 2565", Draw: "33", Storename: "สำรีขายหวย"},
//   {Number:"999997", DrawDate:"1 เมษายน 2565", Draw: "27", Storename: "คนไม่จำเป็น"},
//   {Number:"774164", DrawDate:"1 เมษายน 2565", Draw: "13", Storename: "ประยวย"}
// ]

const li_data = [
  {Number:"000000", DrawDate:"1 เมษายน 2565", Draw: "20"},
  {Number:"123456", DrawDate:"16 เมษายน 2565", Draw: "10"},
  {Number:"878461", DrawDate:"1 เมษายน 2565", Draw: "2"},
  {Number:"484461", DrawDate:"1 เมษายน 2565", Draw: "1"},
  {Number:"090545", DrawDate:"1 เมษายน 2565", Draw: "15"},
  {Number:"140154", DrawDate:"1 เมษายน 2565", Draw: "17"},
  {Number:"090145", DrawDate:"16 เมษายน 2565", Draw: "33"},
  {Number:"999997", DrawDate:"1 เมษายน 2565", Draw: "27"},
  {Number:"774164", DrawDate:"1 เมษายน 2565", Draw: "13"}
]

function Home() {
  return (
    <div className="h-screen bg-white" style={{margin:"2% 5% 5% 5%"}}>
      <div className="h-screen grid grid-rows-5 grid-cols-5 justify-items-center">
        {li_data.map((element)=>{
            return <CardTemplate1 Number={element.Number} DrawDate={element.DrawDate} Draw={element.Draw}/>
        })}
      </div>
    </div>
  );
}

export default Home;
