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
  const [account,setAccount] = useState(props.bank.Bank_Account);
  const [accountNum,setAccountNum] = useState(props.bank.Bank_Account_Number);
  const [accountName,setAccountName] = useState(props.bank.Bank_Account_Name);
  const [store, setStorename] = useState(props.store);





  let text = props.birthday;
  let birth = text.slice(6, 8) + "/" + text.slice(4, 6) + "/" + text.slice(0, 4);
  function putEdit_m() {
    axios
      .put(
        global_url_token.url + "/updateSellerAccount/seller/ChangeAccountInfo/",
        {
          // data: {
          token: global_url_token.seller_token,
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
          Storename:store
      
        }
      )

      .then(function (response) {
        console.log(response);
        // console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log( {
     
    //   Lastname: lastNameE,
    //   Email: mailE,
    //   Tel: numberE,
    //   Address: {
    //     HomeNo: homenoE,
    //     Soi: soiE,
    //     Road: roadE,
    //     Subdistrict: subdistrictE,
    //     District: districtE,
    //     Province: provinceE,
    //     ZipCode: zipcodeE,
    //   },
  
    // })
  }
  // console.log(store)

  function putEdit_ma() {
    axios
      .put(
        global_url_token.url + "/updateSellerAccount/seller/ChangeBankInfo",
        {
          token: global_url_token.seller_token,
          Bank_Account: account,
          Bank_Account_Number: accountNum,
          Bank_Account_Name: accountName,
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

  // console.log(lastName);
  const onsubmit = (e) => {
    e.preventDefault();
    putEdit_m();
    putEdit_ma();
  };

  return (
    <div class=" h-[530px] overflow-y-auto p-5">
      <form onSubmit={onsubmit}>
        <div class="grid grid-cols-2 mb-5">
          <h1 class="mb-5  text-2xl font-semibold ">แก้ไขข้อมูลส่วนตัว</h1>
          <div class="grid justify-self-end">
            <div class="flex ">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => props.changeTofalse()}
                type="button"
                class="text-[#E54E3D] bg-white border  border-[#E54E3D] hover:bg-white  font-medium  
        text-sm px-3 py-1.5 text-center inline-flex items-center  mr-2 mb-2 h-[35px]"
              >
                ยกเลิก
              </button>
              <button
                // onClick={onsubmit}
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
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
            value={firstNameE}
            onChange={(event) => setFirstNameE(event.target.value)}
          />
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>นามสกุล</h5>
          </div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
            value={lastNameE}
            onChange={(event) => setlastNameE(event.target.value)}
          />
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>เบอร์โทรศัพท์</h5>
          </div>
          <div class="">
            <input
              pattern="[0-9]{10}"
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
              value={numberE}
              onChange={(event) => setnumberE(event.target.value)}
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>วัน/เดือน/ปีเกิด</h5>
          </div>
          <div class="">{birth}</div>
        </div>

        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>Email</h5>
          </div>
          <div class="">
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
              value={mailE}
              onChange={(event) => setmailE(event.target.value)}
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
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker h-[40px] w-[200px]"
                value={homenoE}
                // pattern="[0-9/]"
                onChange={(event) => setHomenoE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">ซอย</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={soiE}
                onChange={(event) => setSoiE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">ถนน</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={roadE}
                onChange={(event) => setRoadE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">แขวง/ตำบล</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={subdistrictE}
                onChange={(event) => setsubDistrictE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">เขต/อำเภอ</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={districtE}
                onChange={(event) => setDistrictE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">จังหวัด</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={provinceE}
                onChange={(event) => setProvinceE(event.target.value)}
              />
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2 ">
              <p class="font-semibold">รหัสไปรษณีย์</p>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
                value={zipcodeE}
                pattern="[0-9]{5}"
                onChange={(event) => setZipcodeE(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>เลขบัญชีธนาคาร</h5>
          </div>
          <div class="">
          <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
              value={accountNum}
              onChange={(event) => setAccountNum(event.target.value)}
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ธนาคาร</h5>
          </div>
          <div class="">
          <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-7 mt-2">
          <div class="font-semibold text-[#E54E3D]">
            <h5>ชื่อบัญชี</h5>
          </div>
          <div class="">
          <input
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[200px]"
              value={accountName}
              onChange={(event) => setAccountName(event.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Editprofile;
