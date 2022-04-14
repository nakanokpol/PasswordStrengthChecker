import React from 'react'
import{useState} from'react'
function Account() {
  const[toggleState,setToggleState]=useState(2);
  const toggleTab=(index)=>{
    console.log(index);
    setToggleState(index);
  }
  return (
      
    <div className='h-screen flex justify-center  bg-[#FFE5A3] font-prompt'>
     <div className='flex flex-col p-8 m-8 bg-white  md:min-w-[800px] 
     sm:min-w-[600px] min-w-[400px]  rounded-xl shadow-xl '>
    <h1 className='text-9xs uppercase font-black'>
      Account
      </h1>
      <div className='flex'>
      <div className={' w-52 bg-yellow-300'}>
        content bar
        <ul>
        <li className='mt-2 cursor-pointer hover:bg-yellow-500 ' onClick={()=>toggleTab(1)}>
          ข้อมูลส่วนตัว
        </li>
        <li className='mt-2 cursor-pointer hover:bg-yellow-500'onClick={()=>toggleTab(2)}>
          ตรวจสอบการสั่งซื้อ
        </li>
        <li className='mt-2 cursor-pointer hover:bg-yellow-500'onClick={()=>toggleTab(3)}>
          เพิ่มสินค้า
        </li>
        <li className='mt-2 cursor-pointer hover:bg-yellow-500'onClick={()=>toggleTab(4)}>
          สินค้าภายในร้าน
        </li>
        </ul>
      </div>
      <div className='p-7'> 
      <div className={toggleState===1?"text-amber-500":'hidden'}>
        <h1>table1</h1>
      </div>
      <div className={toggleState===2?"text-amber-500":'hidden'}>
        <h1>table2</h1>
      </div>
      <div className={toggleState===3?"text-amber-500":'hidden'}>
        <h1>table3</h1>
      </div>
      <div className={toggleState===4?"text-amber-500":'hidden'}>
        <h1>table4</h1>
      </div>
     

      </div>
      </div>
      </div> 
</div>
  )
}

export default Account