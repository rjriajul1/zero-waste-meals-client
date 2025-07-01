import React from "react";
import FoodReqTable from "./FoodReqTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const {
    data: foodReqData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foodReqData"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_URL}requests?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <p>loading.....</p>;
  }
  toast.error(error);

  return (
    <div className="mt-30 max-w-[1600px] mx-auto">
      <title>Request My Food </title>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          My Food Requests
        </h2>
        <p className="text-center  mt-2 max-w-xl mx-auto">
          Here you can view all the food parcel requests you’ve made. Only you
          can see this information — your requests are private and secure.
        </p>

        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Expire Date</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {foodReqData.map((req, index) => (
                <FoodReqTable
                  index={index}
                  key={req._id}
                  req={req}
                ></FoodReqTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
