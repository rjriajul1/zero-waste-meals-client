import React from "react";
import { Link} from "react-router";
import { FaFacebookF, FaGithub} from "react-icons/fa";
import logo from "../../../assets/url_logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-primary-content py-10 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Site Logo" className="w-24 mx-auto md:mx-0 mb-4" />
          <p className="font-bold text-lg">Food Donor Hub</p>
          <p className="text-sm mt-1">Sharing food. Spreading hope.</p>
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} Food Donor Hub. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/addFood" className="hover:underline">Add Food</Link></li>
            <li><Link to="/myFoodRequest" className="hover:underline">My Food Request </Link></li>
            <li><Link to="/manageMyFoods" className="hover:underline">Manage My Foods </Link></li>
            <li><Link to="/contactUs" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            <Link to="https://www.facebook.com/share/1JHcRoWsFS/" target="_blank" className="hover:text-white transition">
              <FaFacebookF size={26} className="hover:text-blue-500" />
            </Link>
            <Link to="https://github.com/rjriajul1" target="_blank" className="hover:text-white transition">
              <FaGithub size={26} className="hover:text-blue-500"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
