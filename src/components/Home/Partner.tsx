import React from "react";
import { partners } from "../../data/partners";

export default function Partner() {
  return (
    <div>
      <div className="text-center px-48 pt-16 bg-primary mt-16 text-white pb-36">
        <div>
          <h1 className="text-3xl font-bold pb-10">Our Partner</h1>
        </div>
        <div className=" grid  lg:grid-cols-6 md:grid-cols-2 sm: grid-cols-2   gap-2 gap-y-16 pt-16 ">
          {partners.map((i) => (
            <div className="place-self-center ">
              <a href={i.link} target={"_blank"} rel="noreferrer">
                <img src={i.image} alt="img" className="w-24" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
