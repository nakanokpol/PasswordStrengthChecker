import React from "react";
import { useState } from "react";
import Addproduct from "../content/Addproduct";
import Checkorder_m from "../content/Checkorder_m";
import Editprofilemerchant from "../content/Editpage/Editprofilemerchant";
import Header from "../content/component/Header";
import Pic from "../Assets/5fb952383d4b9b0cc0fd7d2e_800x0xcover_3aaaqsST.jpg";
import ProductStore from "../content/ProductStore";
import Profile_m from "../content/Profile_m";
// import Tabadd from "../content/Tabadd";

function Account_merchant() {
  const [toggleState, setToggleState] = useState(3);
  const [editMode,setEditMode]=useState(false);
  // const [tabState, setTabState] = useState(true);
  // const Tab =false;
  const changeTofalse =() =>{
        setEditMode(false);
  }
 

 

  console.log(editMode);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <>
    <div class="h-screen flex justify-center  bg-[#FFE5A3] overflow-hidden	 font-prompt ">
      <div
        class="flex flex-col p-8 m-8 bg-white  xl:w-[820px] 
     md:w-[700px] min-w-[650px] h-[800px] shadow-xl "
      >
        <h1 class="text-xl text-[#E54E3D] font-black ml-6">บัญชีของคุณ</h1>
        <Header name={"ร้านสำรีขายหวย"} undername={"กรุงเทพมหานคร"} picture={Pic}/>
        <div class="flex">
          <div class=" min-w-[160px] h-[590px] border-r">
            
         
             
              <div
                class={`mt-4  cursor-pointer ${toggleState === 1 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => toggleTab(1)}
              >               
                <p class='pt-2 pl-4'>ข้อมูลส่วนตัว</p>
              </div>

              <div
                class={`cursor-pointer ${toggleState === 2 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(2);changeTofalse();}}
              >               
                <p class="pt-2 pl-4">ตรวจสอบคำสั่งซื้อ</p>
              </div>

              <div
                class={`cursor-pointer ${toggleState === 3 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(3);changeTofalse()}}
              >               
                <p class="pt-2 pl-4">เพิ่มสินค้า</p>
              </div>

              <div
                class={`cursor-pointer ${toggleState === 4 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(4);changeTofalse();}}
              >               
                <p class="pt-2 pl-4">สินค้าภายในร้าน</p>
              </div>
            
           
             
           
          </div>
          <div class="p-7 ">
            <div class={toggleState === 1 ? "flex" : "hidden"}>
            <div>
               {editMode?<Editprofilemerchant changeTofalse={changeTofalse}/>:<Profile_m />}
              </div>
             
              <div class={editMode === false ? "" : "hidden"} style={{cursor:"pointer"}} onClick={()=>setEditMode(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              
            </div>
            <div class={toggleState === 2 ? "" : "hidden"}>
            
                <Checkorder_m/>        
              
            </div>

            <div class={toggleState === 3 ? "flex-initial	" : "hidden"}>
            
              <Addproduct/>       
             
            </div>

            <div class={toggleState === 4 ? "" : "hidden"}>
             
             <ProductStore/>
                         
              
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Account_merchant 