import React, { useState } from "react";
import { global_url_token } from "./global_url_token";
// import Noti from "../components/popNoti";

const Notification = (noti_props) => {
  const [checkStatus, setCheckStatus] = useState("");
  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div
        className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
      >
        <label className="block text-gray-darker text-xl text-[#E54E3D] font-bold mb-4">
          การแจ้งเตือน
        </label>
        <hr className="bg-[#FFE5A3] h-0.5" />

        <div className="m-5">
          <div className="text-lg mb-2 ">Subject</div>
          <div className="text-lg mb-2 ">Detail</div>
          <div className="text-md mb-2 text-right">Date and Time</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
