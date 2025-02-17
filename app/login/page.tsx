"use client";
import { useAppDispatch } from "@/hook/redux.hook";
import { login } from "@/redux/slices/authSlice";
import { handleApiErrors } from "@/utils/api-endpoints";
import { loginApi } from "@/utils/api/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "@/styles/globals.css";

type Props = {};

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await loginApi({ email, password });
      if (response.data) {
        dispatch(login(response.data));
        toast.success("Login successful!");
        router.push("/quiz");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.log("error", error);
      handleApiErrors(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login | About Scripture</title>
      </Head>
      <div className="flex min-h-screen bg-gray-100 dark:bg-dark">
        {/* Left Side */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2018/03/21/05/29/question-mark-3245622_1280.jpg')",
          }}
        />

        {/* Right Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 sm:p-12 bg-gray-100 dark:bg-gray-900 shadow-lg">
          <div className="w-400 mx-[8rem]">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="••••••••"
                  required
                  autoComplete="password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Log In
              </button>

              {/* Divider */}
              {/* <div className="flex items-center justify-center">
                <span className="text-sm text-gray-400">
                  Don&apos;t have an account?{" "}
                </span>

                <Link
                  href="/register"
                  className="ml-2 text-sm text-yellow-600 hover:underline"
                >
                  Register
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
