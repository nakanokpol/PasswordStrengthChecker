import React, { useState, useEffect } from "react";
import DetailProduct from "./DetailProduct";
import axios from "axios";

export default function Checkorder_m({dataOrder}) {
  const [modalOn, setModalOn] = useState(false);
  const [checkEdit, setcheckEdit] = useState(false);
  const [detail, setDetail] = useState([]);
  const [number, setNum] = useState(null);
  const [lot, setLot] = useState("");
  const [orderid, setOrderid] = useState("");
  const [dataPut, setDataput] = useState([]);

  const changeLot = (d) => {
    setLot(d);
  };

  const changeNum = (d) => {
    setNum(d);
  };

  const changeContent = (d) => {
    setDetail(d);
  };

  const clickDetail = () => {
    setModalOn(true);
  };

  const changeOrder = (d) => {
    setOrderid(d);
  };
  
  


  

  const setState = (a) => {
    let tus = false;
    for (let i = 0; i < dataPut.length; i++) {
      if (dataPut[i].orderID === a) {
        tus=true;
      }
    }
    return tus;
  };


  const mapOrder = (list_) => {
    let orderMap = new Map();
    for (let element of list_) {
      let lottery = [];
      if (orderMap.has(element.orderID)) {
        lottery = orderMap.get(element.orderID);
        lottery.push({
          Number: element.Number,
          Lot: element.Lot,
          Draw: element.Draw,
          approve: "No",
        });
        orderMap.set(element.orderID, lottery);
        
      } else {
        lottery.push({
          Number: element.Number,
          Lot: element.Lot,
          Draw: element.Draw,
          approve: "No",
        });
        orderMap.set(element.orderID, lottery);
        
      }
    }    
    return orderMap;
  };

  const test = [];
  
  console.log("data",dataOrder)  
  
  // if(dataOrder)
  for (const [key, value] of mapOrder(dataOrder).entries()) {
    test.push({ key, value });
  }

  console.log("Detail", detail);
  console.log("Data to Put", dataPut);
 
  return (
    <>
       <div class="grid grid-cols-2  ">
      <h1 class="mb-5  text-2xl font-semibold	 ">
         ตรวจสอบคำสั่งซื้อ
      </h1>
      
      <h2 class="m-1 ml-5  text-xl justify-self-end">ทั้งหมด {test.length} รายการ  </h2>
      </div>
      {modalOn && (
        <DetailProduct
          setModalOn={setModalOn}
          setDataput={setDataput}
          dataPut={dataPut}
          data={detail}
          setState={setState}
          orderID={orderid}
          
        />
      )}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  w-full">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class="p-2 text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>              
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  รายละเอียด
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody>
             
              {[...Array(test.length)].map((_, i) => (
                <tr class="border-b  border-[#E54E3D] text-center">
                  <td>{test[i].key}</td>
                  <td>
                    <a
                      href="#"
                      class="font-bold text-[#E54E3D] hover:underline"
                      onClick={() => {
                        clickDetail();
                        changeContent(test[i].value);
                        changeOrder(test[i].key);
                      }}
                    >
                      ดูรายละเอียด
                    </a>
                  </td>
                  <td
                    class={`p-3 text-sm font-light whitespace-nowrap text-center ${
                      setState(test[i].key) === true
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {setState(test[i].key) === true ? "สำเร็จ" : "ยังไม่ตรวจสอบ"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
