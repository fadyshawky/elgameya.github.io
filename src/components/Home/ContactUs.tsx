import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [phone, setphone] = useState("");
  return (
    <div
      className=" grid justify-items-center    text-violet-red capitalize mt-12  mb-12 "
      id="contact"
    >
      <h2 className="text-center font-bold  lg:text-3xl md:text-2xl sm:text-xl ">
        Contact Us
      </h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
        className="flex flex-col mt-8  lg:w-96 md:w-80 sm: w-72 "
      >
        <label className="flex justify-start mb-2 ">User Name :</label>
        <input
          className="border-2 mb-4  pl-2 h-10"
          type={"text"}
          placeholder="Mohammed"
          required
          minLength={3}
        />

        <label className="flex justify-start mb-2">Email :</label>
        <input
          className="border-2 mb-4  pl-2 h-10"
          type={"email"}
          placeholder="Mohammed@gmail.com"
          required
        />

        <label className="flex justify-start mb-2">Phone :</label>

        <PhoneInput
          inputProps={{ required: true, minLength: 13, maxLength: 13 }}
          inputStyle={{ width: "100%", height: 40 }}
          country={"eg"}
          onlyCountries={["eg"]}
          value={phone}
          onChange={setphone}
          autoFormat={false}
          placeholder="+201023456789"
        />

        <label className="flex justify-start mb-2">message :</label>
        <textarea
          className="border-2 mb-4 pl-2 h-24"
          placeholder="Message"
          required
          minLength={40}
          maxLength={100}
        ></textarea>

        <button className="mt-8  bg-secondary  py-2 px-10  w-max  place-self-center rounded-full ">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
