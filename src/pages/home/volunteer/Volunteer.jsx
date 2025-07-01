import React from "react";
import donated from "../../../assets/food/food_donated.jpg";
import { Link } from "react-router";

const Volunteer = () => {
  return (
    <div className="mt-30">
        <h1 className="text-center text-primary text-3xl font-bold  mb-10">Become Volunteer</h1>
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img className="rounded-2xl" src={donated} alt="" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Become a Volunteer
            </h2>
            <p className="text-gray-600 mb-4">
              Your small effort can bring a big smile to someone's face. We are
              looking for volunteers who are willing to help with food delivery,
              collection, or support during events.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>🛵 Deliver food to people in need</li>
              <li>📦 Help with packaging</li>
              <li>📲 Guide users on using the platform</li>
              <li>👫 Support at events and drives</li>
            </ul>

            <Link to="/contactUs"
              className="inline-block hover:bg-primary hover:text-white outline-0 text-black px-6 py-3 rounded-xl shadow  transition duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
