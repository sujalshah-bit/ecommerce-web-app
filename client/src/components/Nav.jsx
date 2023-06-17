"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
const Nav = () => {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const IsSignin = true;
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-black text-white z-20 bg-opacity-30 px-2 sm:px-4 py-4  flex justify-between items-center text-[12px] sm:text-sm ">
        <div className="text-[12px] sm:text-sm">E-Bucket</div>
        <ul className="hidden text-[12px] sm:text-sm sm:flex space-x-2 md:space-x-4">
          <Link href={"/"}>
            <li className="cursor">Home</li>
          </Link>
          <Link href={"/allproducts"}>
            <li className="cursor">Products</li>
          </Link>
          <Link href={"/contact"}>
            <li className="cursor">Contact Us </li>
          </Link>
        </ul>

        

        {IsSignin ? (
          <div className="flex items-center gap-3">
            <p>Sujal</p>
            <button>Log Out</button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        )}

        <Link href={'/cart'} className="relative flex gap-5 items-center">
          <AiOutlineShoppingCart
            fill="white"
            size={20}
            className="cursor-pointer"
          />
          <span className=" text-center transition-all absolute font-bold  bg-rose-600 text-white text-xs  w-[20px] h-[20px]  rounded-xl top-[-15px] right-[-13px] ">
            {count}
          </span>
        </Link>

        {toggle ? (
          <RxCross1
            size={15}
            className="sm:hidden transition-all"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaBars
            size={15}
            className="sm:hidden transition-all"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </nav>
      {toggle ? (
        <section className="  bg-black w-full h-full z-10 overflow-hidden sticky top-0 ">
          <ul className="transition-all text-white text-[12px] sm:text-sm flex flex-col items-center justify-center h-screen gap-4 px-4 ">
            <Link href={"/"}>
              <li className="text-lg">Home</li>
            </Link>
            <Link href={"/allproducts"}>
              <li className="text-lg">Products</li>
            </Link>
            <Link href={"/contact"}>
              <li className="text-lg">Contact Us </li>
            </Link>
          </ul>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
{
  /* <button
            aria-label="Increment value"
            onClick={() => dispatch(removeFromCart(0))}
          >
            rem
          </button>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(addToCart("sujal"))}
          >
            add
          </button>
          <span>{count}d</span>
         */
}
