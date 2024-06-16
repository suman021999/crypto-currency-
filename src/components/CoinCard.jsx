import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({coindata, currencySymbol, index, id}) => {
    const profit = coindata.price_change_percentage_24h>0 
  return (
    <>

    <Link to={`/coins/${id}`} className="text-white none">
    
    <div
        key={index}
        className="flex md:flex max-sm:flex-col max-sm:gap-4 md:justify-between items-center justify-evenly mt-20 mb-20 mx-8 text-[20px] font-bold"
      >
        <div className="w-28 md:h-12 md:ml-10 md:mr-5">
          <img className="h-[80px]" src={coindata.image} alt="" />
        </div>
        <div className="w-28 md:text-[15px] md:w-40">{coindata.name}</div>
        <div className="w-28 md:text-[15px] md:w-40">
          {currencySymbol}
          {coindata.current_price.toFixed(0)}
        </div>
        <div style={profit?{color:"green"}:{color:"red"}} className="w-28 md:text-[15px]">
          {profit ? "+" + coindata.price_change_percentage_24h.toFixed(2): coindata.price_change_percentage_24h}
        </div>
     
    </div>
    </Link>
     
    </>
  );
};

export default CoinCard;
