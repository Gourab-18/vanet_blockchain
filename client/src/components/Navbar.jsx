import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
// import Web3Context from ".././contexts";

const Navbar = () => {
  //   const { connectWallet, account } = useContext(Web3Context);

  const arr = ["Studio"];
  const items = new Map([["Studio", "/"]]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (val) => {
    setSelectedItem(val);
  };

  return (
    <>
      <div className=" flex items-center   justify-evenly  border-b-[5px]  border-[#111111] bg-[#111111]   text-center text-white md:justify-center md:gap-32 md:text-[25px]">
        <div className="flex items-center justify-evenly     border-[#111111] bg-[#111111]   text-center text-white md:justify-center md:gap-32 md:text-[25px]">
          {arr.map((val, index) => {
            return (
              <article key={index}>
                <NavLink to={`${items.get(val)}`}>
                  <div
                    // onClick={() => handleItemClick(val)}
                    className={` transform cursor-pointer transition-transform hover:scale-125 hover:opacity-75
`}
                  >
                    {val}
                  </div>
                </NavLink>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mb-2  mt-4 bg-[#FFA500] px-6  py-3 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
            // onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
