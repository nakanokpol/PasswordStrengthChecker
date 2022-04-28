import React, { useState, useEffect,useCallback } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [tel, setTel] = useState("");
  const [homeNo, setHomeNo] = useState("");
  const [soi, setSoi] = useState("");
  const [road, setRoad] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [idCard, setIDCard] = useState("");
  const [urlImage, seturlImage] = useState("");
  const [role, setRole] = useState("");
  const [wantToBeSeller, setWantToBeSeller] = useState("");

  const [comfirmPassword, setConfirmPassword] = useState("");
  let beSell = wantToBeSeller === true ? "Yes" : "No";
  let addRole = beSell === "Yes" ? "seller" : "customer";

  const content =
    beSell === "Yes" ? (
      <div class="m-2">
        <label class="inline-block mb-2 text-gray-darker">
          บัตรผู้ซื้อ-จองล่วงหน้าสลากกินแบ่งรัฐบาล
        </label>
        <input
          type="file"
          value={urlImage}
          onChange={(e) => seturlImage(e.target.value)}
        />
      </div>
    ) : null;

  let defaultValues = {
    Title: title,
    Firstname: firstname,
    Lastname: lastname,
    Username: UserName,
    Password: Password,
    Email: email,
    Birthday: birthday,
    Tel: tel,
    Address: {
      HomeNo: homeNo,
      Soi: soi,
      Road: road,
      Subdistrict: subDistrict,
      District: district,
      Province: province,
      ZipCode: zipCode,
    },
    IDCard: idCard,
    URLImage: urlImage,
    Role: addRole,
    wantToBeSeller: beSell,
  };
  const Register = () => {
    axios
      .post("http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io/register", {
        Title: defaultValues.Title,
        Firstname: defaultValues.Firstname,
        Lastname: defaultValues.Lastname,
        Username: defaultValues.Username,
        Password: defaultValues.Password,
        Email: defaultValues.Email,
        Birthday: defaultValues.Birthday,
        Tel: defaultValues.Tel,
        Address: {
          HomeNo: defaultValues.Address.HomeNo,
          Soi: defaultValues.Address.Soi,
          Road: defaultValues.Address.Road,
          Subdistrict: defaultValues.Address.Subdistrict,
          District: defaultValues.Address.District,
          Province: defaultValues.Address.Province,
          ZipCode: defaultValues.Address.ZipCode,
        },
        IDCard: defaultValues.IDCard,
        URLImage: defaultValues.URLImage,
        Role: defaultValues.Role,
        wantToBeSeller: defaultValues.wantToBeSeller,
      })
      .then(function (response) {
        if (response.data.status === "200OK") {
          localStorage.setItem("token", response.data.token);
          const decoded = jwt_decode(response.data.token);
          const { username, role } = decoded;
          console.log(response);
        } else if (response.data.status === "200US") {
          // errors["UserName"] = "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว";
        } else if (response.data.status === "200EM") {
          // errors["Email"] = "อีเมลนี้ถูกใช้งานแล้ว";
        } else if (response.data.status === "200UE") {
          // errors["UserName"] = "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว";
          // errors["Email"] = "อีเมลนี้ถูกใช้งานแล้ว";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  const navigate  = useNavigate()
  const toAccountMs = useCallback(() => navigate('/accountmerchant', {replace: true}), [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(defaultValues));
    setIsSubmit(true);
    Register();

    if(!formErrors){
      toAccountMs()
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // setRole(addRole);
      console.log(defaultValues);
    }
  }, []);

  const willSetConfirmPassword = (e) => {
    e.preventDefault()
    setConfirmPassword(e.target.value)
  }

  const validate = (values) => {
    console.log(values);
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const thai_regex = /^[ก-๏]{0,31}$/;
    if (values.Title === undefined) {
      errors["Title"] = "กรุณาเลือกคำนำหน้าชื่อ";
    }
    if (firstname === "") {
      errors["Firstname"] = "กรุณากรอกชื่อ";
    } else if (!thai_regex.test(firstname)) {
      errors["Firstname"] = "กรุณากรอกเป็นภาษาไทย";
    }

    if (lastname === "") {
      errors["Lastname"] = "กรุณากรอกนามสกุล";
    } else if (!thai_regex.test(lastname)) {
      errors["Lastname"] = "กรุณากรอกเป็นภาษาไทย";
    }

    if (idCard === undefined) {
      errors["IDCard"] = "กรุณากรอกเลขบัตรประชาชน";
    } else if (idCard.length !== 13) {
      errors["IDCard"] = "กรุณากรอกให้ครบ 13 หลัก";
    }

    if (birthday === undefined) {
      errors["Birthday"] = "กรุณาเลือกวัน เดือน ปีเกิด";
    }

    if (email === undefined) {
      errors["Email"] = "กรุณากรอกอีเมล";
    } else if (!regex.test(email)) {
      errors["Email"] = "ไม่ตรงตามรูปแบบ";
    }

    if (UserName === undefined) {
      errors["UserName"] = "กรุณากรอกชื่อผู้ใช้";
    } else if (UserName.length < 4) {
      errors["UserName"] = "ชื่อผู้ใช้ต้องมี 4 ตัวอักษรขึ้นไป";
    } else if (UserName.length > 24) {
      errors["UserName"] = "ชื่อผู้ใช้ต้องมีไม่เกิน 24 ตัวอักษร";
    }

    if (Password === undefined) {
      errors["Password"] = "กรุณากรอกรหัสผ่าน";
    } else if (Password.length < 8) {
      errors["Password"] = "รหัสผ่านต้องมี 8 ตัวอักษรขึ้นไป";
    } else if (Password.length > 24) {
      errors["Password"] = "รหัสผ่านต้องมีไม่เกิน 24 ตัวอักษร";
    }
    if (!tel === undefined) {
      errors["Tel"] = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (tel.length !== 10) {
      errors["Tel"] = "กรุณากรอกเบอร์โทรศัพท์ใหครบ 10 หลัก";
    }

    if (comfirmPassword !== values.Password) {
      errors["comfirmPassword"] = "รหัสผ่านไม่ตรงกัน";
      console.log("password checking ",comfirmPassword, values.Password)
    }
    console.log("error -> ", errors);
    return errors;
  };

  return (
    <div className="h-full flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-6 text-3xl font-bold text-center text-[#E54E3D]">
          ยินดีต้อนรับ!
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          กรอกข้อมูลด้านล่างเพื่อเข้าร่วมเป็นสมาชิก
        </div>
        <div className="flex flex-col p-8 m-8 bg-white w-[600px] sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl">
          <h1 className="text-xl font-bold mb-2">สร้างบัญชีของคุณ</h1>
          <h2 className="text-lg mb-4 text-[#E54E3D]">ข้อมูลส่วนตัว</h2>
          <form onSubmit={handleSubmit}>
            <label
              className="block text-gray-darker text-md font-bold mb-2"
              htmlFor="Title"
            >
              คำนำหน้าชื่อ
            </label>
            <select
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              name="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            >
              <option value="">เลือกคำนำหน้าชื่อ</option>
              <option value="Mr">นาย</option>
              <option value="Mrs">นาง</option>
              <option value="Miss">นางสาว</option>
            </select>
            <p className="text-red-600">{formErrors.Title}</p>
            <div className=" flex-col grid grid-cols-2 gap-9">
              <div className="flex flex-col">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  htmlFor="Firstname"
                >
                  ขื่อ
                </label>
                <input
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  name="Firstname"
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                ></input>
                <p className="text-red-600">{formErrors.Firstname}</p>
              </div>

              <div className="flex flex-col">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  htmlFor="LastName"
                >
                  นามสกุล
                </label>
                <input
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  name="Lastname"
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                ></input>
                <p className="text-red-600">{formErrors.Lastname}</p>
              </div>
            </div>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="IDCard"
            >
              เลขประจำตัวประชาชน
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="IDCard"
              type="text"
              placeholder="Personal ID"
              maxLength={13}
              value={idCard}
              onChange={(event) => setIDCard(event.target.value)}
            ></input>
            <p className="text-red-600">{formErrors.IDCard}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Birthday"
            >
              วัน-เดือน-ปีเกิด
            </label>
            <input
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              name="Birthday"
              type="date"
              placeholder="Select Birthday"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
            <p className="text-red-600">{formErrors.Birthday}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Email"
            >
              อีเมล
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="Email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <p className="text-red-600">{formErrors.Email}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="UserName"
            >
              ชื่อผู้ใช้
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="UserName"
              type="text"
              placeholder="UserName"
              value={UserName}
              onChange={(event) => setUserName(event.target.value)}
            ></input>
            <p className="text-red-600">{formErrors.UserName}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Password"
            >
              รหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="Password"
              type="Password"
              placeholder="Password"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <p className="text-red-600">{formErrors.Password}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="comfirmPassword"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={comfirmPassword} ////////////////////////////
              onChange={willSetConfirmPassword}
            ></input>
            <p className="text-red-600">{formErrors.comfirmPassword}</p>
            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Tel"
            >
              เบอร์โทรศัพท์
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="Tel"
              type="text"
              placeholder="Phone Number"
              maxLength={10}
              value={tel}
              onChange={(event) => setTel(event.target.value)}
            ></input>
            <p className="text-red-600">{formErrors.Tel}</p>
            <h2 className="text-lg mt-8 mb-4 text-[#E54E3D]">ที่อยู่</h2>
            <p className="text-red-600">{formErrors.homeNo}</p>
            <div className="grid grid-cols-6 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                htmlFor="HomeNo"
              >
                บ้านเลขที่
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="HomeNo"
                type="text"
                placeholder="No."
                value={homeNo}
                onChange={(event) => setHomeNo(event.target.value)}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="Soi"
              >
                ซอย
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Soi"
                type="text"
                placeholder="Soi"
                value={soi}
                onChange={(event) => setSoi(event.target.value)}
              ></input>
              {/* <p className="text-red-600">{formErrors.Address.Soi}</p> */}
              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="Road"
              >
                ถนน
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Road"
                type="text"
                placeholder="Road"
                value={road}
                onChange={(event) => setRoad(event.target.value)}
              ></input>
              {/* <p className="text-red-600">{formErrors.Address.Road}</p> */}
            </div>
            <div className="grid grid-cols-4 mt-4 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                htmlFor="Subdistrict"
              >
                แขวง/ตำบล
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Subdistrict"
                type="text"
                placeholder="Sub District"
                value={subDistrict}
                onChange={(event) => setSubDistrict(event.target.value)}
              ></input>
              {/* <p className="text-red-600">{formErrors.Address.Subdistrict}</p> */}
              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="District"
              >
                เขต/อำเภอ
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="District"
                type="text"
                placeholder="District"
                value={district}
                onChange={(event) => setDistrict(event.target.value)}
              ></input>
            </div>
            {/* <p className="text-red-600">{formErrors.Address.District}</p> */}
            <div className="grid grid-cols-4 mt-4 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="Province"
              >
                จังหวัด
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Province"
                type="text"
                placeholder="Province"
                value={province}
                onChange={(event) => setProvince(event.target.value)}
              ></input>
              {/* <p className="text-red-600">{formErrors.Address.Province}</p> */}
              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="ZipCode"
              >
                รหัสไปรษณีย์
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="ZipCode"
                type="text"
                placeholder="Zip Code"
                maxLength={5}
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
              ></input>
              {/* <p className="text-red-600">{formErrors.Address.ZipCode}</p> */}
            </div>
            <div className="block">
              <div className="mt-5">
                <label className="inline-flex items-center">
                  <input
                    name="wantToBeSeller"
                    type="checkbox"
                    class="w-6 h-6 rounded"
                    checked={wantToBeSeller}
                    onChange={(event) =>
                      setWantToBeSeller(event.target.checked)
                    }
                  />
                  <span className="text-gray-darker text-md font-bold ml-2">
                    ต้องการเป็นผู้ขาย
                  </span>
                </label>
              </div>
            </div>

            {content}

            <div className="mt-4 mb-7">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#E54E3D] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                ยืนยัน
              </button>
            </div>
          </form>

          <Link to="/">
            <div className="mb-7">
              <button className="w-full p-10 py-2 px-4 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300">
                ยกเลิก และ กลับสู่หน้าหลัก
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
