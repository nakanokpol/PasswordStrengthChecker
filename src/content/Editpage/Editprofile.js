import React, { useState } from "react";
import axios from "axios";
import { global_url_token } from "../../page/global_url_token";

function Editprofile(props) {
  const [firstNameE, setFirstNameE] = useState(props.firstName);
  const [lastNameE, setlastNameE] = useState(props.lastName);
  const [numberE, setnumberE] = useState(props.number);
  const [mailE, setmailE] = useState(props.mail);
  const [homenoE, setHomenoE] = useState(props.homeno);
  const [subdistrictE, setsubDistrictE] = useState(props.subdistrict);
  const [districtE, setDistrictE] = useState(props.district);
  const [roadE, setRoadE] = useState(props.road);
  const [zipcodeE, setZipcodeE] = useState(props.zipcode);
  const [provinceE, setProvinceE] = useState(props.province);
  const [soiE, setSoiE] = useState(props.soi);
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMDQ0NzU3LCJleHAiOjE2NTEwNTU1NTd9.mJS7Hk7UCCpq2RIXv3-sdZPOdvLd8KiQp3pqyoSChmQ";
  // const [editprofile, setEditprofile] = useState();

  function putEdit() {
    axios
      .put(
        global_url_token.url+"/updateCustomerAccount/customer/ChangeAccountInfo/",
        {
          // data: {
          token: global_url_token.customer_token,
          Firstname: firstNameE,
          Lastname: lastNameE,
          Email: mailE,
          Tel: numberE,
          Address: {
            HomeNo: homenoE,
            Soi: soiE,
            Road: roadE,
            Subdistrict: subdistrictE,
            District: districtE,
            Province: provinceE,
            ZipCode: zipcodeE,
          },
          // },
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

  // console.log(firstName);
  const onsubmit = (e) => {
    e.preventDefault();
    putEdit();
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <div class="grid grid-cols-2 mb-5 ">
          <h1 class="mb-5  text-2xl font-semibold ">แก้ไขข้อมูลส่วนตัว</h1>
          <div class="grid justify-self-end ">
            <div class="flex">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => 
                  props.changeTofalse()
                }
                type="button"
                class="text-[#E54E3D] bg-white border  border-[#E54E3D] hover:bg-white  font-medium  
        text-sm px-3 py-1.5 text-center inline-flex items-center  mr-2 mb-2 h-[35px]"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                class="text-white bg-[#E54E3D] hover:bg-[#E54E3D]/80 font-medium 
        text-sm px-4 py-2 text-center inline-flex items-center   mb-2 h-[35px]"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>

       <div class="grid grid-cols-2 gap-7">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ชื่อ</h5>
          </div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            value={firstNameE}
            onChange={(event) => setFirstNameE(event.target.value)}
            required="required"
          />
        </div>
         <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>นามสกุล</h5>
          </div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            value={lastNameE}
            onChange={(event) => setlastNameE(event.target.value)}
            required="required"
          />
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>เบอร์โทรศัพท์</h5>
          </div>
          <div class="">
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker "
              value={numberE}
              pattern="[0-9]{10}"
              onChange={(event) => setnumberE(event.target.value)}
              required="required"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>วัน/เดือน/ปีเกิด</h5>
          </div>
          <div class="">{props.birthday}</div>
        </div>

        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>Email</h5>
          </div>
          <div class="">
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
              value={mailE}
              type="email"
              onChange={(event) => setmailE(event.target.value)}
              required="required"
            />
          </div>
        </div>

        <div class=" mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ที่อยู่</h5>
          </div>

          <div class="grid grid-flow-row  overflow-x-auto h-[150px] bg-slate-200 p-2 rounded-md">
            <div class="grid grid-cols-2 gap-2 mt-2  ">
              <p class="font-semibold">บ้านเลขที่</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker h-[40px]"
                value={homenoE}
                // pattern="[0-9/]"
                onChange={(event) => setHomenoE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">ซอย</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={soiE}
                onChange={(event) => setSoiE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">ถนน</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={roadE}
                onChange={(event) => setRoadE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">แขวง/ตำบล</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={subdistrictE}
                onChange={(event) => setsubDistrictE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">เขต/อำเภอ</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={districtE}
                onChange={(event) => setDistrictE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">จังหวัด</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={provinceE}
                onChange={(event) => setProvinceE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">รหัสไปรษณีย์</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                value={zipcodeE}
                pattern="[0-9]{5}"
                onChange={(event) => setZipcodeE(event.target.value)}
              />
            </div>
          </div>
        </div>
      </form> 
    </div>
  );
}

export default Editprofile;
