import React from "react";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <div id="features">
      <div className="text-center px-32 pt-16 ">
        <h1 className="text-3xl font-bold pb-10">Features</h1>
        <p className="text-lg">
          ElGameya’s app facilitates the management of the ROSCA cycle, Users
          can either use it as a platform to digitize their private money
          cycles, or get matched to users with similar saving/lending
          capabilities in a public circle. ElGameya’s app also features a
          built-in marketplace enabling users to access exclusive discounted
          products as a cash-out option.
        </p>
      </div>
      <FeaturesCard />
    </div>
  );
}
