import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, userSingOut } = useAuth();
  const handleSignOut = () => {
    userSingOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/availableFoods"
        >
          Available Foods
        </NavLink>
      </li>
     
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/ContactUs"
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <>
         <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/addFood"
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/manageMyFoods"
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/myFoodRequest"
        >
          My Food Request
        </NavLink>
      </li></>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : ""
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : ""
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-accent shadow-xl ">
      <div className="navbar max-w-[1600px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-2xl hidden md:block font-bold ">
          <span className="text-blue-500">Zero</span>
          <span className="text-red-500">Waste</span>Meals
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5 flex items-center gap-2 md:gap-4">
          <input
            type="checkbox"
            value="abyss"
            className="toggle theme-controller"
          />
          {user ? (
            <img
              className="md:w-16 w-10 h-10 md:h-16 -mr-4 md:-mr-0 rounded-full object-fill"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <CgProfile size={50} />
          )}
        </div>

        {user && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSignOut}
            className="btn btn-xs md:btn-md hover:btn-primary"
          >
            Sign Out
          </motion.button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
