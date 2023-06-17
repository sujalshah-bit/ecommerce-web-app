'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}> {children}</Provider>
        <ToastContainer/>
      </body>
    </html>
  );
}
