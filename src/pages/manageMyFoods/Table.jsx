import { use, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Table = ({ promiseFoodUserEmailBase }) => {
  const  initialData  = use(promiseFoodUserEmailBase);
 const [foods,setFoods] = useState( initialData )
  const handleDeleteBtn = (id) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   axios.delete(`${import.meta.env.VITE_URL}food/${id}`)
   .then(result=> {
    if(result?.data?.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "Your food data has been deleted.",
      icon: "success"
    });
        const remainingFood = initialData.filter(food=>food._id !== id);
        setFoods(remainingFood)
    }
   })
   .catch(error=> {
    toast.error(error.message);
   })


  }
});
// 
  };

  return (
    <div className="overflow-x-auto">
      <table className="table inline-block  ">
        {/* head */}
        <thead>
          <tr className="">
            <th>No</th>
            <th>Name</th>
            <th>Date&Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods?.map((food, index) => (
            <TableRow handleDeleteBtn={handleDeleteBtn} index={index} key={food._id} food={food}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
