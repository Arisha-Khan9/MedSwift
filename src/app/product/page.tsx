"use client";

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { allProducts, four } from '@/sanity/lib/query';
import { IProductType } from '../../../types/products';
import { urlFor } from '@/sanity/lib/image';
import Footer from '../components/footer';


const Products = () => {
  const [product, setProduct] = useState<IProductType[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: IProductType[] = await client.fetch(four);
        console.log('Fetched products:', response); // Debugging line
        setProduct(response);
      } catch (error) {
        console.error('Error fetching products:', error); // Debugging line
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div>
        <h1 className='text-5xl font-bold mb-4 text-center '>Best Selling Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.length === 0 ? (
        <p>No products available</p>
      ) : (
        product.map((product) => (
          <div key={product._id} className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300'>
            <img src={urlFor(product.productImage).url()}
             alt={product.title} width={200} height={200} className='w-full h-auto mb-4 rounded-lg object-cover'/>
            <div>
            <p className='text-gray-600'>{product.description}</p>
            <p className='font-semibold text-lg mt-4'>{product.title}</p>
            <p className='text-black font-medium mt-2'>
              {product.price ? `$${product.price}` :"price not available" }</p>
            </div>
            
          </div>
     
        ))
      )}
       </div>
       <Footer/>
    </div>
  );
};

export default Products;