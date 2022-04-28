import React, { useState, useEffect } from "react";
import Inputpack from "../component/Inputpack";

function Pack() {
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
    const saveLotto = localStorage.getItem("lotteryPack");

    if (saveLotto) {
      return JSON.parse(saveLotto);
    } else {
      return [];
    }
  });
  const [number, setNumber] = useState("");
  const [drawDate, setDrawDate] = useState("");
  const [amount, setAmount] = useState("");
  var a = Number(amount);
  const [validate, setValid] = useState(true);
  const [lot, setLot] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
  });
  const [draw, setDraw] = useState({
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    d5: "",
  });
  // const [pack, setPack] =  useState([]);
  const setPipe = (test, a) => {
    let pipe = "";
    for (const [key, value] of Object.entries(test)) {
      if (parseInt(key[1]) != a) {
        pipe += value + "|";
      } else {
        pipe += value;
        return pipe;
      }
    }
  };
  const inpack_Set = [
    {
      id: 1,
      name: "p1",
      placeholder: "ชุดที่ 1",
      label: "ชุดที่",
    },
    {
      id: 2,
      name: "p2",
      placeholder: "ชุดที่ 2",
      label: "ชุดที่",
    },
    {
      id: 3,
      name: "p3",
      placeholder: "ชุดที่ 3",
      label: "ชุดที่",
    },
    {
      id: 4,
      name: "p4",
      placeholder: "ชุดที่ 4",
      label: "ชุดที่",
    },
    {
      id: 5,
      name: "p5",
      placeholder: "ชุดที่ 5",
      label: "ชุดที่",
    },
  ];
  const inpack_Draw = [
    {
      id: 1,
      name: "d1",
      placeholder: "งวดที่ 1",
      label: "งวดที่",
    },
    {
      id: 2,
      name: "d2",
      placeholder: "งวดที่ 2",
      label: "งวดที่",
    },
    {
      id: 3,
      name: "d3",
      placeholder: "งวดที่ 3",
      label: "งวดที่",
    },
    {
      id: 4,
      name: "d4",
      placeholder: "งวดที่ 4",
      label: "งวดที่",
    },
    {
      id: 5,
      name: "d5",
      placeholder: "งวดที่ 5",
      label: "งวดที่",
    },
  ];

  

  useEffect(() => {
    localStorage.setItem("lotteryPacK", JSON.stringify(lottery));
  }, [lottery]);

  function handleInput(e) {
    setNumber(e.target.value);
  }

  const onChange = async (e) => {
    setLot({ ...lot, [e.target.name]: e.target.value });
  };

  const onChangeD = async (e) => {
    setDraw({ ...draw, [e.target.name]: e.target.value });
  };

  console.log(draw);

  console.log(lot);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (number !== "" && drawDate !== "") {
      setValid(true);
      setLottery([
        ...lottery,
        {
          id: lottery.length + 1,
          number: number.trim(),
          lot: setPipe(lot, a),
          draw:setPipe(draw, a),
          drawDate: drawDate,
          amount:amount
        },
      ]);
    } else {
      setValid(false);
    }

    setNumber("");
    setDrawDate("");
    setLot({
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
    });
    setDraw({
      d1: "",
      d2: "",
      d3: "",
      d4: "",
      d5: "",
    });
    setAmount("");
  }

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
      <div class="grid justify-items-center">
        <div class="flex justify-center bg-[#FFF8E6]  m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[535px] lg:w-[430px] sm:w-[400px]  min-w-[400px]">
          <form onSubmit={handleFormSubmit}>
            <div class="flex justify-between space-x-2 text-xs  flex-col ">
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
                    class="pl-2 p-2 bg-white xl:w-[135px] w-[60px]   text-center"
                    value={drawDate}
                    onChange={(event) => setDrawDate(event.target.value)}
                    required
                  >
                    <option class=" ">--เลือกงวดวันที--</option>
                    <option value={`${dDate}`}>{dDate}</option>
                  </select>
                </div>

                <div class="flex justify-between">
                  <h5 class="pl-2 p-2">จำนวนใบ</h5>
                  <select
                    class="pl-2 p-2 bg-white xl:w-[135px] w-[60px]  text-center"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                  >
                    <option hidden>--เลือกจำนวนใบ--</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 p-2  xl:my-0  sm:my-2 ">
                <div >
                  {inpack_Set.slice(0, a).map((input) => (
                    <Inputpack
                      key={input.name}
                      {...input}
                      value={lot[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </div>
                <div>
                  {inpack_Draw.slice(0, a).map((input) => (
                     <Inputpack
                     key={input.name}
                     {...input}
                     value={draw[input.name]}
                     onChange={onChangeD}
                   />
                  ))}
                </div>

                {/* { [...Array(a)].map((e, i) => 
                 <div class="flex justify-between my-3" id={`${i}`}>
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
                 {i}
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
            
                                 
                  )}  */}
              </div>

              <button
                type="submit"
                class="bg-[#E54E3D] hover:bg-[#ff2020] rounded-md text-white  p-2 mt- "
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

        <div class={`overflow-x-auto ${a==5 ? "xl:h-[85px] ":"xl:h-[195px] "} sm:h-[170px] `}>
          {lottery.map((lotto) => (
            <div
              class="bg-white flex justify-center  m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[530px] lg:w-[430px] sm:w-[400px]  min-w-[380px]"
              key={lotto.id}
            >
              <div class="flex justify-between space-x-2 text-xs flex-col ">
                <div class="flex justify-between space-x-2 flex-col">
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
                        1 เมษายน 2565
                      </h5>
                    </div>
                  </div>

                
                {  [...Array(Number(lotto.amount))].map((_, i) =>
                <div class="flex justify-between space-x-2 xl:my-0  sm:my-2">
                    
                    
                    <div class="flex justify-between my-2">
                      <h5 class="pl-2 p-2">ชุดที่</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[30px] rounded-md text-center">
                        {lotto.lot.split("|")[0]}
                      </h5>
                    </div>

                    <div class="flex  justify-between my-2">
                      <h5 class="pl-2 p-2">งวดที่</h5>
                      <h5 class="pl-2 p-2 bg-[#FFF8E6] w-[30px] rounded-md text-center">
                        {lotto.draw.split("|")[0]}
                      </h5>
                    </div>

                  </div>)
}

                  
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

export default Pack;
