import React from "react";
import { FaRegHandPointRight } from "react-icons/fa6";

const OurMission = () => {
  return (
    <div className="">
      <h1 className="text-center font-semibold text-3xl py-2">Our Mission</h1>
      <div className="py-6 max-w-11/12 mx-auto my-6 bg-amber-300 p-5 rounded-2xl">
        <h1 className="text-center font-semibold text-xl py-4">
          “To rescue surplus food from going to waste and deliver it to those in
          need.”
        </h1>
        <p className="text-gray-500">
          Every day, a large amount of food goes unused at restaurants, homes,
          and events. Much of it ends up being thrown away. At the same time,
          many people struggle to find their next meal.
        </p>
        <div className="py-3">
          <h4 className="flex items-center gap-2">
            {" "}
            <FaRegHandPointRight size={20} />
            Build a bridge between food donors and those in need.
          </h4>
          <h4 className="flex items-center gap-2">
            <FaRegHandPointRight size={20} />
            Allow donors to easily share extra food through our platform.
          </h4>
          <h4 className="flex items-center gap-2">
            <FaRegHandPointRight size={20} />
            Ensure receivers can get food with dignity and respect.
          </h4>
          <h4 className="flex gap-2 items-center">
            <FaRegHandPointRight size={20} />
            Create a digital platform that makes food sharing fast, safe, and
            accessible.
          </h4>
        </div>
        <span className="text-xl py-3">We believe —</span>
        <p className="">
          If every plate is shared with love, hunger in the world can be
          reduced.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
