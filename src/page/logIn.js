import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { global_url_token } from "./global_url_token";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const toHome = useCallback(
    () => navigate("/home", { replace: true }),
    [navigate]
  );
  const toAdmin = useCallback(
    () => navigate("/cart", { replace: true }),
    [navigate]
  );
  const toSell = useCallback(
    () => navigate("/account", { replace: true }),
    [navigate]
  );

  const defaultValues = {
    Username: user,
    Password: pwd,
  };

  const Login = () => {
    axios
      .post(
        global_url_token.url+"/login",
        {
          Username: defaultValues.Username,
          Password: defaultValues.Password,
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.data.status === "200OK") {
          localStorage.setItem("token", response.data.token);
          const decoded = jwt_decode(response.data.token);
          const { username, role } = decoded;

          if (role === "customer") {
            toHome();
          } else if (role === "seller") {
            toSell();
          } else if (role === "admin") {
            toAdmin();
          }
          console.log(response);
        } else if (response.data.status === "200ER") {
          //รหัสผิดทำไร ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
          setErrMsg("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        } else {
          //ไม่เจอusername ไม่พบชื่อผู้ใช้
          setErrMsg("ไม่พบชื่อผู้ใช้");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(defaultValues);
    Login();
    setUser("");
    setPwd("");
  };

  // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100vh;
    // background-color: rgba(0, 0, 0, 0.5);
    // display: flex;
    // justify-content: center;
    // align-items: center;

  return (
    <div className="h-screen  bg-[#FFE5A3] font-prompt">
      {/* <div className="h-16"/> */}
      <div className="flex justify-center h-full" style={{alignItems:"center"}}>
        <div className="" style={{marginTop:"-2vw"}}>
          <div className="mt-6 text-3xl font-bold text-center text-[#E54E3D]">
            ยินดีต้อนรับกลับมา!
          </div>
          <div className="mt-2 text-xl font-medium text-center">
            ใส่ชื่อผู้ใช้ และ รหัสผ่าน ด้านล่างเพื่อเข้าสู่ระบบ
          </div>

          <div
            className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
          >
            <label className="block text-gray-darker text-lg font-bold mb-2">
              เข้าสู่บัญชีของคุณ
            </label>
            <p
              ref={errRef}
              class={errMsg ? "errmsg" : "offscreen"}
              className="text-red-600 text-md font-bold"
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-10 mt-2">
                <label
                  className="block text-gray-darker text-sm font-bold mb-2"
                  for="username"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="username"
                  type="text"
                  ref={userRef}
                  placeholder="Username"
                  autoComplete="off"
                  pattern="[A-Za-z0-9]{4,20}"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  reduired
                />
              </div>
              <div className="mb-10">
                <label
                  className="block text-gray-daker text-sm font-bold mb-2"
                  for="password"
                >
                  รหัสผ่าน
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>

              <div className="mb-7">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#E54E3D] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>

            <div className="mb-2 text-center">
              ยังไม่มีบัญชีผู้ใช้ ?{" "}
              <span className="cursor-pointer text-[#E54E3D]">
                <a href="/register">สมัครสมาชิก</a>
              </span>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
