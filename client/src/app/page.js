"use client";

import Nav from "@/components/Nav";
import { useState,useEffect } from "react";

import FeatureProducts from "@/components/FeatureProducts";
import Footer from "@/components/Footer";

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))  
export default function Home() {
  
  return (
    <> 
     {/* bg-[url(../assets/bg2.jpg)] */}
    {/* <Provider store={store}> */}
          <Nav />
        <section
          className={` text-white bg-center bg-cover bg-no-repeat   bg-[url(../assets/bg1.jpg)]  h-screen z-10`}
        >
  
        </section>
        {/* <div className=" bg-red-500"></div> */}
       <FeatureProducts/>
       {/* </Provider> */}
       <Footer/>
    </>
  );
}
