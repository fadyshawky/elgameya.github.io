import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import CardStore from "./components/Navbar/CardStore";
import MenuItem from "./components/Navbar/MenuItem";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const showMenu = () => {
    setopen(!open);
  };

  return (
    <div>
      <nav className="  bg-primary w-full  top-0 left-0 mt-0 px-12">
        <div className=" w-full flex ">
          <div className="container flex flex-wrap items-center mx-auto lex justify-between ">
            <div className="flex items-center mt-0">
              <a href="#" className=" ">
                <img
                  src="./Group 4104.png"
                  className="mr- h-24 mt-14 "
                  alt="logo"
                />

                <img
                  src="./ElGameya.png"
                  className="mt-2 ml-2 w-20 "
                  alt="elgameya"
                />
              </a>
              <div className="text-3xl  absolute right-8  cursor-pointer  lg:hidden md:hidden">
                <MenuOutlined onClick={showMenu} />
              </div>
              <ul className="  sm: hidden md:flex lg:flex   flex-col p-4  md:flex-row  lg:space-x-14 md:space-x-9  md:text-base md:border-0 text-white lg:ml-16 md:ml-40 sm: ml-28 lg:pt-0 md:pt-0 sm: pt-20 ">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#work">How it work</a>
                </li>
                <li>
                  <a href="#FAQS">FAQS</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
                <li>
                  <a href="#"> عربي</a>
                </li>
              </ul>
            </div>
            <div className="mr-16 pt-14">
              <MenuItem showMenu={showMenu} open={open} />
            </div>
            <div className=" ">
              <CardStore />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
