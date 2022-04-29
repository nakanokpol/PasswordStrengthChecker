import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { global_url_token } from "./global_url_token";

//////customer
const Random = () => {
  const [random, setRandom] = useState("");
  const [success, setSuccess] = useState(false);

  const defaultValues = {
    Amount: random,
  };

  const navigate  = useNavigate()
  const toHome = useCallback(() => navigate('/', {replace: true}), [navigate]);

  const Random = () => {
    // console.log("random", {
    //   token: token,
    //   Amount: String(defaultValues.Amount)
    // })
    axios
      .post(global_url_token.url+"/randomLottery", {
        token: global_url_token.customer_token,
        Amount: String(defaultValues.Amount)
      })
      .then(function (response) {
        console.log("response random", response)
        console.log("random", {
          token: global_url_token.customer_token,
          Amount: String(defaultValues.Amount)
        })
        toHome()
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(defaultValues);
    Random();
  };

  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-10 text-3xl font-bold text-center text-red-600">
          สุ่มสลากตามจำนวนใบ
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          ใส่จำนวนสลากที่ต้องการ ด้านล่างเพื่อทำการสุ่ม
        </div>
        <div
          className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
        >
          <label className="block text-gray-darker text-lg font-bold mb-8">
            ระบบสุ่มฝาก
          </label>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                className="block text-gray-darker text-sm font-bold mb-2"
                for="count"
              >
                จำนวนสลาก
              </label>
              <label className="block text-gray-darker text-sm mb-2 text-red-600">
                *หมายเหตุ : โปรดระบุจำนวนไม่เกิน 50 ใบ
              </label>
            </div>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="count"
              type="number"
              min={1}
              max={50}
              onChange={(e) => setRandom(e.target.value)}
              value={random}
            />

            <div className="mt-7">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                  ยืนยันเพื่อเพิ่มลงตะกร้า
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Random;
