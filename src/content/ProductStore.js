import React, { useEffect, useState,useRef } from 'react'
import AcceptDel from './component/AcceptDel';
import { global_url_token } from '../page/global_url_token';

function ProductStore() {
    const [dataProduct,setDataProduct] = useState([]);
    const[dialog,setDialog]=useState({
        msg:"",
        isShow:false,
    });
   
    var randomArray = [
        'สลากเดี่ยว','สลากชุด'
     ];

    const numProduct =useRef();
    
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }

    useEffect(()=>{
            const data =[];
            for(let index=0;index<7;index++){
                data.push({
                    id:`${index}`,
                    num:`11111${index}`,
                    type:`${get_random(randomArray)}`,
                    other:{d:`${index}`,l:`ชุด${index}`},
                })

            }
            setDataProduct(data);

    },[])

   
    const handleDelete =(num)=>{      
        setDialog({
            msg:"คุณยืนยันจะลบหรือไม่?",
            isShow:true,
        });

        numProduct.current = num;

       
    }

    const conFirmtodel =(c)=>{
        if(c==true){
            setDataProduct(dataProduct.filter((p)=>p.num !== numProduct.current));
            setDialog({
                msg:"คุณยืนยันจะลบหรือไม่?",
                isShow:false,
            });
            console.log("del it!!!")

        }else{
            setDialog({
                msg:"คุณยืนยันจะลบหรือไม่?",
                isShow:false,
            });

        }

    }
    

    console.log(dataProduct)
  return (
    <>
     {/* bg-[#D4FAAF]  */}
    <h1 class='mb-5  text-2xl font-semibold	 '>สินค้าภายในร้าน</h1> 
     
     <div class=" flex justify-center items-center bg-white  font-prompt">
   
   <div class='overflow-x-auto  xl:w-[560px] md:w-[450px] sm:w-[400px] h-[420px]'>
     <table class="w-full ">
         
 
   <thead class=" border-b border-t border-[#E54E3D]">
     <tr>
       {/* <th class="w-32 p-2 text-sm tracking-wider font-medium text-center">ชื่อร้านค้า</th> */}
       <th class=" p-2 text-sm tracking-wider font-medium text-center">เลขสลาก</th>
       <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">ประเภท</th>
       <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">เพิ่มเติม</th>
       <th class="w-30  p-2 text-sm tracking-wider font-medium text-center">สถานะ</th>
     
     </tr>
   </thead>
   {dataProduct.map((data)=>(

       <tbody class="divide-y border-b border-t border-[#E54E3D]">
       <tr class=' border-b  border-[#E54E3D]'>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>{data.num} </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center' >
           <span class={`p-1.5 text-xs ${data.type =="สลากชุด" ?"bg-[#D4FAAF] ":"bg-[#D3FAFA]"} rounded-full`}>{data.type}</span>
           </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>
           <p>งวดที่ : {data.other.d}</p>
           <p>ชุดที่ : {data.other.l}</p>
           
         </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>
         <button class=' bg-[#E54E3D] text-white font-light p-2 text-center' onClick={()=>handleDelete(data.num)}> ลบ </button>
         
         </td>
         
       </tr>
       
       
       
     </tbody>
   ))}
   {dialog.isShow && <AcceptDel onShowing={conFirmtodel} text={dialog.msg} />  } 
 </table>
 </div>
 </div>
  
    
    </>
  )
}

export default ProductStore