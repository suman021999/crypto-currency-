import React, { useEffect, useState } from "react";
import { Url } from "./Url";
import axios from "axios";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
// import Header from '../pages/Header'
const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [currency, setCurrency]=useState('inr')

  const currencySymbol = currency ==='inr' ? '₹': '$'

  const getcoinsData = async () => {
   try {
    const { data } = await axios.get(`${Url}/coins/markets?vs_currency=${currency}`);
    console.log(data);
    setCoins(data);
    setLoading(false);
   } catch (error) {
    console.log(error)
    setLoading(false)
   }
  };

  useEffect(() => {
    getcoinsData();
  }, [currency]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        {/* <Header search={search}/> */}
       
        <div className="mt-20 mb-10 mx-8">
          <button className="h-8 bg-orange-600 border-none ml-8 w-20 rounded-xl mt-10" onClick={()=>setCurrency('inr')}>inr</button>
          <button className="h-8 bg-orange-600 border-none ml-8 w-20 rounded-xl mt-10" onClick={()=>setCurrency('usd')}>usd</button>
        </div>
          {coins.map((coindata, index) => {
            return (
              <CoinCard id={coindata.id} coindata={coindata} key={index} index={index} currencySymbol={currencySymbol}/>
            );
          })}
        
        </>
      )}
    </>
  );
};

export default Coins;
