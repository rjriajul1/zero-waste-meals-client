import React from "react";
import { NavLink} from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user,userSingOut } = useAuth();
  const handleSignOut = () => {
    userSingOut()
    .then(result=> {
      console.log(result);
    })
    .catch(error=> {
      console.log(error.message);
    })
  }
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
      </li>
      {user ? (
        ""
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
    <div className="navbar bg-base-100 shadow-sm">
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
        <h1 className="text-2xl font-bold text-green-500">
          <span className="text-blue-500">Zero</span>
          <span className="text-red-500">Waste</span>Meals
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && <button  onClick={handleSignOut} className="btn">Sign Out </button>}
      </div>
    </div>
  );
};

export default Navbar;
