import React from "react";
import img1 from "../../assets/donate_1.jpg";
import img2 from "../../assets/donate_2.jpg";
import { motion } from "motion/react";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="bg-accent">
      <div className=" max-w-[1600px] mx-auto relative min-h-[500px]  mt-6 ">
        <div className="flex justify-between items-center gap-20 lg:flex-row-reverse ">
          {/* image */}
          <div className="flex-1">
            <motion.img
              animate={{ y: [-17, 50, -17] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={img1}
              className=" w-64 md:w-80 mt-4 mx-auto rounded-tl-4xl rounded-br-4xl border-t-7 border-b-7 border-blue-500 border-r-2 border-l-2 "
            />
            <motion.img
              animate={{ x: [-10, 80, -10] }}
              transition={{ duration: 20, repeat: Infinity }}
              src={img2}
              className=" w-64 md:w-80 mx-auto rounded-bl-4xl rounded-tr-4xl border-b-7 border-t-7 border-green-500 -mt-10 border-l-2 border-r-2"
            />
          </div>
          {/* content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Don’t Waste Food — Save a Life!
            </h1>
            <p className="py-6">
              Your extra food can become someone’s only meal. Join us in the
              fight against hunger. Donate today and make a difference.
            </p>
            <Link to="/addFood">
             <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
