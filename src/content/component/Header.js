import React from "react";

function Header({picture,name,undername}) {
  return (
    <>
      <div class="flex font-prompt border-b border-[#E54E3D]">
          <div >
          {/* <p>Headercustomer</p> */}
          <img src={picture} class="w-[110px] h-[110px] rounded-full m-5 " alt=""/>

          </div>
          <div class="mt-10 ml-2">
              <p class=" font-semibold">{name}</p>
              <p class=" font-light">{undername}</p>
          </div>

    </div>
    
       
    </>
  );
}

export default Header;
