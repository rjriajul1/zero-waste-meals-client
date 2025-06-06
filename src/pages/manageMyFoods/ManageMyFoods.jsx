import React, { Suspense } from "react";
import Table from "./Table";
import { promiseFoodUserEmailBase } from "../../api/foodsApi";
import useAuth from "../../hooks/useAuth";

const ManageMyFoods = () => {
  const { user } = useAuth();
  return (
    <div className="my-7">
      <Suspense fallback={<p>Loading....</p>}>
        <Table
          promiseFoodUserEmailBase={promiseFoodUserEmailBase(user?.email)}
        ></Table>
      </Suspense>
    </div>
  );
};

export default ManageMyFoods;
