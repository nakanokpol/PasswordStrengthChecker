import React from "react";
import { Link } from "react-router-dom";
import { global_url_token } from '../global_url_token';

const SingleCardTemplate = (card_props)=>{
    console.log("render Single Card", card_props)
    return (
        <div className="font-prompt" style={{height: "8.5VW", width: "17VW"}}>
            <Link to="/singlelotteryinfo" state= {{cardInfo: card_props.cardInfo}}>
                <div className="bg-white items-center" style={{height: "7.9VW", width: "17VW", borderWidth:"0.01VW", boxShadow:"0px 0px 7px 0px #B8D4D4"}}>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.9875VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.228VW", width: "8.5VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "15.57VW", marginTop: "-2.4695VW",height: "7.8588VW", width: "1.35VW", backgroundColor: "#D3FAFA"}}></div>
                    <div style={{marginLeft: "1.2784VW", marginTop: "-6.8788VW",height: "4.7095VW", width: "4.7288VW", backgroundColor: "#C4C4C4", borderRadius:"0.2VW"}}></div>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.19VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D3FAFA"}}>
                        <h1 className="text-center" style={{fontSize: "0.55VW"}}>งวดที่</h1>
                    </div>
                    <div style={{marginLeft: "8.6VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                        <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>{card_props.cardInfo.Draw}</h1>
                    </div>
                    <div style={{marginLeft: "12VW", marginTop: "-0.9115VW",height: "0.9115VW", width: "1.8VW", backgroundColor: "#D3FAFA"}}>
                        <h1 className="text-center" style={{fontSize: "0.55VW"}}>ชุดที่</h1>
                    </div>
                    <div style={{marginLeft: "14.055VW",marginTop: "-0.9115VW",height: "0.9115VW", width: "3VW"}}>
                        <h1 className="text-left font-normal" style={{fontSize: "0.55VW"}}>-</h1>
                    </div>
                    <div style={{marginLeft: "6.545VW", marginTop: "-5.89VW",height: "1.482VW", width: "8.5VW"}}>
                        <h1 className="text-center font-normal" style={{fontSize: "1.2VW", letterSpacing:"0.35VW"}}>{card_props.cardInfo.Number}</h1>
                    </div>
                    <div style={{marginLeft: "6.545VW", marginTop: "0.9VW",height: "1.482VW", width: "8.5VW"}}>
                        <h1 className="text-center font-light" style={{fontSize: "0.8VW"}}>{card_props.cardInfo.DrawDate}</h1>
                    </div>
                </div>
            </Link>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{justifyItems:"center",height: "3.4VW", width: "16VW"}}>
                    <div className="" style={{marginTop: "0.2VW", height: "1.5VW", width: "100%"}}>
                        <p className="text-left" style={{fontSize: "0.9VW", display:"flex", justifyContent:"space-between"}}>
                            <Link to="/store">
                                <p style={{marginTop: "0.45VW"}}>
                                    {card_props.cardInfo.Storename}
                                </p>
                            </Link> 
                            <span>
                                <span style={{fontSize:"1.3VW"}}>{80}</span> 
                                <span style={{fontSize:"0.8VW"}}>&emsp;บาท</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCardTemplate