import './formComponent.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import ResultForNum from './resultForNumAPI'
import Logo from '../imgComponents/tempPhoto.jpg';

const StoreHeaderComponent =(props)=>{
    return(
           <div className="flex font-prompt" style={{paddingTop:"12px",paddingBottom:"", justifyContent:"center",height:"134px"}}>
               <div style={{display:"flex", justifyContent:"space-between", width:"90%",borderBottomWidth:"0.1vw", borderColor:"#999191"}}>
                        <div style={{paddingLeft:"30px"}}>
                            <img style={{maxWidth:"110px",borderRadius:"50%",justifySelf:"center"}} src={Logo} />
                        </div>
                        <div style={{width:"90%",padingTop:"10px"}}>
                            <p style={{display:"flex", justifyContent:"space-between",marginTop:"40px" ,paddingBottom:"", color:"#000000", fontWeight:"600",fontSize:"2rem"}}>ร้านสำรีขายหวย<span style={{display:"flex", justifyContent:"right",marginTop:"40px", paddingBottom:"0.6vw", color:"#999191", fontWeight:"400",fontSize:"1.2rem"}}>จำนวนสินค้าคงเหลือในร้าน: {}</span></p>
                        </div>
                </div>
            </div>
    )
}

export default StoreHeaderComponent