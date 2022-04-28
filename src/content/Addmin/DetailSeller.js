import React, { useState } from "react";
import axios from "axios";
function DetailSeller({ setModalOn, data, setApprove, approve, id, setState }) {
  const [text, setText] = useState(null);
  
  function putSeller(e) {
    axios.put("https://cors-anywhere.herokuapp.com/http://a1f7-2403-6200-88a4-54b-eda0-294a-e446-b93.ngrok.io/updateSellerIdentity",
        {data:{
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluMTAxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjUxMTA1MDc0LCJleHAiOjE2NTExNDEwNzR9.Jqzo0DwN1452zZkmEaF4KwbN9-L1ek7om5M1ThAxhPo",
          approve: e,
          sellerID: id
        }})
      .then(function (response) {
        console.log("pol0",response)
        console.log("pol1",{data:{
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluMTAxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjUxMTA1MDc0LCJleHAiOjE2NTExNDEwNzR9.Jqzo0DwN1452zZkmEaF4KwbN9-L1ek7om5M1ThAxhPo",
          approve: e,
          sellerID: id
        }})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleOKClick = () => {
    // e.preventDefault();
    putSeller("yes")
    setModalOn(false);
    setApprove([
      ...approve,
      {
        approve: "yes",
        comment: `${text}`,
        sellerID: id
      }
    ]);
  };
  const handleCancelClick = () => {
    // e.preventDefault();
    putSeller("No")
    setModalOn(false);
    setApprove([
      ...approve,
      {
        approve: "no",
        comment: `${text}`,
        sellerID: id
      }
    ]);
  };

  return (
    <div class="    fixed inset-0 z-50   ">
      <div class="flex h-screen justify-center items-center ">
        <div class="relative rounded-lg shadow bg-[#FFF8E6] w-[550px] border">
          {/* Modal header */}
          <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
              รายละเอียด {id}
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
                    <h5>ชื่อ</h5>
                  </div>
                  <div class="">
                    <h5>{p.Firstname}</h5>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>นามสกุล</h5>
                  </div>
                  <div class="">
                    <h5>{p.Lastname}</h5>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>เบอร์โทรศัพท์</h5>
                  </div>
                  <div class="">
                    <h5>{p.Tel}</h5>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>วัน/เดือน/ปีเกิด</h5>
                  </div>
                  <div class="">
                    <h5>{p.Birthday}</h5>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>Email</h5>
                  </div>
                  <div class="">
                    <h5>{p.Email}</h5>
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
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>ชื่อร้าน</h5>
                  </div>
                  <div class="">
                    <h5>{p.Storename}</h5>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3  mt-2">
                  <div class="font-semibold text-[#E54E3D]">
                    <h5>ใบอนุญาต</h5>
                  </div>
                  <div class="">
                    {/* <h1>{p.URLImage}</h1> */}
                    <img src={`${p.URLImage}`} />
                  </div>
                </div>
              </div>
            </>
          ))}
          {/* <!-- Modal footer --> */}

          <div
            class={` ${
              setState(id)[0] == "1"
                ? "hidden"
                : setState(id)[0] == "0"
                ? "hidden"
                : "p-6 space-x-2 rounded-b border-t border-[#E54E3D]"
            }`}
            first-lette
          >
            <div class="flex p-2">
              <div class="font-semibold text-[#E54E3D]">
                <h5>หมายเหตุ</h5>
              </div>
              <div class=" pl-2">
                <input
                  onChange={(event) => setText(event.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-[#E54E3D] hover:bg-[#f93019]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => handleOKClick()}
            >
              อนุมัติ
            </button>

            <button
              type="submit"
              class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  "
              onClick={() => {
                handleCancelClick();
              }}
            >
              ไม่อนุมัติ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSeller;
