import React,{useState} from 'react'
import axios from 'axios';


function DetailPaymaent({ setModalOn, data, setApprove, approve, id,setState ,money,customerID}) {
    
  function putPayment(oid,app,money) {
    axios
      .put(
        "http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io/updateOrderPayment/",
        {
          token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluMTAxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjUxMTA1MDc0LCJleHAiOjE2NTExNDEwNzR9.Jqzo0DwN1452zZkmEaF4KwbN9-L1ek7om5M1ThAxhPo",
          orderID: id,
          customerID: customerID,
          approve: app,
          money: money,
        
        }
      )
      .then(function (response) {
        console.log(response);
        // console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    
    const handleOKClick = (e) => {
      // e.preventDefault();
      // e.preventDefault();
      putPayment(id,"yes",money)
      setModalOn(false);
      setApprove([
        ...approve,
        {
          orderID: id,
          approve: "yes",         
          customerID:customerID,
          money:money,
        //   oderID:data.orderID
        },
      ]);
    };

    const handleCancelClick = (e) => {
      // e.preventDefault();
      putPayment(id,"No",money)
      setModalOn(false);
      setApprove([
        ...approve,
        {
            orderID: id,
            approve: "No",         
            customerID:customerID,
            money:money,
        },
      ]);
    };
  
    return (
      <div class="    fixed inset-0 z-50   ">
        <div class="flex h-screen justify-center items-center ">
          <div class="relative rounded-lg shadow bg-[#FFF8E6] w-[550px] border">
            {/* Modal header */}
            <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
              <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                หลักฐานการชำระ {customerID}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent  hover:text-[#E54E3D] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                onClick={() => setModalOn(false)}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                        10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293
                         5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* table */}

            {/* {money} */}
              
            {data.map((p) => (
              <>
                <div class="p-6 space-y-6  h-[308px] overflow-x-auto">
                  <div class="grid grid-cols-2 gap-3 ">
                    <div class="font-semibold text-[#E54E3D]">
                      <h5>จำนวนเงิน</h5>
                    </div>
                    <div class="">
                      <h5>{p.Money}</h5>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3  mt-2">
                    <div class="font-semibold text-[#E54E3D]">
                      <h5>ไฟล์แนบ</h5>
                    </div>
                    <div class="">
                      <h5>{p.URLSlip}</h5>
                      <img src={`${p.URLSlip}`}/>
                    </div>
                  </div>
                 
                </div>
              </>
            ))}
            {/* <!-- Modal footer --> */}
            
            <div class={` ${setState(id)[0] == "1"? "hidden":setState(id)[0] == "0"?"hidden":"p-6 space-x-2 rounded-b border-t border-[#E54E3D]"}`} first-lette>
                   
  
              <button
                
                type="submit"
                class="text-white bg-[#E54E3D] hover:bg-[#f93019]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={() => handleOKClick()}
              >
                ยืนยันสำเร็จ
              </button>
  
              <button
                
                type="submit"
                class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  "
                onClick={() => {
                  handleCancelClick();
                }}
              >
                ไม่สำเร็จ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DetailPaymaent;
  