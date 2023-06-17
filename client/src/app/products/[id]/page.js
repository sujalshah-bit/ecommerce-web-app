"use client";
import Nav from "@/components/Nav";
import { useGetProductQuery } from "@/services/apiServices";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { addToCart, removeFromCart } from "../../../store/slice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export default  function Product() {
  const { id } = useParams()
  const { data, isLoading, isFetching, isError, error } =
  useGetProductQuery(id);
  const dispatch = useDispatch()
  const [src, setSrc] = useState();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  const star = [];

  for (let i = 1; i <= Math.round(data?.rating); i++) {
    star.push(<AiFillStar fill="yellow" />);
  }
  const remStar = [];

  for (let i = 1; i <= 5 - star.length; i++) {
    remStar.push(<AiOutlineStar fill="yellow" />);
  }

  const handleSubmit = () =>{
     dispatch(addToCart(data))
     
      // Display the toast message
    toast.success('Item added to cart!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000
    });
   
   
  }

  return (
    <>
      <section className="bg-[#0F0014] text-white min-h-screen">
        <Nav bg={"#0F0014"}  />
        <div className="mt-10 flex flex-col gap-1 sm:flex-row  w-full sm:w-[650px] md:w-[700px] lg:w-[900px] xl:w-[1200px] m-auto ">
          <div className="flex flex-col px-2 sm:w-[40%]">
            <img
              src={src ? src : data?.thumbnail}
              alt=""
              className="transition-all"
            />
            <div className="flex gap-5 my-5 justify-center">
              <img
                onClick={() => setSrc(data?.images[0])}
                src={data?.images[0]}
                height={50}
                width={50}
                alt=""
              />
              {data?.images[1] ? (
                <img
                  onClick={() => setSrc(data?.images[1])}
                  src={data?.images[1]}
                  height={50}
                  width={50}
                  alt=""
                />
              ) : (
                <></>
              )}
              {data?.images[2] ? (
                <img
                  onClick={() => setSrc(data?.images[2])}
                  src={data?.images[2]}
                  height={50}
                  width={50}
                  alt=""
                />
              ) : (
                <></>
              )}
              {data?.images[3] ? (
                <img
                  onClick={() => setSrc(data?.images[3])}
                  src={data?.images[3]}
                  height={50}
                  width={50}
                  alt=""
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-14 place-items-center sm:place-items-start px-1 sm:w-[60%] ">
            <h1 className="font-semibold col-span-full text-2xl tracking-wider">
              {data?.title}
            </h1>
            <button className="w-28 h-10 rounded font-semibold border-2 border-rose-600  transition-all ">
              {" "}
              $ {data?.price}
            </button>
            <div className="flex gap-3 sm:col-span-full">
              {star}
              {remStar}
            </div>
            <p className="col-span-full px-3 text-gray-400">
              {data?.description} <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              pariatur doloribus explicabo blanditiis, iure sit labore
              doloremque libero eaque, neque laboriosam, vel voluptatibus
              molestias maxime ipsa aliquam dolor hic totam?
            </p>
            <button className="w-28 h-10 font-semibold rounded bg-rose-600 hover:border-2 hover:border-rose-600 hover:bg-transparent transition-all ">
              {" "}
              Buy Now
            </button>
            <button onClick={handleSubmit} className="w-28 h-10 font-semibold rounded bg-rose-600 hover:border-2 hover:border-rose-600 hover:bg-transparent  transition-all capitalize ">
              {" "}
              Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

