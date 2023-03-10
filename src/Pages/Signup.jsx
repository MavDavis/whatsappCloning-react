import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { month, date, year } from "../assets/dummyData";
import { Link } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import logo from '../assets/logowhatsapp.png'
const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePasswordType = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  const { googleSignIn, formDetails, setFormDetails, emailSignup , error, errMssg} = useStateContext();
  const { Name, password, dates, email, years, months } = formDetails;
  const { loggedIn } = useStateContext();
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
    emailSignup()
  };
  if (loggedIn) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="flex min-h-screen w-full  relative dark:bg-darkest-bg bg-white justify-center ">
        <div className="flex min-h-full flex-col justify-center items-center py-5 sm:px-6 lg:px-8 relative w-full">
        <div className="relative w-full flex items-center justify-center mt-3">
            <h2 className=" text-center text-3xl font-bold tracking-tight dark:text-white text-gray-900">
              Sign up your account
            </h2>
            <img className="w-10 h-10 ml-2" src={logo} alt="whatsapp logo" />
          </div>
          {error &&            <p className="mt-3 text-red-300 text-center flex mx-auto w-fui">{errMssg}</p>
}
          <div className="mt-8 w-full sm:w-1/2 px-8">
            <div className="bg-white py-5 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={submitForm}>
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      id="Name"
                      name="Name"
                      value={Name}
                      onChange={changeInput}
                      type="text"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    />
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
                      type="email"
                      value={email}
                      onChange={changeInput}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full mt-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium capitalize text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <div className="w-full flex items-center  justify-between">
                    <select
                      name="months"
                      value={months}
                      onChange={changeInput}
                      className="w-1/3 border block rounded e appearance-none  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    >
                      {month.map((item) => (
                        <option key={item} >
                          {item}
                        </option>
                      ))}
                    </select>

                    <select
                      name="dates"
                      value={dates}
                      onChange={changeInput}
                      className="w-1/4 border rounded block e appearance-none  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    >
                      {date.map((item) => (
                        <option key={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      name="years"
                      value={years}
                      onChange={changeInput}
                      className="w-1/4 border rounded block e appearance-none  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-darker-bg focus:outline-none focus:ring-darker-bg sm:text-sm"
                    >
                      {year().map((item) => (
                        <option key={item} >
                          {item}
                        </option>
                      ))}
                    </select>
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
                      autoComplete="current-password"
                      required
                      onChange={changeInput}
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

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-darker-bg focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500 flex items-center">
                      Or continue with
                      <button
                        className="flex items-center ml-2 hover:translate-x-1 hover:transition-all"
                        onClick={googleSignIn}
                      >
                        <FcGoogle />
                        <span className="text-sm">Google</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="flex items-center text-slate-800 dark:text-slate-200 mt-3">
            Signed up already?{" "}
            <Link
              className="text-teal-600 hover:tracking-wide ml-2"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    );
  }
};

export default Signup;
