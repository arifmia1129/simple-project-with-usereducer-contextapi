import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { state: { products, loading, isError, error }, dispatch } = useProducts();

  let content;

  if (loading) {
    content = <div className="h-screen w-[100vw] flex justify-center items-center">
      <p>Loading...</p>
    </div>
  }
  if (isError) {
    content = <div className="h-screen w-[100vw] flex justify-center items-center">
      <p>{error}</p>
    </div>
  }
  if (!loading && !isError && !products.length) {
    content = <div className="h-screen w-[100vw] flex justify-center items-center">
      <p>Nothing to show</p>
    </div>
  }
  if (!loading && !isError && products.length) {
    content = products?.map((product, index) => <ProductCard product={product} key={index} />)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        content
      }
    </div>
  );
};

export default Home;
