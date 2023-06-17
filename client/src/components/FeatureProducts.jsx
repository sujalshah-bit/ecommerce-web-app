import Link from "next/link";
import { useGetAllProductsQuery } from "../services/apiServices";
import { motion, AnimatePresence } from 'framer-motion';

export default function FeatureProducts() {
  const { data, isLoading, isFetching, isError, error } =
    useGetAllProductsQuery();
  if (isLoading || isFetching) {
    return (
      <>
        Loading
      </>
    );
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className=" text-white   py-10 ">


      <section className=" border-[1px] border-slate-500 rounded-lg  w-full md:w-[800px] lg:w-[1000px]   xl:w-[1200px] min-h-[400px] bg-transparent m-auto px-2 py-2">


        <h1 className="text-center tracking-wider md:text-2xl mb-6">
          Feature Products
        </h1>

        <div className="px-3 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">

          <Link href={`/products/${data?.products[0].id}`}>
            <div
              style={{
                backgroundImage: "linear-gradient(360deg, rgba(0,0,0,0.8520658263305322) 0%, rgba(0,0,0,0.8548669467787114) 35%, rgba(239,244,245,0) 100%)," +"url(" + data?.products[0].images[1] + ")",
              }}
              className={` bg-center bg-cover bg-no-repeat h-96   flex  flex-col justify-end px-3 gap-4`}
            >
            <h1 className="text-base md:text-lg">{data?.products[0].title}</h1>
            <p>

              {data?.products[0].description}
            </p>
            </div>
          </Link>

          <Link href={`/products/${data?.products[1].id}`}>
            <div
              style={{
                backgroundImage: "linear-gradient(360deg, rgba(0,0,0,0.8520658263305322) 0%, rgba(0,0,0,0.8548669467787114) 35%, rgba(239,244,245,0) 100%)," +"url(" + data?.products[1].thumbnail + ")",
              }}
              className={` bg-center bg-cover bg-no-repeat h-96   flex  flex-col justify-end px-3 gap-4`}
            >
               <h1 className="text-base md:text-lg">{data?.products[1].title}</h1>
            <p>

              {data?.products[1].description}
            </p>
            </div>
          </Link>

          <Link href={`/products/${data?.products[2].id}`}>
            <div
              style={{
                backgroundImage: "linear-gradient(360deg, rgba(0,0,0,0.8520658263305322) 0%, rgba(0,0,0,0.8548669467787114) 35%, rgba(239,244,245,0) 100%)," +"url(" + data?.products[2].thumbnail + ")",
              }}
              className={` bg-center bg-cover bg-no-repeat h-96   flex  flex-col justify-end px-3 gap-4`}
            >
               <h1 className="text-base md:text-lg">{data?.products[2].title}</h1>
            <p>

              {data?.products[2].description}
            </p>
            </div>
          </Link>

        </div>


      </section>
    </div>
  );
}
