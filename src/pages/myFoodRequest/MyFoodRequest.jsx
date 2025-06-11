import React, { useEffect, useState } from "react";
import FoodReqTable from "./FoodReqTable";

import useAuth from "../../hooks/useAuth";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [reqFoods, setReqFoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}requests?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReqFoods(data));
  }, [user]);
  return (
    <div>
      <title>Request My Food </title>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
              #
                </th>
                <th>Name</th>
                <th>Expire Date</th>
                <th>Request Date</th>
               
              </tr>
            </thead>
            <tbody>
              {reqFoods.map((req,index) => (
                <FoodReqTable index={index} key={req._id} req={req}></FoodReqTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
