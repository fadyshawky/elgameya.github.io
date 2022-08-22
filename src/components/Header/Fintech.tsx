import React from "react";

export default function Fintech() {
  return (
    <div className="pt-20    px-12">
      <div className="col-span-1 ">
        <h4>Fintech Product</h4>
        <h1 className="font-bold text-5xl mt-4">
          ELGameya <br /> Awfar
        </h1>
        <p className="mt-8">
          ElGameya is a ROSCA Model based mobile application with <br />
          an integrated marketplace that offers its users exclusive <br />{" "}
          discounts on select products.
        </p>
        <button className="bg-secondary  py-2 px-6 rounded-full inline-flex items-center text-black mt-10">
          Download App
          <span className="pl-4">
            <img src="./Path 6687.png" alt="image" />
          </span>
        </button>
        <div className="flex flex-row  space-x-8 mt-14 pb-12 ">
          <div>
            <h2 className="text-xl font-bold">+90k</h2>
            <p className="text-xs mt-2">Number of Downloads</p>
          </div>
          <div className="border-l-2 pl-4">
            <h2 className="text-xl font-bold">+1k</h2>
            <p className="text-xs mt-2">Cycles on the App Store</p>
          </div>
          <div className="border-l-2 pl-4">
            <h2 className="text-xl font-bold">+70k</h2>
            <p className="text-xs mt-2">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
