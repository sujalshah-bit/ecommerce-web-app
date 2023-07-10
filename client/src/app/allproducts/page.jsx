"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useSearchProductQuery, useGetAllProductsQuery } from "@/services/apiServices";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  // State variables
  const [value, setValue] = useState(""); // Search input value
  const [category, setCategory] = useState(""); // Selected category filter
  const [sortBy, setSortBy] = useState(""); // Sort by option
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products using the API hook
  const { data: allProducts } = useGetAllProductsQuery();

  // Fetch search results using the API hook
  const { data: searchResults } = useSearchProductQuery(value);

  useEffect(() => {
    // Update filtered products when the dependencies change
    if (allProducts && allProducts.products) {
      // Make a copy of all products
      let filteredProducts = [...allProducts.products];

      // Sort products based on the selected sorting option
      if (sortBy === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      // Apply category filter if a category is selected
      if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category);
      }

      // Update the filtered products state
      setFilteredProducts(filteredProducts);
    }
  }, [category, sortBy, allProducts]);

  // Determine the products to render based on whether there are filtered products or search results
  const productsToRender = filteredProducts.length > 0 ? filteredProducts : searchResults?.products || [];

  return (
    <div className="text-white">
      <Nav />

      <section className="w-full sm:w-[650px] md:w-[700px] lg:w-[900px] xl:w-[1200px] m-auto">
        <div className="text-slate-400   flex gap-5  flex-wrap sm:justify-between  items-center px-10 sm:px-20 my-5">
          
            {/* Search input */}
            <input
              type="text"
              className="text-gray-400 w-56 sm:w-60 bg-transparent border-[1px] py-1  text-sm border-gray-800 px-3  outline-none "
              onChange={(e) => {
                setValue(e.target.value);
                setFilteredProducts([]); // Clear filtered products when search input changes
              }}
              placeholder="Search product"
            />

            {/* Sort by dropdown */}
            <select
              className="text-gray-500 outline-none border-[1px] py-1 text-sm border-gray-800 w-24 bg-transparent"
              onChange={(e) => setSortBy(e.target.value)}
              id="sort-select"
              name="sort-select"
            >
              <option className="bg-[#0F0014]" value="">Sort By</option>
              <option className="bg-[#0F0014]" value="lowToHigh">Low to High</option>
              <option className="bg-[#0F0014]" value="highToLow">High to Low</option>
            </select>

            {/* Category filter dropdown */}
            <select
              className="text-gray-500 outline-none  border-[1px] py-1 text-sm border-gray-800 w-24 bg-transparent"
              onChange={(e) => setCategory(e.target.value)}
              id="category-select"
              name="category-select"
            >
              <option className="bg-[#0F0014]" value="">Category</option>
              <option className="bg-[#0F0014]" value="smartphones">Smartphones</option>
              <option className="bg-[#0F0014]" value="laptops">Laptops</option>
              <option className="bg-[#0F0014]" value="fragrances">Fragrances</option>
              <option className="bg-[#0F0014]" value="skincare">Skincare</option>
              <option className="bg-[#0F0014]" value="groceries">Groceries</option>
              <option className="bg-[#0F0014]" value="home-decoration">Home Decoration</option>
            </select>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-10 gap-4 place-items-center">
          {productsToRender.length > 0 ? (
            // Display filtered products or search results
            productsToRender.map((product, idx) => (
              <Link
                className="w-[140px] h-[100px] sm:w-[230px] sm:h-[160px] bg-center bg-cover bg-no-repeat flex flex-col justify-end px-3 gap-2"
                style={{
                  backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.8520658263305322) 0%, rgba(0,0,0,0.8548669467787114) 35%, rgba(239,244,245,0) 100%), url(${product.thumbnail})`,
                }}
                key={idx}
                href={`products/${product.id}`}
              >
                <h1 className="text-xs sm:text-base tracking-wide font-semibold text-slate-300">
                  {product.title}
                </h1>
                <div className="hidden sm:block">
                  <p className="text-xs sm:h-[35px]  text-slate-500 overflow-hidden">{product.description}</p>
                </div>
              </Link>
            ))
          ) : (<>No data avaiable</>)}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
