import React, { useEffect, useState } from "react";
import DetailSeller from "./DetailSeller";
import axios from "axios";


function Checkrigis({data}) {
  const [modalOn, setModalOn] = useState(false);
  



  const[approve,setApprove] = useState(
    () => {
    const saveStatus = localStorage.getItem("Sellertus");

    if (saveStatus) {
      return JSON.parse(saveStatus);
    } else {
      return [];
    }
  })



  useEffect(() => {
    localStorage.setItem("Sellertus", JSON.stringify(approve));
  }, [approve]);
  
  const [detail,setDetail] = useState([]);
  const [id,setID] = useState([]);
 

  const changeID=(d)=>{
    setID(d)
}
  const changeContent=(d)=>{
        setDetail([d])
  }
  const clickDetail = () => {
    setModalOn(true);
   
  };
  
  const setState= (a) => {
   let tus =[]
            for(let i=0;i<approve.length;i++){
                if(approve[i].sellerID ===a){
                    if(approve[i].approve==="Yes")
                    {tus.push(1)}else{tus.push(0) }
                }
            }
            return tus;

  };
  const setComment= (a) => {
    let text =[]
             for(let i=0;i<approve.length;i++){
                 if(approve[i].sellerID ===a){
                    text.push(approve[i].comment)
                 }
             }
             return text;
 
   };
   function handleDelete(id) {
    const removeItem = approve.filter((a) => {
      return a.sellerID !== id;
    });

    setApprove(removeItem);
  }
//   console.log("a =" + approve[3].comment);
//   console.log("t =" + t1);
  return (
    <>
       <div class="grid grid-cols-2  ">
      <h1 class="mb-5  text-2xl font-semibold	 ">
         คำขอลงทะเบียน
      </h1>
      
      <h2 class="m-1 ml-5  text-xl justify-self-end">ยังไม่ตรวจสอบ {data.length} รายการ  </h2>
      </div>
       {/* {setComment(3)} */}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ชื่อ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  นามสกุล
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ข้อมูลการสมัคร
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  หมายเหตุ
                </th>
              </tr>
            </thead>

            <tbody class="divide-y border-b border-t border-[#E54E3D]">
                {data.map((data)=>
               
                      <tr class=" border-b  border-[#E54E3D]">
                      <td class="w-30 p-3 text-sm font-light whitespace-nowrap text-center">
                        <p class="">{data.Firstname}</p>
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <p class="">{data.Lastname}</p>
                      </td>
      
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <button                         
                          class="font-bold text-[#E54E3D] hover:underline"
                          onClick={()=>{changeContent(data);clickDetail();changeID(data.SellerID); }}
                        >                   
                          ดูรายละเอียด
                        </button>
                      </td>
                      
                      <td class={`p-3 text-sm font-light whitespace-nowrap text-center ${setState(data.SellerID)[0]=== 1?"text-green-500":setState(data.SellerID)[0]=== 0?"text-red-500":"text-gray-500"}`}>
                        {setState(data.SellerID)[0]=== 1?"อนุมัติ":setState(data.SellerID)[0]=== 0?"ไม่อนุมัติ":"ยังไม่ตรวจสอบ"}
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        {setComment(data.SellerID)!=""? setComment(data.SellerID):"-"}
                      </td>
                      {/* <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        <button onClick={()=>handleDelete(data.SellerID)}>X</button>
                      </td> */}
                     
      
                      
                    </tr>
                
                   
                )}
              
            
            </tbody>

            
          </table>
          
          {modalOn && <DetailSeller setModalOn={setModalOn} data={detail} id={id} setApprove={setApprove} approve={approve} setState={setState}/>}
         
        </div>
      </div>
    
    
    </>
  );
}

export default Checkrigis;
