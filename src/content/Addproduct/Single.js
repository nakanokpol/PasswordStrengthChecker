import React, { useState, useEffect } from "react";
// import validationadd from "./Validationadd";
import axios from "axios";
import { global_url_token } from "../../page/global_url_token";

function Single() {
  const d = new Date();
  const month = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  var m = month[d.getMonth()];
  const y = d.getFullYear() + 543;
  var day;
  if (d.getDate() > 16) {
    day = 1;
    m = month[d.getMonth() + 1];
  } else {
    day = 16;
  }
  const dDate = day + " " + m + " " + y;

  const [lottery, setLottery] = useState(() => {
    const saveLotto = localStorage.getItem("lottery");

    if (saveLotto) {
      return JSON.parse(saveLotto);
    } else {
      return [];
    }
  });

  const [number, setNumber] = useState("");
  const [draw, setDraw] = useState("");
  const [pack, setPack] = useState("");
  const [drawDate, setDrawDate] = useState("");
  const [validate, setValid] = useState(true);

  useEffect(() => {
    localStorage.setItem("lottery", JSON.stringify(lottery));
  }, [lottery]);

  function handleInput(e) {
    setNumber(e.target.value);
  }

  function putPayment() {
    axios
      .post(global_url_token.url+"/addSingleLottery", {
        token: global_url_token.seller_token,
        lotteryList: [
          {
            Number:  number.trim(),
            Lot: pack.trim(),           
            Draw:  draw.trim(),
            DrawDate: drawDate,
          },
        ],
      })
      .then(function (response) {
        console.log(response);
        // console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    putPayment() 
    if (number !== "" && draw !== "" && pack !== "" && drawDate !== "") {
      setValid(true);
      setLottery([
        ...lottery,
        {
          id: lottery.length + 1,
          number: number.trim(),
          pack: pack.trim(),
          draw: draw.trim(),
          drawDate: drawDate,
        },
      ]);
    } else {
      setValid(false);
    }

    setNumber("");
    setDraw("");
    setPack("");
    setDrawDate("");
  }
  // console.log(drawDate)
  function handleDelete(id) {
    const removeItem = lottery.filter((lotto) => {
      return lotto.id !== id;
    });

    setLottery(removeItem);
  }

  console.log(lottery);
  return (
    <div>
      {/* <h1>{drawDate}</h1> */}
      <div class="grid justify-items-center ">
        <div class="flex justify-center bg-[#FFF8E6]  m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[535px] lg:w-[430px] sm:w-[400px]  min-w-[380px]">
          <form onSubmit={handleFormSubmit}>
            <div class="flex justify-between space-x-2 text-xs xl:flex-row  sm:flex-col ">
              <div class="flex justify-between space-x-2 ">
                <div>
                  <div class="flex justify-between">
                    <h5 class="pl-2 p-2">เลขสลาก</h5>
                    <input
                      maxLength={6}
                      placeholder="123456"
                      value={number}
                      type="text"
                      pattern="[0-9]{6}"
                      onChange={handleInput}
                      class="pl-2 p-2 rounded-md w-[60px] text-center"
                      required
                    />
                  </div>
                </div>
                <div class="flex justify-between">
                  <h5 class="pl-2 p-2">วันที่</h5>
                  <select
                    class="pl-2 p-2 bg-white w-[135px]  text-center"
                    value={drawDate}
                    onChange={(event) => setDrawDate(event.target.value)}
                    required
                  >
                    <option hidden>--เลือกงวดวันที--</option>
                    <option value={`${dDate}`}>{dDate}</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between space-x-2 xl:my-0  sm:my-2">
                <div class="flex justify-between">
                  <h5 class="pl-2 p-2">งวดที่</h5>
                  <input
                    placeholder="12"
                    maxLength={2}
                    type="text"
                    pattern="[0-9]{2}"
                    value={draw}
                    onChange={(event) => setDraw(event.target.value)}
                    class="pl-2 p-2 rounded-md w-[30px] text-center"
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <h5 class="pl-2 p-2">ชุดที่</h5>
                  <input
                    placeholder="12"
                    maxLength={2}
                    type="text"
                    pattern="[0-9]{2}"
                    value={pack}
                    onChange={(event) => setPack(event.target.value)}
                    class="pl-2 p-2 rounded-md w-[30px] text-center"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                class="bg-[#E54E3D] hover:bg-[#ff2020] rounded-md text-white  p-2 "
              >
                เพิ่ม
              </button>
            </div>
          </form>
        </div>
        {validate ? (
          ""
        ) : (
          <span class="text-xs text-red-500">*กรุณากรอกข้อมูลให้ครบถ้วน</span>
        )}

        <div class="overflow-x-auto xl:h-[380px] sm:h-[300px]">
          {lottery.map((lotto) => (
            <div
              class="bg-white flex justify-center  m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[530px] lg:w-[430px] sm:w-[400px]  min-w-[380px]"
              key={lotto.id}
            >
              <div class="flex justify-between space-x-2 text-xs xl:flex-row  sm:flex-col ">
                <div class="flex justify-between space-x-2 xl:flex-row  sm:flex-col">
                  <div class="flex justify-between space-x-2 xl:my-0  sm:my-2">
                    <div class="flex justify-between">
                      <h5 class="pl-2 p-2">เลขสลาก</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[57px] rounded-md text-center">
                        {lotto.number}
                      </h5>
                    </div>

                    <div class="flex justify-between">
                      <h5 class="pl-2 p-2">วันที่</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[130px] rounded-md text-center ">
                        {lotto.drawDate}
                      </h5>
                    </div>
                  </div>

                  <div class="flex justify-between space-x-2 xl:my-0  sm:my-2">
                    <div class="flex justify-between">
                      <h5 class="pl-2 p-2">งวดที่</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[30px] rounded-md text-center">
                        {lotto.draw}
                      </h5>
                    </div>

                    <div class="flex justify-between">
                      <h5 class="pl-2 p-2">ชุดที่</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[30px] rounded-md text-center">
                        {lotto.pack}
                      </h5>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(lotto.id)}
                  class="font-prompt text-sm rounded-md p-2 border border-[#ee6657] text-[#ee6657] hover:bg-[#ff2020] hover:text-white"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Single;
