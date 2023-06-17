"use client";
import Nav from "@/components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/store/slice";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function Page() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()
  const [price, setPrice] = useState(0)
 

useEffect(() => {
    let totalPrice = 0;

    cart?.forEach((element) => {
      totalPrice += element.price;
    });

    setPrice(totalPrice);
  }, [cart]);
const handleSubmit = (elem) =>{
  dispatch(removeFromCart(elem))
  toast.dark('Item Remove From Cart',{
    position: toast.POSITION.BOTTOM_RIGHT
  })
}  
  return (
    <div className="text-white bg-[#191919] min-h-screen">
      <Nav />
      <section className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] m-auto  flex flex-col sm:flex-row  sm:gap-2  items-center justify-between gap-10 ">
        <div className="w-full sm:w-[60%] 2xl:w-[70%]">
          <h1 className="text-center text-3xl  sm:my-11 tracking-wider font-semibold">
            Shopping Cart
          </h1>
          {cart?.map((elem, idx) => {
            return (
              <div key={idx} className="flex py-5 border-y-[1px] border-white px-3 gap-2">
                <img
                  src={elem?.thumbnail}
                  alt=""
                  className="bg-cover bg-center bg-no-repeat max-w-[300px] max-h-[180px] w-[50%]"
                  width={150}
                  height={50}
                />
                <div className="text-white w-[50%]">
                  <div className="flex text-sm sm:text-lg justify-between ">
                    <div className="space-y-2 md:space-y-4 ">
                      <h1>{elem?.title || "sujaal"}</h1>
                      <h1 className="capitalize">{elem.category}</h1>
                      <h1>$ {elem.price}</h1>
                    </div>
                    <div>
                      <RxCross1 onClick={(elem)=>handleSubmit(elem)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-black px-4 py-3 text-sm  border-[1px] border-slate-950 text-white w-[300px] m-auto sm:w-[40%] 2xl:w-[390px] h-[230px]">
          <h1 className="mb-5">Order Summary</h1>
          <h1 className="px-3  border-y-[.51px] py-2 border-white">
            Estimated: <span className="float-right">$ {price}</span>
          </h1>
          <h1 className="px-3  border-b-[.51px] py-2 border-white">
            {" "}
            Shipping Charges: <span className="float-right">$5</span>
          </h1>
          <h1 className="py-4 px-3">
            Total: <span className="float-right">$ {price + 5}</span>
          </h1>
          <button className="w-[100%] py-1 bg-white text-black text-center hover:border-[1px] hover:bg-transparent hover:text-white transition-all font-semibold">
            Check Out
          </button>
        </div>
      </section>
    </div>
  );
}
