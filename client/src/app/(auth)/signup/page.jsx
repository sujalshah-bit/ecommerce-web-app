"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthSignUpMutation } from "@/services/authServices";
import {  useRouter } from "next/navigation";

export default function Page(params) {
  const router = useRouter()
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const [signUpMutation, { loading, error }] = useAuthSignUpMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await signUpMutation({ variables: values });

        // Handle the response from the server
       
        if (!error) {
          console.log("Sign up successful!");
          router.push('/login')
        } else {
          console.log("Sign up failed!");
        }
      } catch (error) {
        console.log("Error:", error);
      }
      console.log(values);
    },
  });

  return (
    <div>
      <Nav />
      <div className="flex  flex-col items-center justify-center min-h-[90vh] ">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-900 p-6 shadow-md rounded-lg mt-6 md:mt-0 ">
            <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-1"
                >
                  Name
                </label>
                <div className=" bg-gray-800 rounded-lg px-3 flex items-center">
                  <FiUser className="mr-2 text-white" />
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...formik.getFieldProps("name")}
                    className="bg-gray-800 outline-none rounded-lg py-2 px-4 text-white w-full"
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500">{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-1"
                >
                  Email
                </label>
                <div className=" bg-gray-800 rounded-lg px-3 flex items-center">
                  <FiMail className="mr-2 text-white" />
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className="bg-gray-800 outline-none rounded-lg py-2 px-4 text-white w-full"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-white font-medium mb-1"
                >
                  Password
                </label>
                <div className="bg-gray-800 px-3 rounded-lg flex items-center">
                  <FiLock className="mr-2 text-white" />
                  <input
                    placeholder="Password"
                    type="password"
                    id="password"
                    {...formik.getFieldProps("password")}
                    className="bg-gray-800 outline-none rounded-lg py-2 px-4 text-white w-full"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Sign Up
              </button>
            </form>
            <p className="text-white mt-3">
              Already a User?{" "}
              <Link href={"/login"} className="text-indigo-500 cursor-pointer">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
