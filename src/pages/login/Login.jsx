import React from "react";
import loginAnimated from "../../assets/lotties/login.json";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()
  // lottie animation data
  const defaultOptions = {
    loop: true,
    animationData: loginAnimated,
  };

  // handle login form
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login with same password and email
    login(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account login successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state || '/')
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const loginGoogle = () => {
    loginWithGoogle()
    .then(result=> {
       if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "login with google successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state || '/')
        }
    })
    .catch(error => {
      toast.error(error.message);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Login</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie options={defaultOptions} width={350} height={350} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <button onClick={loginGoogle} className="btn">
              <FcGoogle size={24} />
              Login with Google
            </button>
            <button className="btn">
              <FaGithub size={24} />
              Login with GitHub
            </button>
            <div className="divider text-xl divider-primary">or</div>
            <form onSubmit={handleLoginForm} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <p className="text-[18px]">
              Don't have an account ? please{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
