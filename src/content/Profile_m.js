import React, { useState, useEffect } from "react";
import { global_url_token } from "../page/global_url_token";

function Profile(props) {

  return (
    <div >
      <div class="grid grid-cols-3 gap-9">
        <h1 class="mb-5  xl:text-2xl font-semibold	md:text-xl ">
          ข้อมูลส่วนตัว
        </h1>
        <div class="col-span-2  text-right m-2"></div>
      </div>
      <div class=" overflow-y-auto h-[400px] p-3">
        <div class="grid grid-cols-2 gap-7">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ชื่อ</h5>
          </div>
          <div class="">
            <h5>{props.firstName}</h5>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>นามสกุล</h5>
          </div>
          <div class="">
            <h5>{props.lastName}</h5>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>เบอร์โทรศัพท์</h5>
          </div>
          <div class="">
            <h5>{props.number}</h5>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>วัน/เดือน/ปีเกิด</h5>
          </div>
          <div class="">
            <h5>
              {props.birthday.slice(6, 8) +
                "/" +
                props.birthday.slice(4, 6) +
                "/" +
                props.birthday.slice(0, 4)}
            </h5>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>Email</h5>
          </div>
          <div class="">
            <h5>{props.mail}</h5>
          </div>
        </div>
        <div class="mt-2 ">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ที่อยู่</h5>
          </div>
          <div class="grid grid-flow-row bg-slate-200 p-2 rounded-md mt-2 ">
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">บ้านเลขที่</p>
              <p>{props.homeno}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">ซอย</p>
              <p>{props.soi}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">ถนน</p>
              <p>{props.road}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">แขวง/ตำบล</p>
              <p>{props.subdistrict}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">เขต/อำเภอ</p>
              <p>{props.district}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">จังหวัด</p>
              <p>{props.province}</p>{" "}
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <p class="font-semibold">รหัสไปรษณีย์</p>
              <p>{props.zipcode}</p>{" "}
            </div>
          </div>
        </div>
        {/* seller detail */}
        {/* {bank.map((bank)=>( */}
        <>
          <div class="grid grid-cols-2 gap-7 mt-2">
            <div class="font-semibold text-[#E54E3D]">
              <h5>เลขบัญชีธนาคาร</h5>
            </div>
            <div class="">
              <h5>{props.bank.Bank_Account_Number}</h5>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-7 mt-2">
            <div class="font-semibold text-[#E54E3D]">
              <h5>ธนาคาร</h5>
            </div>
            <div class="">
              <h5>{props.bank.Bank_Account}</h5>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-7 mt-2">
            <div class="font-semibold text-[#E54E3D]">
              <h5>ชื่อบัญชี</h5>
            </div>
            <div class="">
              <h5>{props.bank.Bank_Account_Name}</h5>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Profile;
