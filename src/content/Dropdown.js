import React from 'react'
import {Link} from 'react-router-dom'

function Dropdown({isOpen,toggle}) {
  return (
    <div className={isOpen ?"grid grid-rows-4 text-center font-prompt items-center bg-[#FFE5A3]":"hidden"} onClick={toggle}>
       <Link className="p-4 hover:bg-[#E54E3D] hover:text-white" to="/">
          หน้าหลัก
        </Link>
        <Link className="p-4 hover:bg-[#E54E3D] hover:text-white " to="/cart">
          ตะกร้าสินค้า
        </Link>
        <Link className="p-4 hover:bg-[#E54E3D] hover:text-white" to="/orders">
          สินค้าที่จะได้รับ
        </Link>
        <Link className="p-4 hover:bg-[#E54E3D] hover:text-white" to="/notification">
          การแจ้งเตือน
        </Link>
        <Link className="p-4 hover:bg-[#E54E3D] hover:text-white" to="/account">
          บัญชีผู้ใช้
        </Link>
        <span className="border-l-2 border-red-200"/>
        <Link className="p-4 hover:bg-[#E54E3D] hover:text-white" to="/login">
          เข้าสู่ระบบ
        </Link>
        <Link
        to="/register"
        className="m-5  p-10 py-1 px-1 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300"
      > 
      สมัครเป็นสมาชิก
          </Link>
    </div>
  )
}

export default Dropdown