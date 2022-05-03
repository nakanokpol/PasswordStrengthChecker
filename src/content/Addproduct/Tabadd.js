import React, { useState} from "react";
import Pack from "./Pack";
import Single from "./Single";


function Tabadd() {
  const [tabState, setTabState] = useState(1);
  
  const clickTab = (i) => {
    setTabState(i);
    //  console.log("click");
  };
 

  return (
      
    <div class="w-full">        
      <div class="grid grid-cols-2 gap-4">
        <div
          class={`text-center ${
            tabState === 1 ? "border-b-4 border-[#E54E3D]" : " border-0"
          }`}
        >
          <div class=" cursor-pointer" role="tab" onClick={() => clickTab(1)}>
            สลากเดี่ยว
          </div>
        </div>
        <div
          class={`text-center ${
            tabState === 2 ? "border-b-4 border-[#E54E3D]" : " border-0"
          }`}
        >
          <div class="cursor-pointer" role="tab" onClick={() => clickTab(2)}>
            สลากชุด
          </div>
        </div>
      </div>
          <div class={
            tabState === 1 ? "" : "hidden"
          }>
              <Single />
          </div>
          <div class={
            tabState === 2 ? "" : "hidden"
          }>
              <Pack/>
              
          </div>
        

    </div>
  );
}

export default Tabadd;
