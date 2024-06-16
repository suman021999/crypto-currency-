import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { IoClose, IoMenuSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  // const [search,setSearch]=useState('')
  const [toggle,setToggle]=useState(true)

  


  return (
    <>
      <section className="bg-[#1f114b]  fixed  w-full top-0  pb-2">
        <nav className="flex items-center h-16 mx-8 md:mx-0 md:justify-evenly justify-between">

          <div className="flex items-center">
            <h1 className="text-2xl">CryptoVerse</h1>
            <FaEthereum color="orange" size={"25"} />
          </div>


          
          {/* <div className=" md:flex hidden h-8">
            <input type="text" onChange={(ex)=>setSearch(ex.target.value)} placeholder="Search your Coins" className="h-8 text-black outline-none px-4 py-5"/>
            <button className=" bg-orange-600 border-none h-8 py-5 px-4 flex items-center rounded-r-md">
            <IoSearchSharp />
            </button>
          </div> */}
          
          <ul className="md:flex list-none hidden">
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



          <div onClick={()=>setToggle(!toggle)} className="flex md:hidden justify-center items-center">
          {
            toggle?<IoMenuSharp className="h-8 w-8"/>:<IoClose className="h-8 w-8"/>
          }
          <div className="fixed z-[9999] w-[110vw] top-[5rem] mr-[700px]  bg-black">
            {
            !toggle?
            (

              <>
              {/* <div className="flex justify-center mt-20 h-8">
            <input type="text" onChange={(ex)=>setSearch(ex.target.value)} placeholder="Search your Coins" className="h-8 text-black outline-none px-4 py-5"/>
            <button className=" bg-orange-600 border-none h-8 py-5 px-4 flex items-center rounded-r-md">
            <IoSearchSharp />
            </button>
          </div> */}
              <ul className=" list-none  mx-6 h-screen ">
            <li>
              <Link to="/" className="flex justify-center mt-20 no-underline text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/coins" className="flex justify-center mt-4 no-underline text-xl">
                Coins
              </Link>
            </li>
          </ul>
            
              </>):null
              
          }
          </div>
        </div>
        </nav>
        
      </section>
    </>
  );
};

export default Header;
