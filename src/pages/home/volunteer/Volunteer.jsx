import React from "react";
import donated from "../../../assets/food/food_donated.jpg";
import { Link } from "react-router";

const Volunteer = () => {
  return (
    <div>
        <h1 className="text-center text-3xl font-semibold  py-6">Become Volunteer</h1>
      <section class="bg-gray-100 py-12 px-6 md:px-16">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img className="rounded-2xl" src={donated} alt="" />
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Become a Volunteer
            </h2>
            <p class="text-gray-600 mb-4">
              Your small effort can bring a big smile to someone's face. We are
              looking for volunteers who are willing to help with food delivery,
              collection, or support during events.
            </p>

            <ul class="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>🛵 Deliver food to people in need</li>
              <li>📦 Help with packaging</li>
              <li>📲 Guide users on using the platform</li>
              <li>👫 Support at events and drives</li>
            </ul>

            <Link
              class="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition duration-300"
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
