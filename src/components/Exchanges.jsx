import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import axios from "axios";
import Loader from "./Loader";
import { Url } from "./Url";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const getExchengeData = async () => {
    const { data } = await axios.get(`${Url}/exchanges`);
    console.log(data);
    setExchanges(data);
    setLoading(false);
  };
  useEffect(() => {
    getExchengeData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-32 mb-10 mx-8">
            {exchanges.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex md:flex md:justify-between items-center justify-evenly mt-20 text-[20px] font-bold"
                >
                  <div className="w-28 md:h-12 md:ml-10 md:mr-5">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="w-28 md:text-[15px] md:w-40">{item.name}</div>
                  <div className="w-28 md:text-[15px] md:w-40">
                    {item.trade_volume_24h_btc.toFixed(0)}
                  </div>
                  <div className="w-28 md:text-[15px]">
                    {item.trust_score_rank}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Exchanges;
