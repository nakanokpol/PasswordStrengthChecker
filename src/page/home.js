import React from "react";
import SingleCardTemplate from "./components/singleCard"
import PackedCardTemplate from "./components/packedCard"
import SingleCardTemplateTest from "./components/singleCardTemplateTest"
import PackedCardTemplateTest from "./components/packedCardTemplateTest"

const li_data = [
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

function Home() {
  return (
    <div className="h-screen bg-white" style={{margin:"2% 5% 5% 5%"}}>
      <div className="h-screen grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center" style={{gridTemplateRows: "repeat(auto-fill, 11.5VW)"}}>
        {li_data.map((element)=>{
          if (element.pack==="N") {
            return <SingleCardTemplate Number={element.Number} DrawDate={element.DrawDate} Draw={element.Draw} Storename={element.Storename}/>
          }else{
            return <PackedCardTemplate Number={element.Number} DrawDate={element.DrawDate} Draw={element.Draw} Storename={element.Storename}/>
          }
        })}
      </div>
    </div>
  );
}

export default Home;
