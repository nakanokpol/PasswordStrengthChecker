import React, { useState ,useEffect} from "react";
import DetailProduct from "./DetailProduct";

export default function Checkorder_m() {
  const [modalOn, setModalOn] = useState(false);
  const[approve,setApprove] = useState(
    () => {
    const saveStatus = localStorage.getItem("CheckOrderM");

    if (saveStatus) {
      return JSON.parse(saveStatus);
    } else {
      return [];
    }
  })

  useEffect(() => {
    localStorage.setItem("CheckOrderM", JSON.stringify(approve));
  }, [approve]);

  const [detail,setDetail] = useState([]);
  const [number,setNum] = useState(null);
  const [lot,setLot] = useState("");
  const [orderid,setOrderid] = useState("");


  const changeLot=(d)=>{
    setLot(d)
}

const changeNum=(d)=>{
  setNum(d)
}


  const changeContent=(d)=>{
    setDetail([d])
  }

  const clickDetail = () => {
    setModalOn(true);
  };

  const changeOrder=(d)=>{
    setOrderid(d)
}
  


  const Testdata = [
    {
      orderID: "29",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "444445",
      Lot: "01",
      Draw: "20",
      OrderDate: "20220417232222+0700",
    },
    {
      orderID: "29",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "123459",
      Lot: "95",
      Draw: "20",
      OrderDate: "20220417232222+0700",
    },
    {
      orderID: "86",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "950159",
      Lot: "45",
      Draw: "20",
      OrderDate: "20220426235103+0700",
    },
    {
      orderID: "86",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "121231",
      Lot: "04|07",
      Draw: "20",
      OrderDate: "20220426235103+0700",
    },
  ];

  

  

const setState= (a,d) => {
    let tus =[]
     if (approve !==null ){
             for(let i=0;i<approve.length;i++){
                 if(approve[i].orderID ===a && approve[i].Number==d){                    
                    tus.push(1)
                 }
             }
             return tus;
 }else{
  return tus;
 }
   };

   function handleDelete(id) {
    const removeItem = approve.filter((a) => {
      return a.Number !== id;
    });

    setApprove(removeItem);
  }



  

  console.log(approve[0].orderID);
  return (
    <>
      <h1 class="mb-5  text-2xl font-semibold	 " >ตรวจสอบคำสั่งซื้อ</h1>
      
      {modalOn && <DetailProduct setModalOn={setModalOn} setApprove={setApprove} approve={approve} data={detail} setState={setState} lot={lot}  Id={orderid} num={number}/>}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>
                {/* <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  วันที่
                </th> */}
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  รายละเอียด
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
              </tr>
            </thead>
            {Testdata.map((p)=>(
            <tbody class="divide-y border-b border-t border-[#E54E3D]">
              <tr class=" border-b  border-[#E54E3D]">
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      {p.orderID}
                </td>
                {/* <td class="p-3 text-sm font-light whitespace-nowrap text-center"> */}
                
                {/* {Testdata.filter(p.orderID) */}
                {/* </td> */}

                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <a
                    href="#"
                    class="font-bold text-blue-500 hover:underline"
                    onClick={()=>{clickDetail();changeContent(p);changeLot(p.Lot);changeOrder(p.orderID);changeNum(p.Number)}}
                  >
                    ดูรายละเอียด
                  </a>
                </td>

                <td class={`p-3 text-sm font-light whitespace-nowrap text-center ${setState(p.orderID,p.Number)[0]=== 1 ?"text-green-600":"text-gray-500"}`}>
                <button onClick={()=>handleDelete(p.Number)}>X</button>
                {setState(p.orderID,p.Number)[0]=== 1 ?"ตรวจสอบแล้ว":"ยังไม่ตรวจสอบ"}
                </td>
              </tr>
            </tbody>
            ))}
            

           
          </table>
        </div>
      </div>
    </>
  );
}
