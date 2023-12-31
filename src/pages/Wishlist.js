import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Wishlist = () => {
    const {state:{products,loading,error,wishlist}}=useProducts();

  let content;
  if(loading){
    content=<p>loading....</p>
    
  }
  if(error){
    content=<p>Something went wrong!!!</p>
  }
  if(!loading && !error && products.length ==0){
    content=<p>Nothing to show.....</p>
  }
  if(!loading && !error && products.length){
    content=  wishlist.map(product=><ProductCard
      key={product._id}
      product={product}
      ></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
      
    </div>
  );
};

export default Wishlist;