import React from "react";
import FoodReqTable from "./FoodReqTable";
import { useQuery } from '@tanstack/react-query';
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const MyFoodRequest = () => {
  
  const { user } = useAuth();
  const {data: foodReqData, isLoading, error} = useQuery({
    queryKey: ['foodReqData'],
    queryFn: ()=>fetch(`${import.meta.env.VITE_URL}requests?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
    .then(res=>res.json())
  })
  if(isLoading){
    return <p>loading.....</p> 
  }
  toast.error(error)
  
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
              {foodReqData.map((req,index) => (
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
