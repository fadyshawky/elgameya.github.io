import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black text-start px-28 " id="footer">
      <div className="  text-white pb-16 pt-16 lg:flex space-x-12 sm:grid-cols-1 sm: place-self-start  border-b-2  ">
        <div className="pr-24 sm: pb-8">
          <a
            href="https://elgameya.net/"
            target={"_blank"}
            rel="noreferrer"
            className="font-bold text-xl"
          >
            Info@elgameya.net
          </a>

          <p className="text-base pt-3 ">
            Want to say hi? We <br />
            are excited to talk to you.
          </p>
        </div>

        <div className=" ">
          <button className="  py-2 px-6 rounded-full inline-flex space-x-6 text-white mb-10 border-2  ">
            <span className="">
              <img src="./facebook.png" alt="image" className="w-4 h-6" />
            </span>
            <h4 className="">Facebook</h4>
          </button>
        </div>
        <div className=" ">
          <button className="  py-2 px-6 rounded-full inline-flex space-x-6 text-white mb-10 border-2  ">
            <span className="">
              <img src="./linkedn.png" alt="image" className="w-6 " />
            </span>
            <h4 className="">Linkedin</h4>
          </button>
        </div>

        <div className="">
          <input
            className="  py-2  pl-8  lg:pr-56 rounded-full inline-flex space-x-6 text-white bg-black mb-10 border-2"
            type={"email"}
            placeholder="Type your email"
          ></input>
        </div>
        <div>
          <button className="  py-2 px-10  rounded-full inline-flex space-x-6 text-black mb-10 border-2 bg-yellow-200   ">
            <h4 className="">Subscribe</h4>
          </button>
        </div>
      </div>
      <div className=" text-white pt-6 pb-6 lg:flex justify-between text-base sm:grid-cols-1">
        <h4>ElGameya</h4>
        <p>FAQS . TERMS OF USE . PRIVACY NOTICE . COOKIE NOTICE</p>
      </div>
    </div>
  );
}
