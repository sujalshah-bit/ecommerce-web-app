"use client";
import { useAuthLogOutQuery } from "@/services/authServices";
import { checkSignIn } from "@/store/loginSlice";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const count = useSelector((state) => state.cart.count);
  const user = useSelector((state) => state.user.name);
  const isSignedIn = useSelector((state) => state.isSignIn.isLoggedIn);
  const { refetch } = useAuthLogOutQuery();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleLogOut = async () => {
    await refetch();
    dispatch(checkSignIn(true));
  };

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
          <Link href={"/contactus"}>
            <li className="cursor">Contact Us</li>
          </Link>
        </ul>

        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <Link href={"/signup"}>
              <button>Sign Up</button>
            </Link>
            <Link href={"/login"}>
              <button>Log In</button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <p>{user}</p>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        )}

        <Link href={"/cart"} className="relative flex gap-5 items-center">
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
      {toggle && (
        <section className="  bg-black w-full h-full z-10 overflow-hidden sticky top-0 ">
          <ul className="transition-all text-white text-[12px] sm:text-sm flex flex-col items-center justify-center h-screen gap-4 px-4 ">
            <Link href={"/"}>
              <li className="text-lg">Home</li>
            </Link>
            <Link href={"/allproducts"}>
              <li className="text-lg">Products</li>
            </Link>
            <Link href={"/contactus"}>
              <li className="text-lg">Contact Us</li>
            </Link>
            {isSignedIn ? (
              <>
                <Link href={"/signup"}>
                  <button className="text-lg">Sign Up</button>
                </Link>
                <Link href={"/login"}>
                  <button className="text-lg">Log In</button>
                </Link>
              </>
            ) : (
              <>
                <p className="text-lg">{user}</p>
                <button onClick={handleLogOut} className="text-lg">Log Out</button>
              </>
            )}
          </ul>
        </section>
      )}
    </>
  );
};

export default Nav;

// import { useAuthLogOutQuery } from "@/services/authServices";
// import { checkSignIn } from "@/store/loginSlice";
// import Link from "next/link";
// import { useState } from "react";
// import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
// import { FaBars } from "react-icons/fa";
// import { RxCross1 } from "react-icons/rx";
// import { useSelector, useDispatch } from "react-redux";
// const Nav = () => {
//   const count = useSelector((state) => state.cart.count);
//   const user = useSelector((state) => state.user.name);
//   const IsSignin = useSelector((state) => state.isSignIn.isLoggedIn);
//   const {  refetch } = useAuthLogOutQuery();

//   const dispatch = useDispatch();
//   const [toggle, setToggle] = useState(false);

//   const handleLogOUt = async() =>{
//     await refetch();
//     dispatch(checkSignIn(true))
//   }
//   return (
//     <>
//       <nav className="sticky top-0 bg-black text-white z-20 bg-opacity-30 px-2 sm:px-4 py-4  flex justify-between items-center text-[12px] sm:text-sm ">
//         <div className="text-[12px] sm:text-sm">E-Bucket</div>
//         <ul className="hidden text-[12px] sm:text-sm sm:flex space-x-2 md:space-x-4">
//           <Link href={"/"}>
//             <li className="cursor">Home</li>
//           </Link>
//           <Link href={"/allproducts"}>
//             <li className="cursor">Products</li>
//           </Link>
//           <Link href={"/contactus"}>
//             <li className="cursor">Contact Us </li>
//           </Link>
//         </ul>

//         {IsSignin ? (
//           <div className="flex items-center gap-3">
//            <Link href={'/signup'}><button>Sign Up</button></Link>
//            <Link href={'/login'}><button>Log In</button></Link>
//           </div>
//         ) : (
//           <div className="flex items-center gap-3">
//             <p>{user}</p>
//             <button onClick={handleLogOUt} >Log Out</button>
//           </div>
//         )}

//         <Link href={'/cart'} className="relative flex gap-5 items-center">
//           <AiOutlineShoppingCart
//             fill="white"
//             size={20}
//             className="cursor-pointer"
//           />
//           <span className=" text-center transition-all absolute font-bold  bg-rose-600 text-white text-xs  w-[20px] h-[20px]  rounded-xl top-[-15px] right-[-13px] ">
//             {count}
//           </span>
//         </Link>

//         {toggle ? (
//           <RxCross1
//             size={15}
//             className="sm:hidden transition-all"
//             onClick={() => setToggle(!toggle)}
//           />
//         ) : (
//           <FaBars
//             size={15}
//             className="sm:hidden transition-all"
//             onClick={() => setToggle(!toggle)}
//           />
//         )}
//       </nav>
//       {toggle ? (
//         <section className="  bg-black w-full h-full z-10 overflow-hidden sticky top-0 ">
//           <ul className="transition-all text-white text-[12px] sm:text-sm flex flex-col items-center justify-center h-screen gap-4 px-4 ">
//             <Link href={"/"}>
//               <li className="text-lg">Home</li>
//             </Link>
//             <Link href={"/allproducts"}>
//               <li className="text-lg">Products</li>
//             </Link>
//             <Link href={"/contact"}>
//               <li className="text-lg">Contact Us </li>
//             </Link>
//           </ul>
//         </section>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default Nav;
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
