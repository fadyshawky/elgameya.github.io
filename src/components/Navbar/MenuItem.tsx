// import { CloseOutlined } from "@ant-design/icons";
import React from "react";

export default function ({ open }) {
  return (
    <div>
      <div className="lg:hidden md:hidden text-white">
        <ul className={open ? "flex-col  md:hidden" : "hidden"}>
          {/* <CloseOutlined onClick={showMenu} /> */}
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#">How it work</a>
          </li>
          <li>
            <a href="#">FAQS</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#"> عربي</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
