import React from 'react'

function AcceptDel({onShowing,text}) {
    const handleOKClick = () => {
        // isShow(true);
        onShowing(true);
        
      };
      const handleCancelClick = () => {
        // isShow(false);
        onShowing(false);
       
      };
  return (
    <div>
        <div class="    fixed inset-0 z-50   ">
      <div class="flex h-screen justify-center items-center ">
        <div class="relative rounded-lg shadow bg-[#FFF8E6] w-[500px] border">
          {/* Modal header */}
          <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
              ยืนยันการลบ
              
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent  hover:text-[#E54E3D] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={handleCancelClick}
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
          <div class="p-6 space-y-6  h-[70px] flex justify-center">
           <p>{text}</p> 
             
          </div>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-[#E54E3D] ">
            <button
              type="button"
              class="text-white bg-[#E54E3D] hover:bg-[#f93019]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={handleOKClick}
            >
              ยืนยัน
            </button>
            <button
              type="button"
              class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 "
              onClick={handleCancelClick}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AcceptDel