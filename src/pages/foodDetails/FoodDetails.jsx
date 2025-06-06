import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    name,
    photo,
    quantity,
    location,
    date,
    command,
    donorImage,
    donorName,
    donorEmail,
    status,
  } = food || {};
  return (
    <div className="card bg-base-100 w-[600px] my-6 mx-auto shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge text-gray-500">
            <MdLocationOn className="mt-1" size={18} />
            {location}
          </div>
        </h2>
        <p>{command}</p>
        <div className="flex">
          <p>quantity: {quantity}</p>
          <p>EXDate: {date}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{status}</div>
        </div>
        <div className="divider divider-error">Donar Info</div>
        <div className="flex gap-6 relative">
          <img className="w-24 rounded-2xl" src={donorImage} alt="" />
          <div>
              <h1>name: {donorName}</h1>
              <p>email: {donorEmail}</p>
          </div>
        </div>
        <div className="absolute right-4 bottom-3">
            <button className="btn hover:btn-primary">Request</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
