import React from 'react';
import { Link } from "react-router";
import { FaSadTear } from "react-icons/fa"; 
import error from '../assets/error.jpg'
const ErrorPage = () => {
    return (
       <div className="min-h-screen bg-base-200 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl">
        {/* Optional image if you prefer Freepik illustration */}
        <img src={error} alt="404 Not Found" className="w-72 mx-auto mb-6" />

        <div className="text-primary text-7xl mb-4 flex justify-center">
          <FaSadTear />
        </div>

        <h1 className="text-5xl font-bold text-primary mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved. Please return to the homepage.
        </p>

        <Link to="/">
          <button className="btn btn-primary">Go Back Home</button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;
