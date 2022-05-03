import React from "react";
import { useState, useEffect } from "react";
import Addproduct from "../content/Addproduct";
import Checkorder_m from "../content/Checkorder_m";
import Editprofilemerchant from "../content/Editpage/Editprofilemerchant";
import Header from "../content/component/Header";
import Pic from "../Assets/5fb952383d4b9b0cc0fd7d2e_800x0xcover_3aaaqsST.jpg";
import ProductStore from "../content/ProductStore";
import Profile_m from "../content/Profile_m";
// import Tabadd from "../content/Tabadd";
import axios from "axios";
import { data } from "autoprefixer";
import { global_url_token } from "./global_url_token";

function Account_merchant() {
  const [toggleState, setToggleState] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState();
  const [birthday, setBirthday] = useState("");
  const [lastName, setlastName] = useState();
  const [number, setnumber] = useState();
  const [mail, setmail] = useState();
  const [homeno, setHomeno] = useState();
  const [soi, setSoi] = useState();
  const [subdistrict, setsubDistrict] = useState();
  const [district, setDistrict] = useState();
  const [road, setRoad] = useState();
  const [zipcode, setZipcode] = useState();
  const [province, setProvince] = useState();
  const [store, setStorename] = useState();
  const [bankInfo, setBankinfo] = useState([]);
  const [orderCheck, setOrderCheck] = useState([]);

  // const [tabState, setTabState] = useState(true);
  // const Tab =false;
  const changeTofalse = () => {
    setEditMode(false);
  };

  function getProfile_m() {
    axios
      .get(
        global_url_token.url + "/getSellerAccount/" +
          global_url_token.seller_token
      )

      .then(function (response) {
        // console.log(response.data.customerAccount.Address.Road);
        if(response.data.status=="200OK"){
        setFirstName(response.data.sellerAccount.Firstname);
        setlastName(response.data.sellerAccount.Lastname);
        setnumber(response.data.sellerAccount.Tel);
        setBirthday(response.data.sellerAccount.Birthday);
        setmail(response.data.sellerAccount.Email);
        setHomeno(response.data.sellerAccount.Address.HomeNo);
        setSoi(response.data.sellerAccount.Address.Soi);
        setRoad(response.data.sellerAccount.Address.Road);
        setsubDistrict(response.data.sellerAccount.Address.Subdistrict);
        setDistrict(response.data.sellerAccount.Address.District);
        setProvince(response.data.sellerAccount.Address.Province);
        setZipcode(response.data.sellerAccount.Address.ZipCode);
        setStorename(response.data.sellerAccount.Storename);
      }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getbank_m() {
    axios
      .get(
        global_url_token.url+"/getSellerBank/" +
          global_url_token.seller_token
      )

      .then(function (response) {
        console.log(response.data);
        console.log("data", response.data.sellerBank);
        if(response.data.status=="200OK"){
        setBankinfo(response.data.sellerBank);}
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getOrder_m() {
    axios
      .get(
        global_url_token.url+"/getSellerCheckOrder/" +
          global_url_token.seller_token
      )

      .then(function (response) {
        console.log(response.data);
        if (response.status == "200OK") {
          setOrderCheck(response.data.order);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(editMode);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  useEffect(() => {
    getProfile_m();
    getbank_m();
    getOrder_m();
  }, []);

  console.log("order", orderCheck);

  return (
    <div className="h-screen bg-[#FFE5A3]">
      <div>
      <div class="h-16"/>
        <div class="flex justify-center font-prompt h-max">
          <div
            class="flex flex-col p-8 m-8 bg-white min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%] h-[100%] shadow-xl rounded-xl"
          >
            <h1 class="text-xl text-[#E54E3D] font-black ml-6">บัญชีของคุณ</h1>
            <Header
              name={store}
              undername={province}
              picture={Pic}
            />
            <div class="flex">
              <div class=" min-w-[160px] h-[590px] border-r">
                <div
                  class={`mt-4  cursor-pointer ${
                    toggleState === 1
                      ? "bg-red-100 border-l-4 border-[#E54E3D]"
                      : ""
                  } hover:bg-red-100 h-[40px]`}
                  onClick={() => toggleTab(1)}
                >
                  <p class="pt-2 pl-4">ข้อมูลส่วนตัว</p>
                </div>

                <div
                  class={`cursor-pointer ${
                    toggleState === 2
                      ? "bg-red-100 border-l-4 border-[#E54E3D]"
                      : ""
                  } hover:bg-red-100 h-[40px]`}
                  onClick={() => {
                    toggleTab(2);
                    changeTofalse();
                  }}
                >
                  <p class="pt-2 pl-4">ตรวจสอบคำสั่งซื้อ</p>
                </div>

                <div
                  class={`cursor-pointer ${
                    toggleState === 3
                      ? "bg-red-100 border-l-4 border-[#E54E3D]"
                      : ""
                  } hover:bg-red-100 h-[40px]`}
                  onClick={() => {
                    toggleTab(3);
                    changeTofalse();
                  }}
                >
                  <p class="pt-2 pl-4">เพิ่มสินค้า</p>
                </div>

                <div
                  class={`cursor-pointer ${
                    toggleState === 4
                      ? "bg-red-100 border-l-4 border-[#E54E3D]"
                      : ""
                  } hover:bg-red-100 h-[40px]`}
                  onClick={() => {
                    toggleTab(4);
                    changeTofalse();
                  }}
                >
                  <p class="pt-2 pl-4">สินค้าภายในร้าน</p>
                </div>
              </div>
              <div class="p-7" style={{width:"100%"}}>
                <div class={toggleState === 1 ? "flex" : "hidden"}>
                  <div className="" style={{width:"100%"}}>
                    {editMode ? (
                      <Editprofilemerchant
                        firstName={firstName}
                        lastName={lastName}
                        number={number}
                        birthday={birthday}
                        mail={mail}
                        homeno={homeno}
                        soi={soi}
                        subdistrict={subdistrict}
                        district={district}
                        province={province}
                        zipcode={zipcode}
                        road={road}
                        changeTofalse={changeTofalse}
                        token={global_url_token.seller_token}
                        bank={bankInfo}
                        store={store}
                      />
                    ) : (
                      <Profile_m
                        firstName={firstName}
                        lastName={lastName}
                        number={number}
                        birthday={birthday}
                        mail={mail}
                        homeno={homeno}
                        soi={soi}
                        subdistrict={subdistrict}
                        district={district}
                        province={province}
                        zipcode={zipcode}
                        road={road}
                        bank={bankInfo}
                        store={store}
                      />
                    )}
                  </div>

                  <div
                    class={editMode === false ? "" : "hidden"}
                    style={{ cursor: "pointer" }}
                    onClick={() => setEditMode(true)}
                  >
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
                  <Checkorder_m dataOrder={orderCheck} />
                </div>

                <div class={toggleState === 3 ? "flex-initial	" : "hidden"}>
                  <Addproduct />
                </div>

                <div class={toggleState === 4 ? "" : "hidden"}>
                  <ProductStore token={global_url_token.seller_token} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account_merchant;
