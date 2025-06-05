import React from "react";
import { MdLocationOn } from "react-icons/md";

const Food = ({ food }) => {
  const { name, photo, quantity,location, command,date } = food || {};
  return (
    <div className="flex gap-4 p-4 bg-teal-200 rounded-2xl">
        <div className="">
            <figure className="">
                <img className="rounded-2xl w-80 h-auto " src={photo} alt="" />
            </figure>
        </div>
        <div className="">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="flex lg:items-center text-gray-500"><MdLocationOn className="mt-1" size={18} />{location}</p>
            <p className="py-2">{command}</p>
            <div className="flex gap-8 text-gray-500">
                <p>quantity: {quantity}</p>
                <p>EXDate: {date}</p>
            </div>
        </div>
    </div>
  )
};

export default Food;
