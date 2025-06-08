import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const AvailableFoods = () => {
  const allFoods = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-11/12 mx-auto my-10">
      <title>Available Food</title>
      {allFoods?.map((food) => (
        <div className="" key={food._id}>
          <div className="card bg-base-100 h-96 shadow-sm">
            <figure>
              <img
               className=" h-72 object-cover w-full"
                src={food?.photo}
                alt="food"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {food?.name}
                <div className="badge text-gray-500"><MdLocationOn className="mt-1" size={18} />{food?.location}</div>
              </h2>
              <p>
                {food?.command}
              </p>
              <div className="flex">
                <p>quantity: {food?.quantity}</p>
                <p>EXDate: {food?.date}</p>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{food?.status}</div>
              </div>
            </div>
            <div>
             <Link to={`/foodDetails/${food?._id}`}> <button className="btn w-full hover:btn-primary">View Details</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};

export default AvailableFoods;
