import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-16  bg-base-200 mt-10 p-4">
      <div className="flex-1">
        <aside>
        <img src={`url_logo.png`} alt="" />
        <p className="text-2xl font-bold">
          <span className="text-blue-500">Zero</span>
          <span className="text-red-500">Waste</span>
          <span className="text-green-600">Meals</span>
        </p>
        <h2 className="text-xl font-semibold py-2">Together, We Can End Hunger.</h2>
        <p>
          At ZERO WASTE MEALS, we connect food donors with those in need.
          Whether you're a restaurant, grocery store, or individual, your
          surplus food can make a difference. Every meal shared is a step toward
          a hunger-free community. Join us in building a more compassionate and
          sustainable world.
        </p>
        <h2 className="flex items-center gap-3 text-xl pt-3"><FaPhone color="green" size={20} /> +8804245-27652</h2>
        <h2 className="flex items-center gap-3"><MdOutlineMail size={20} /><Link  to="mailto:isrj173@gmail.com">isrj173@gmail.com</Link> </h2>
      </aside>
      </div>
      <div>
          <h6 className="footer-title">useful Links</h6>
        <nav className="flex flex-col">
          <Link to='/' className="link link-hover">HOME</Link>
          <Link to='/availableFoods' className="link link-hover">Available Food</Link>
          <Link to='/addFood' className="link link-hover">Add Food</Link>
          
          <Link to='/manageMyFoods' className="link link-hover">Manage My Food</Link>
          
          <Link to='/myFoodRequest' className="link link-hover">MyFoodRequest</Link>
          
        </nav>
      </div>
      <div>
          <h6 className="footer-title">Company</h6>
        <nav className="flex-col flex">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </div>
      <div>
          <h6 className="footer-title">Legal</h6>
        <nav className="flex flex-col">
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
