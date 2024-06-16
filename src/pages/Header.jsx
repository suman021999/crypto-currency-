import React from "react";
import { FaEthereum } from "react-icons/fa";
// import { IoMenuSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  // const [search,setSearch]=useState('')
  // const [toggle,setToggle]=useState('<IoMenuSharp />')


  return (
    <>
      <section className="bg-[#1f114b]  fixed  w-full top-0  pb-2">
        <nav className="flex items-center h-16  justify-evenly">

          <div className="flex items-center">
            <h1 className="text-2xl">CryptoVerse</h1>
            <FaEthereum color="orange" size={"25"} />
          </div>


          
          {/* <div className=" lg:flex h-8">
            <input type="text" onChange={(ex)=>setSearch(ex.target.value)} placeholder="Search your Coins" className="h-8 text-black outline-none px-4 py-5"/>
            <button className=" bg-orange-600 border-none h-8 py-5 px-4 flex items-center rounded-r-md">
            <IoSearchSharp />
            </button>
          </div> */}
          
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
          {/* <div className="flex justify-center items-center">
          {
            toggle?<IoMenuSharp className="h-8 w-8"/>:<IoClose className="h-8 w-8"/>
          }
        </div> */}
        </nav>
        
      </section>
    </>
  );
};

export default Header;
