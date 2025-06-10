import React from "react";
import { motion } from "motion/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const AddFood = () => {
   const {user} = useAuth();
    const handleAddFoodFrom = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newFood = Object.fromEntries(formData.entries());
        newFood.donorImage = user?.photoURL;
        newFood.donorName = user?.displayName;
        newFood.donorEmail = user?.email;
        newFood.status = 'available';
        
        // insert data data base 
        axios.post(`${import.meta.env.VITE_URL}foods`, newFood)
        .then(result => {
          if(result?.data?.data?.insertedId){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your food has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
          }
        })
        .catch(error=> {
          toast.error(error.message);
        })
    }
  return (
    <div>
      <title>Add Food</title>
      <div>
        <h1 className="text-4xl font-semibold my-4 text-center">
          {" "}
          Share a Meal, Spread the Love
        </h1>
        <p className="text-center w-3/4 mx-auto text-xl mb-10">
          Your extra food can be someone’s lifeline. By adding food here, you’re
          not just reducing waste — you’re giving hope, warmth, and nourishment
          to someone in need.No matter how big or small, your generosity makes a
          difference. Let’s come together to build a community that cares.
        </p>
      </div>
      <div className="w-5/6 mx-auto">
        <form onSubmit={handleAddFoodFrom} className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          {/* food name */}
          <label className="label">Food Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Food Name"
          />
          {/* food image */}
          <label className="label">Food Image</label>
          <input
            type="url"
            name="photo"
            className="input w-full"
            placeholder="Food Image"
          />
           {/* food quantity */}
          <label className="label">Food Quantity</label>
          <input type="number" name="quantity" className="input w-full" placeholder="Food Quantity" />
           {/* Pickup Location */}
          <label className="label">PickuP Location</label>
          <input type="text" name="location" className="input w-full" placeholder="PicKup Location" />
           {/* Expired Date*/}
          <label className="label">Expired Date</label>
          <input type="date" name="date" className="input w-full" placeholder="Expired Date" />
          {/* additional  notes */}
          <label>Additional Notes</label>
          <textarea name="command" className="textarea resize-none md:w-4/6 lg:w-1/2" placeholder="Additional Notes"></textarea>
          <motion.input whileHover={{scale:1.1}} whileTap={{scale: 0.95}} className="btn mx-auto hover:btn-primary w-11/12 my-6 border-accent" type="submit" value="Add Food" />
        </form>
      </div>
    </div>
  );
};

export default AddFood;
