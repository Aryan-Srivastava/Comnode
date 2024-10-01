"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

const SigninORSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Sign In" : "Sign Up"}
          </h2>
        </div>
        <div className="mt-6">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              className="text-blue-500 font-semibold ml-2"
              onClick={toggleForm}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninORSignup;
