import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useStateContext } from "../Contexts/ContextProvider";
import logo from '../assets/logowhatsapp.png'

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const { loggedIn, googleSignIn, logout, formDetails, setFormDetails, login } =
    useStateContext();
  const { password, email } = formDetails;

  const togglePasswordType = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  const changeInput = (event) => {
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    login();
  };
  if (loggedIn) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="flex min-h-screen w-full  relative dark:bg-darkest-bg bg-white justify-center">
        <div className="flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8 relative w-full">
          <div className="relative w-full flex items-center justify-center mt-3">
            <h2 className=" text-center text-3xl font-bold tracking-tight dark:text-light-bg dark:text-white text-slate-800">
              Sign in to your account
            </h2>
            <img className="w-10 h-10 ml-2" src={logo} alt="whatsapp logo" />
          </div>

          <div className="mt-8 w-full sm:w-1/2 px-8">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="w-full">
                {/* <button onClick={logout}>logout</button> */}
                <button
                  onClick={googleSignIn}
                  className="flex justify-center items-center ml-2 hover:transition-all bg-light-header-bg hover:light-bg dark:hover:bg-dark-bg dark:bg-darker-bg w-full rounded-lg px-3 py-2 dark:text-slate-300 text-center"
                >
                  Sign in with
                  <span className="flex items-center ml-2">
                    <FcGoogle />
                    oogle
                  </span>
                </button>
              </div>
              <form className="space-y-6" onSubmit={submitForm}>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white rounded-sm p-2 text-gray-500 flex items-center capitalize">
                        Or continue with email
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={changeInput}
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={passwordType}
                      value={password}
                      onChange={changeInput}
                      autoComplete="current-password"
                      required
                      className="block w-full relative appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    />
                    <div className="absolute right-4 top-3 z-1000 w-fit cursor-pointer">
                      {passwordType === "password" ? (
                        <AiOutlineEye onClick={togglePasswordType} />
                      ) : (
                        <FaRegEyeSlash onClick={togglePasswordType} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-slate-200 dark:text-slate-800 ">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-darker-bg focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="flex items-center mt-3 text-slate-800 dark:text-slate-300">
            Not a user ?
            <Link
              className="ml-2 text-teal-600 hover:tracking-wide"
              to="/signup"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    );
  }
};

export default Login;
