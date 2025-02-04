import Head from "next/head";
import React from "react";

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Forgot Password | About Scripture</title>
      </Head>
      <div className="flex min-h-screen bg-gray-100">
        {/* Left Side */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554355409-7d69eaad80d9?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Right Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 sm:p-12 bg-white shadow-lg">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Forgot Password
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your email address, and we&apos;ll send you a link to reset your password.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email Address"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition duration-300"
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Remembered your password?{" "}
                <a href="/login" className="text-yellow-500 hover:underline">
                  Go to Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
