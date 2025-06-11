import React, { useEffect, useState } from "react";
import FoodReqTable from "./FoodReqTable";

import useAuth from "../../hooks/useAuth";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [reqFoods, setReqFoods] = useState([]);
  console.log(reqFoods);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}requests?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReqFoods(data));
  }, [user]);
  return (
    <div>
      <title>Request My Food </title>
      <FoodReqTable></FoodReqTable>
    </div>
  );
};

export default MyFoodRequest;
