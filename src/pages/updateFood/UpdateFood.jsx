import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {  useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const UpdateFood = () => {
  const navigate = useNavigate()
  const { user } = useAuth();
  const {id} = useParams()
  const [food,setFood] = useState({})
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_URL}food/${id}`,{
      headers: {
         Authorization: `Bearer ${user?.accessToken}`,
      }
    })
    .then(res=>res.json())
    .then(data=>setFood(data))
  },[id,user]);
 

  const handleUpdateFoodFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    axios
      .put(`${import.meta.env.VITE_URL}foodUpdate/${food._id}`, newFood)
      .then((result) => {
        console.log(result.data);
        if (result.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your food has been update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/manageMyFoods')
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="my-8">
      <title>Update Food</title>
      <div className="w-5/6 mx-auto">
        <form
          onSubmit={handleUpdateFoodFrom}
          className="fieldset bg-base-200 border-base-300 rounded-box border p-4"
        >
          {/* food name */}
          <label className="label">Food Name</label>
          <input
            type="text"
            name="name"
            defaultValue={food?.name}
            className="input w-full"
            placeholder="Food Name"
          />
          {/* food image */}
          <label className="label">Food Image</label>
          <input
            type="url"
            name="photo"
            defaultValue={food?.photo}
            className="input w-full"
            placeholder="Food Image"
          />
          {/* food quantity */}
          <label className="label">Food Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={food?.quantity}
            className="input w-full"
            placeholder="Food Quantity"
          />
          {/* Pickup Location */}
          <label className="label">PickuP Location</label>
          <input
            type="text"
            name="location"
            defaultValue={food?.location}
            className="input w-full"
            placeholder="PicKup Location"
          />
          {/* Expired Date*/}
          <label className="label">Expired Date</label>
          <input
            type="date"
            name="date"
            defaultValue={food?.date}
            className="input w-full"
            placeholder="Expired Date"
          />
          {/* additional  notes */}
          <label>Additional Notes</label>
          <textarea
            defaultValue={food?.command}
            name="command"
            className="textarea resize-none md:w-4/6 lg:w-1/2"
            placeholder="Additional Notes"
          ></textarea>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn mx-auto hover:btn-primary w-11/12 my-6"
            type="submit"
            value="Add Food"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
