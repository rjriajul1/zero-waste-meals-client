import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import registerAnimated from "../../assets/lotties/register.json";
import Lottie from "react-lottie";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
  const { register } = useAuth();
  // lottie animationData
  const defaultOptions = {
    loop: true,
    animationData: registerAnimated,
  };

  // register form handle here
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData.entries());
    const { email, password, ...rest } = userInfo;
    console.log(email, password);
    // register firebase
    register(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your create an account successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie options={defaultOptions} width={350} height={350} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* photo URL */}
              <label className="label">Photo</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="PhotoURL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
             <div className="relative">
                 <input
                type={show? 'text' : 'password'}
                name="password"
                className="input"
                placeholder="Password"
              />
              <div onClick={()=> setShow(!show)} className="absolute top-2 right-4">
                {show ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
              </div>
             </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            <p className="text-[18px] mt-3">
              Already have an account ? Please{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
