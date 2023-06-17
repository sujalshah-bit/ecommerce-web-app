import React from 'react';

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
                <a href="#" className="text-gray-300 hover:text-white">Category 1</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Category 2</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Category 3</a>
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
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-square text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter-square text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram-square text-2xl"></i>
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
