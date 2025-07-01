import React from "react";

const Food = ({ food }) => {
  const { name, photo, quantity,location,status} = food || {};
  return (
        <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={name} className="h-56 hover:scale-110 transition w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        
        <p className="text-sm ">
          <span className="font-semibold">Location:</span> {location}
        </p>

        <p className="text-sm ">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>

        <div className="card-actions justify-end">
          <span className="badge badge-outline px-4 py-1 text-sm capitalize">
            Status: {status}
          </span>
        </div>
      </div>
    </div>
  )
};

export default Food;
