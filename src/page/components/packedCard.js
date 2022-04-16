import React from "react";

const PackedCardTemplate = (card_props)=>{
    const {Number, DrawDate, Draw, Storename} = card_props
    return (
        <div className="font-prompt" style={{height: "8.5VW", width: "17VW"}}>
            <div className="bg-white items-center" style={{height: "7.9VW", width: "17VW", borderWidth:"0.01VW", boxShadow:"0px 0px 7px 0px #B0CE93"}}>
                <div style={{marginLeft: "6.545VW", marginTop: "0.9875VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                <div style={{marginLeft: "15.57VW", marginTop: "-2.4695VW",height: "7.8588VW", width: "1.35VW", backgroundColor: "#D4FAAF"}}></div>
                <div style={{marginLeft: "1.2784VW", marginTop: "-6.8788VW",height: "4.7095VW", width: "4.7288VW", backgroundColor: "#C4C4C4"}}></div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D4FAAF"}}>
                    <h1 className="text-center" style={{fontSize: "0.55VW"}}>งวดที่</h1>
                </div>
                <div style={{marginLeft: "8.6VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                    <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>{Draw}</h1>
                </div>
                <div style={{marginLeft: "12VW", marginTop: "-0.9115VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D4FAAF"}}>
                    <h1 className="text-center" style={{fontSize: "0.55VW"}}>ชุดที่</h1>
                </div>
                <div style={{marginLeft: "14.055VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                    <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>-</h1>
                </div>
                <div style={{marginLeft: "6.545VW", marginTop: "-5.89VW",height: "1.482VW", width: "8.5VW"}}>
                    <h1 className="text-center font-normal" style={{fontSize: "1.2VW", letterSpacing:"0.35VW"}}>{Number}</h1>
                </div>
                <div style={{marginLeft: "6.545VW", marginTop: "0.9VW",height: "1.482VW", width: "8.5VW"}}>
                    <h1 className="text-center font-light" style={{fontSize: "0.8VW"}}>{DrawDate}</h1>
                </div>
            </div>
            <div style={{height: "3.4VW", width: "17VW"}}>
                <div style={{marginTop: "0.3798VW", height: "1.1394VW", width: "4.3822VW",borderRadius: "1VW", backgroundColor:"#D4FAAF"}}>
                    <h1 className="text-center" style={{fontSize: "0.7VW"}}>สลากชุด</h1>
                </div>
                <div style={{marginTop: "0.3VW", height: "1.5VW", width: "11VW"}}>
                    <h1 className="text-left" style={{fontSize: "0.9VW"}}>{Storename}</h1>
                </div>
                <div style={{marginLeft: "12VW",marginTop: "-2.2VW", height: "2.25VW", width: "2.5VW"}}>
                    <h1 className="text-left" style={{fontSize: "1.5VW"}}>80</h1>
                </div>
                <div style={{marginLeft: "14.5VW",marginTop: "-1.5VW", height: "1.5VW", width: "1.5VW"}}>
                    <h1 className="text-left font-light" style={{fontSize: "0.8VW"}}>บาท</h1>
                </div>
            </div>
        </div>
    );
}

export default PackedCardTemplate