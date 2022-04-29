import React from "react";
import { Link } from "react-router-dom";
import { global_url_token } from '../global_url_token';

const SingleCardTemplateInfo = (card_props)=>{

    console.log("check SingleCardTemplateInfo", card_props.cardInfoData)
    return (
        <div className="font-prompt" style={{}}>
            <div className="font-prompt">
                <div className="bg-white items-center" style={{marginLeft: "6.5vw", marginTop: "9VW", height: "22.12VW", width: "47.6vw", borderWidth:"0.01VW", boxShadow:"0px 0px 7px 0px #B8D4D4"}}>
                    <div style={{marginLeft: "18.326VW", marginTop: "2.765VW",height: "0.6384VW", width: "23.8VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "18.326VW", marginTop: "0.532VW",height: "0.6384VW", width: "23.8VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "18.326VW", marginTop: "0.532VW",height: "0.6384VW", width: "23.8VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "18.326VW", marginTop: "0.532VW",height: "0.6384VW", width: "23.8VW", backgroundColor: "#FFE5A3"}}></div>
                    <div style={{marginLeft: "43.596VW", marginTop: "-6.9146VW",height: "22.00464VW", width: "3.78VW", backgroundColor: "#D3FAFA"}}></div>
                    <div style={{marginLeft: "3.57952VW", marginTop: "-19.26064VW",height: "13.1866VW", width: "13.24064VW", backgroundColor: "#C4C4C4"}}></div>
                    <div style={{marginLeft: "18.326VW", marginTop: "0.532VW",height: "2.5522VW", width: "5.04VW", backgroundColor: "#D3FAFA"}}>
                    <h1 className="text-center" style={{fontSize: "1.54VW"}}>งวดที่</h1>
                    </div>
                    <div style={{marginLeft: "24.08VW",marginTop: "-2.5522VW",height: "2.5522VW", width: "8.4VW"}}>
                        <h1 className="text-left font-normal" style={{fontSize: "1.54VW"}}>{card_props.cardInfoData.cardInfo.Draw}</h1>
                    </div>
                    <div style={{marginLeft: "33.6VW", marginTop: "-2.5522VW",height: "2.5522VW", width: "5.04VW", backgroundColor: "#D3FAFA"}}>
                        <h1 className="text-center" style={{fontSize: "1.54VW"}}>ชุดที่</h1>
                    </div>
                    <div style={{marginLeft: "39.354VW",marginTop: "-2.5522VW",height: "2.5522VW", width: "8.4VW"}}>
                        <h1 className="text-left font-normal" style={{fontSize: "1.54VW"}}>-</h1>
                    </div>
                    <div style={{marginLeft: "18.326VW", marginTop: "-16.492VW",height: "4.1496VW", width: "23.8VW"}}>
                        <h1 className="text-center font-normal" style={{fontSize: "3.36VW", letterSpacing:"0.98VW"}}>{card_props.cardInfoData.cardInfo.Number}</h1>
                    </div>
                    <div style={{marginLeft: "18.326VW", marginTop: "2.6VW",height: "4.1496VW", width: "23.8VW"}}>
                        <h1 className="text-center font-light" style={{fontSize: "2.0VW"}}>{card_props.cardInfoData.cardInfo.DrawDate}</h1>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "0.3VW", marginRight:"3VW"}}>
                <h1 className="text-right" style={{fontSize: "1.2VW"}}>ร้าน: {card_props.cardInfoData.cardInfo.Storename}</h1>
            </div>
        </div>
    );
}

export default SingleCardTemplateInfo