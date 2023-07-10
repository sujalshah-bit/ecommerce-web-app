import React from 'react';
import { BsTwitter,BsFacebook,BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Home Decoration </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Beatury Products</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Clothing</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Shipping Information</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex mt-2 space-x-2">
              <li>
                <a href="#" className="text-indigo-600 hover:text-white">
                  <BsFacebook/>
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-white">
                  <BsTwitter fill='blue'/>Twitter
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                 <BsInstagram/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
