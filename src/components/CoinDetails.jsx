import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { Url } from "./Url";
import axios from "axios";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import CoinChart from "./CoinChart";
import "../index.css"


const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹" : "$";
  const profit = coin.market_data?.price_change_percentage_24h > 0;

  const getcoin = async () => {
    try {
      const { data } = await axios.get(`${Url}/coins/${id}`);

      console.log(data);
      setCoin(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getcoin();
  }, [id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <div className=" mt-20 mb-10 mx-20 flex coin-detail justify-evenly ">
            <div>
              <div className="my-5">
                <button
                  className="h-8 bg-orange-600 border-none  w-20 rounded-xl mt-10"
                  onClick={() => setCurrency("inr")}
                >
                  inr
                </button>
                <button
                  className="h-8 bg-orange-600 border-none ml-8 w-20 rounded-xl mt-10"
                  onClick={() => setCurrency("usd")}
                >
                  usd
                </button>
              </div>
              <div className="font-bold text-white">{coin.last_updated}</div>
              <div className="mt-16">
                <img className="h-[150px]" src={coin.image.large} alt="" />
              </div>
              <div className="font-bold text-[22px] mt-8">{coin.name}</div>
              <div className="font-bold text-[22px]">
                {currencySymbol} {coin.market_data.current_price[currency]}
              </div>
              <div className="mt-3  flex items-center gap-2">
                {profit ? (
                  <BiSolidUpArrow color="green" />
                ) : (
                  <BiSolidDownArrow color="red" />
                )}
                {coin.market_data.price_change_percentage_24h} %
              </div>
              <div className="font-bold flex items-center gap-2 text-[22px] my-3">
                <IoPulseOutline color="orange" />#{coin.market_cap_rank}
              </div>
              <div className="w-[80%]">
                <p>{coin.description["en"].split(".")[0]}</p>
              </div>
            </div>
            <CoinChart currency={currency} />
            </div>
           
          
        </>
      )}
    </>
  );
};

export default CoinDetails;
