import React, { Suspense } from "react";
import Table from "./Table";
import { promiseFoodUserEmailBase } from "../../api/foodsApi";
import useAuth from "../../hooks/useAuth";

const ManageMyFoods = () => {
  const { user } = useAuth();
  return (
    <div className="mt-30 max-w-[1600px] mx-auto">
      <title>Manage My Food</title>
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
        Manage My Donated Food
      </h2>
      <p className="text-center  mt-2 max-w-xl mx-auto">
        View and manage all the food items you’ve added for donation. You can
        update details or remove items that are no longer available.
      </p>

      <div className="mt-10">
        <Suspense fallback={<p>Loading....</p>}>
          <Table
            promiseFoodUserEmailBase={promiseFoodUserEmailBase(
              user?.email,
              user?.accessToken
            )}
          ></Table>
        </Suspense>
      </div>
    </div>
  );
};
export default ManageMyFoods;
