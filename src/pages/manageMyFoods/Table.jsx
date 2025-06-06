import { use } from "react";
import TableRow from "./TableRow";

const Table = ({promiseFoodUserEmailBase}) => {
    const data = use(promiseFoodUserEmailBase)
    
  
    return (
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="flex justify-around flex-wrap">
        <th>
          No
        </th>
        <th>Name</th>
        <th>Date&Quantity</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {data?.map((food,index)=><TableRow index={index} key={food._id} food={food}></TableRow>)}
   
    </tbody>
   
  </table>
</div>
    );
};

export default Table;