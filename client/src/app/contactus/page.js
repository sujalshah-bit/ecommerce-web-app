"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useAuthMiddlewareQuery } from "@/services/authServices";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Page() {
  const [faqOpen, setFaqOpen] = useState(false);
  const router = useRouter();
  const { data, error, refetch } = useAuthMiddlewareQuery();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  const handleFaqClick = () => {
    setFaqOpen(!faqOpen);
  };

  useEffect(() => {
    async function checkLoginfunc() {
      await refetch();
      console.log(error);
      if (error?.status === 402 || error?.status === 401) {
        // Navigate to login page
        router.push("/login");
      }
    }
    checkLoginfunc();
  }, [refetch]);

  return (
    <div>
      <Nav />
      <div className="text-white py-10 px-5">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="">
          <div className="w-[300px] bg-gray-900 rounded-lg shadow-md px-3 py-5 m-auto">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4 bg-gray-800 px-3 rounded-lg flex justify-center items-center">
                <label htmlFor="name" className="block">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-800 outline-none py-2 px-3 rounded-lg text-white"
                />
              </div>
              {/* Add more form input fields as needed */}
              <div className="mb-4 bg-gray-800 px-3 rounded-lg flex items-center">
                <label htmlFor="email" className="block ">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-800   outline-none  py-2 px-3 rounded-lg text-white"
                />
              </div>
              <div className="mb-4 bg-gray-800 px-3 rounded-lg flex items-center">
                <label htmlFor="subject" className="block ">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-800   outline-none  py-2 px-3 rounded-lg text-white"
                />
              </div>
              <div className="mb-4 bg-gray-800 px-3 rounded-lg flex items-center">
                <label htmlFor="message" className="block ">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-800   outline-none  py-2 px-3 rounded-lg text-white"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <h2
              className="text-xl font-semibold cursor-pointer mb-4"
              onClick={handleFaqClick}
            >
              Frequently Asked Questions
            </h2>
            {faqOpen && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Question 1</h3>
                <p className="mb-4">Answer 1</p>
                <h3 className="text-lg font-semibold mb-2">Question 2</h3>
                <p className="mb-4">Answer 2</p>
                {/* Add more FAQs as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
