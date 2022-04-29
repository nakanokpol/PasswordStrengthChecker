import React, { useEffect, useState } from "react";
import DetailPaymaent from "./DetailPaymaent";
import { global_url_token } from "../../page/global_url_token";
// import Editcheckpay from './Editcheckpay';

function CheckPayment({ data }) {
  // const[approvePay,setApprove]
  const [modalOn, setModalOn] = useState(false);

  const [approve, setApprove] = useState(() => {
    const saveStatus = localStorage.getItem("Paymenttus");

    if (saveStatus) {
      return JSON.parse(saveStatus);
    } else {
      return [];
    }
  });

  

  useEffect(() => {
    localStorage.setItem("Paymenttus", JSON.stringify(approve));
  }, [approve]);

  const [paymentdata, setPaymentData] = useState([
    {
      orderID: 86,
      relateID: "",
      customerID: "1",
      FullName: "ไก่ย่าง ถูกเผา",
      URLSlip: "/image.png",
      Money: "280",
    },
    {
      orderID: 87,
      relateID: "",
      customerID: "3",
      FullName: "แหลมเจริญ ซีฟู้ต",
      URLSlip: "/image.png",
      Money: "380",
    },
  ]);

  const [detail, setDetail] = useState([]);
  const [id, setID] = useState([]);
  const [idCustomer, setIDCustomer] = useState([]);
  const [money, setMoney] = useState([]);

  const changeID = (d, c) => {
    setID(d);
    setIDCustomer(c);
  };
  const changeMoney = (d) => {
    setMoney(d);
  };
  const changeContent = (d) => {
    setDetail([d]);
  };
  const clickDetail = () => {
    setModalOn(true);
  };

  const setState = (a) => {
    let tus = [];
    for (let i = 0; i < approve.length; i++) {
      if (approve[i].orderID === a) {
        if (approve[i].approve === "yes") {
          tus.push(1);
        } else {
          tus.push(0);
        }
      }
    }
    return tus;
  };

  function handleDelete(id) {
    const removeItem = approve.filter((a) => {
      return a.orderID !== id;
    });

    setApprove(removeItem);
  }

  return (
    <>
      <h1 class="mb-5  text-2xl font-semibold	 ">ยืนยันการชำระ</h1>

      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ชื่อ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  จำนวนเงิน
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  หลักฐานการชำระ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
                {/* <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  หมายเหตุ
                </th> */}
              </tr>
            </thead>

            <tbody class="divide-y border-b border-t border-[#E54E3D]">
              {data.map((data) => (
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="w-30 p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">{data.FullName}</p>
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">{data.Money}</p>
                  </td>

                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <button
                      class="font-bold text-[#E54E3D] hover:underline"
                      onClick={() => {
                        changeContent(data);
                        clickDetail();
                        changeID(data.orderID, data.customerID);
                        changeMoney(data.Money);
                      }}
                    >
                      ดูรายละเอียด
                    </button>
                  </td>

                  <td
                    class={`p-3 text-sm font-light whitespace-nowrap text-center ${
                      setState(data.orderID)[0] === 1
                        ? "text-green-500"
                        : setState(data.orderID)[0] === 0
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {setState(data.orderID)[0] === 1
                      ? "สำเร็จ"
                      : setState(data.orderID)[0] === 0
                      ? "ไม่สำเร็จ"
                      : "ยังไม่ตรวจสอบ"}
                  </td>

                  {/* <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                    <button onClick={() => handleDelete(data.orderID)}>
                      X
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          {modalOn && (
            <DetailPaymaent
              setModalOn={setModalOn}
              data={detail}
              id={id}
              customerID={idCustomer}
              money={money}
              setApprove={setApprove}
              approve={approve}
              setState={setState}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CheckPayment;
