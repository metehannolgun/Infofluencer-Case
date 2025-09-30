"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userData from "../lib/data.json"
import { motion } from 'framer-motion';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginFormComp = () => {
  const { register, handleSubmit} = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if(data.email === userData.email && data.password === userData.password){
       toast.success("Login successful 🎉");
       
       setTimeout(() => {
         router.push("/dashboard");
       }, 1500);
    }else {
        toast.error("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sol Taraf - Welcome Back Gradient */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-300 relative overflow-hidden">
        {/* Gradient Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-white/10 rounded-full"></div>
          
          {/* Ana curved shape */}
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-purple-600/30 to-transparent transform rotate-12 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/40 to-transparent rounded-full transform -translate-x-20 translate-y-20"></div>
        </div>
        
        {/* Welcome Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 text-white h-full min-h-[300px] lg:min-h-0">
          <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut"}}
           className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left">
            Welcome<br />Back!
          </motion.h1>
          <motion.p
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, ease: "easeOut" }} 
          className="text-lg lg:text-xl opacity-90 text-center lg:text-left">
            Please login to your account
          </motion.p>
        </div>
      </div>

      {/* Sağ Taraf - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Login</h2>
              <p className="text-gray-600 text-sm lg:text-base">Welcome back! Please login to your account.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="username@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 placeholder-gray-400 text-gray-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 placeholder-gray-400 text-gray-900 font-medium"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer" 
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container for mobile responsiveness */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="!top-4 !right-4 !left-4 md:!left-auto !z-50"
        toastClassName="!mb-2 !mx-2 md:!mx-0 !rounded-lg !shadow-lg"
      />
    </div>
  )
}

export default LoginFormComp