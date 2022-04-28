import React, { useState} from "react";

function Detailtracking({ setModalOn, data, id}) {
  const [text, setText] = useState(null);
 
  
  const handleOKClick = () => {
    // e.preventDefault();

    setModalOn(false);
   
  };
  const handleCancelClick = () => {
    // e.preventDefault();

    setModalOn(false);
   
  };

  return (
    <div class="    fixed inset-0 z-50   ">
      <div class="flex h-screen justify-center items-center ">
        <div class="relative rounded-lg shadow bg-[#FFF8E6] w-[550px] border">
          {/* Modal header */}
          <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
              รายละเอียด 
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

          {data.map((p) => (
            <>
              
              <div class="p-6 space-y-6  h-[308px] overflow-x-auto">
                
              <div class="grid grid-cols-2 gap-3 ">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>ข้อมูลสินค้า</h5>
                  </div>
                  <div class=" bg-slate-200 rounded-md p-2">
                    {p.lotteryList.map((d)=>(
                      <>
                      <div class="flex">
                      <h5 class="pr-4">เลขสลาก</h5>
                      {d.Number_lottery}
                      </div>
                      <div class="flex">
                      <h5 class="pr-4">ชุดที่ {d.Lot}</h5>
                      <h5 class="pr-4">งวดที่ {d.Draw}</h5>
                      </div>
                      <div class="flex">
                      <h5 class="pr-4">งวดวันที่ {d.DrawDate}</h5>                     
                      </div>
                      </>
                    ))}
                    
                  </div>
                </div>
                
                
                
                
                <div class="grid grid-cols-2 gap-3 ">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>ชื่อ</h5>
                  </div>
                  <div class="">
                    <h5>{p.FullName}</h5>
                  </div>
                </div>
                
                
            
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>ที่อยู่</h5>
                  </div>
                  <div class="grid grid-flow-row ">
                    <div class="grid grid-cols-2 gap-2 ">
                      <p class="font-semibold">บ้านเลขที่</p>
                      <p>{p.Address.HomeNo}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">ซอย</p>
                      <p>{p.Address.Soi}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">ถนน</p>
                      <p>{p.Address.Road}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">แขวง/ตำบล</p>
                      <p>{p.Address.Subdistrict}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">เขต/อำเภอ</p>
                      <p>{p.Address.District}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">จังหวัด</p>
                      <p>{p.Address.Province}</p>{" "}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <p class="font-semibold">รหัสไปรษณีย์</p>
                      <p>{p.Address.ZipCode}</p>{" "}
                    </div>
                  </div>
                </div>
               
              </div>
            </>
          ))}
          {/* <!-- Modal footer --> */}
          
          <div class="p-6 space-x-2 rounded-b border-t border-[#E54E3D]" first-lette>
           

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailtracking;
