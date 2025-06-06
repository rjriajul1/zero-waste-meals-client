import React from "react";
import { motion } from "motion/react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const UpdateFood = () => {
  const data = useLoaderData();
  const navigate = useNavigate()

  const handleUpdateFoodFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    axios
      .put(`${import.meta.env.VITE_URL}foodUpdate/${data._id}`, newFood)
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
            defaultValue={data?.name}
            className="input w-full"
            placeholder="Food Name"
          />
          {/* food image */}
          <label className="label">Food Image</label>
          <input
            type="url"
            name="photo"
            defaultValue={data?.photo}
            className="input w-full"
            placeholder="Food Image"
          />
          {/* food quantity */}
          <label className="label">Food Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={data?.quantity}
            className="input w-full"
            placeholder="Food Quantity"
          />
          {/* Pickup Location */}
          <label className="label">PickuP Location</label>
          <input
            type="text"
            name="location"
            defaultValue={data?.location}
            className="input w-full"
            placeholder="PicKup Location"
          />
          {/* Expired Date*/}
          <label className="label">Expired Date</label>
          <input
            type="date"
            name="date"
            defaultValue={data?.date}
            className="input w-full"
            placeholder="Expired Date"
          />
          {/* additional  notes */}
          <label>Additional Notes</label>
          <textarea
            defaultValue={data?.command}
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
