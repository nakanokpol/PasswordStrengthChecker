import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleCardTemplate from "./components/singleCard";
import PackedCardTemplate from "./components/packedCard";
import FormComponent from "./components/formComponent";
import axios from "axios";
import { global_url_token } from "./global_url_token";

function Home(props) {
  // const {li_dataToshow} = props // li_data is default data to show on Home
  // console.log("home li_dataToshow ",li_dataToshow)

  // const [resultFor,setResultFor] = useState("------")

  const li_default_data = [];
  const [data_toShow, setData] = useState(li_default_data);
  const [checkFirstGet, setCheckGet] = useState(true);

  useEffect((event) => {
    if (checkFirstGet === true) {
      axios
        .post(global_url_token.url + "/getSearch", { SearchNumber: "xxxxxx" })
        .then(function (response) {
          setData(response.data.search_lottery);
        })
        .catch(function (error) {
          console.log(error);
        });
      setCheckGet(false);
    }
  });

  const search_number = (searchNum) => {
    // console.log("formC => Home:",searchNum)
    // props.searchNumApp(searchNum)
    axios
      .post(global_url_token.url + "/getSearch", {
        SearchNumber: searchNum.number,
      })
      .then(function (response) {
        setData(response.data.search_lottery);
        console.log("test4");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Home => App:", searchNum);
  };

  return (
    <div className="bg-white">
      <div className="h-16" />
      <div style={{ position: "fixed", width: "100%" }}>
        <FormComponent search_num={search_number} />
      </div>
      <div
        className=""
        style={{ margin: "0vh 5% 5% 5%", paddingTop: "146px" }}
      >
        <div
          className="grid grid-cols-1 gap-12 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center"
        >
          {data_toShow.map((element) => {
            if (element.pack === "N") {
              return <SingleCardTemplate cardInfo={element} />;
            } else {
              return <PackedCardTemplate cardInfo={element} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
