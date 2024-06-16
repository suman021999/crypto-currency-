import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [search,setSearch]=useState('')
  return (
    <>
      <section className="bg-[#1f114b]  fixed  w-full top-0  pb-2">
        <nav className="flex items-center h-16  justify-evenly">

          <div className="flex items-center">
            <h1 className="text-2xl">CryptoVerse</h1>
            <FaEthereum color="orange" size={"25"} />
          </div>

          <div className=" lg:flex h-8  hidden">
            <input type="text" placeholder="Search your Coins" className="h-8 text-black outline-none px-4 py-5"/>
            <button className=" bg-orange-600 border-none h-8 py-5 px-4 flex items-center rounded-r-md">
              hhhh
            </button>
          </div>
          
          <ul className="flex list-none">
            <li>
              <Link to="/" className="ml-52 no-underline text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/coins" className="ml-52 no-underline text-xl">
                Coins
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
