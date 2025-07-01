import React from "react";
import Food from "./Food";
import { motion } from "motion/react"
import { Link } from "react-router";
const FeaturedFood = ({foods}) => {
 
  return (
    <div className="max-w-[1600px] mx-auto mt-30">
      <h1 className="text-3xl text-primary font-bold mb-10 text-center">
        Featured Food
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {foods?.map(food=><Food key={food._id} food={food}></Food>)}
      </div>
     <div className="py-6 flex justify-center">
      <Link to='/availableFoods'> <motion.button whileHover={{scale:1.1}} whileTap={{scale: 0.95}} className="btn text-xl hover:btn-primary w-80">Show All</motion.button></Link>
     </div>
    </div>
  );
};

export default FeaturedFood;
