import React,{useState,useEffect} from 'react'

function Profile() {
    // const TOKEN = {
    //     token: ,
    //   };
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [numberName, setnumberName] = useState("");
    
      function getProfile() {
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxveW9uZyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MDA5MTI1NSwiZXhwIjoxNjUwMDk0ODU1fQ.rXK_qQKSkpRtfQ12C_dpawRMHj2rX6k9iqLpbWTM-2w"
        fetch("http://5215-2403-6200-88a2-303e-9516-d0fe-3377-c8d.ngrok.io/getCustomerAccount/"+token, {
          method: "GET", // or 'PUT','GET'
          headers: {
            "Content-Type": "application/json",
            // Authorization: fullToken,
          },
        //   body: JSON.stringify(TOKEN),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "200OK") {
            //   window.location = "/login";
            //   localStorage.removeItem("token");
              // setUsername(data.decoded.username);
              console.log("Success:", data);
              setFirstName(data.customerAccount.Firstname)
              console.log(firstName)
            } else {
              // localStorage.removeItem("token");
              // window.location = "/login";
              console.log("Failed:", data);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      useEffect(()=>{
            getProfile();      
    },[])

  return (
      <>
    <div class='grid grid-cols-3 gap-9    '>
        <h1 class='mb-5  xl:text-2xl font-semibold	md:text-xl '>ข้อมูลส่วนตัว</h1>
        <div class='col-span-2  text-right m-2'>
        
        
        </div>
        
    </div>
        <div class='grid grid-cols-2 gap-7'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ชื่อ</h5>
            </div>
            <div class=''>
                <h5>{firstName}</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>นามสกุล</h5>
            </div>
            <div class=''>
                <h5>แสงสว่าง</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>เบอร์โทรศัพท์</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>วัน/เดือน/ปีเกิด</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>Email</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ที่อยู่</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        {/* seller detail */}
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>เลขบัญชีธนาคาร</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ธนาคาร</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ชื่อบัญชี</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        {/* <button onClick={()=>{getProfile()}}>TEXT</button> */}
        
    </>
  )
}

export default Profile