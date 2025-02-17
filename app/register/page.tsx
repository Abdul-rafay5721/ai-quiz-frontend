// Commenting out the entire file to disable the /register route

// "use client";
// import { useAppDispatch } from "@/hook/redux.hook";
// import { login } from "@/redux/slices/authSlice";
// import { handleApiErrors } from "@/utils/api-endpoints";
// import { registerApi } from "@/utils/api/auth";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { toast } from "react-toastify";

// type Props = {};

// const RegisterPage = (props: Props) => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await registerApi(formData);
//       if (response.data) {
//         dispatch(login(response.data));
//         toast.success("Registration Successful");
//         router.push('/');
//         setLoading(false);
//       }
//       else {
//         toast.error("Registration Failed");
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log("error", error);
//       setLoading(false);
//       handleApiErrors(error);
//     }
//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Register | About Scripture</title>
//       </Head>
//       <div className="flex min-h-screen bg-gray-100 dark:bg-dark">
//         {/* Left Side */}
//         <div
//           className="hidden md:flex w-1/2 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://cdn.pixabay.com/photo/2018/03/21/05/29/question-mark-3245622_1280.jpg')",
//           }}
//         />

//         {/* Right Side */}
//         <div className="flex flex-col justify-center w-full md:w-1/2 p-6 sm:p-12 bg-gray-100 dark:bg-gray-900 shadow-lg">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
//               Register your account
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="userName"
//                 value={formData.userName}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="User Name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Email Address"
//                 required
//                 autoComplete="email"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Password"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition duration-300"
//                 disabled={loading}
//               >
//                 {loading ? "Signing Up..." : "Sign Up"}
//               </button>
//             </form>
//             <div className="mt-6 text-center">
//               <p className="text-gray-600">
//                 Already have an account?{" "}
//                 <Link href="/login" className="text-yellow-500 hover:underline">
//                   Go to Login
//                 </Link>
//               </p>
//             </div>
//             <div className="mt-6 text-center">
//               <Link href="/" className="text-yellow-500 hover:underline">
//                 Back to Home
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegisterPage;
