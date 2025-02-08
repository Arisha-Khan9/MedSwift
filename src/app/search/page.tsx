"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SearchBar from "../components/SearchBar";
import { IProductType } from "../../../types/products";

const Search = () => {
  const [products, setProducts] = useState<IProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductType[]>([]);
  const [query, setQuery] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [showList, setShowList] = useState(false);
  const router = useRouter();

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery.trim() !== "") {
      try {
        const response = await axios.get("https://template6-six.vercel.app/api/products");
        const products = response.data;
        const filtered: IProductType[] = products.filter((product: IProductType) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
        setNotFound(filtered.length === 0);
        setShowList(true);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      setShowList(false);
      setFilteredProducts([]);
      setNotFound(false);
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-full max-w-2xl">
        {/* 🔍 Search Bar */}
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* ❌ No Products Found */}
      {notFound && <div className="mt-4 text-red-500">Not Available</div>}

      {/* 📜 Filtered Products List */}
      {showList && (
        <div className="mt-4 w-full max-w-2xl">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-300 rounded-md mb-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleProductClick(product._id)}
            >
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
