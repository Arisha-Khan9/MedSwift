"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { IProductType } from "../../../types/products";

const Hero = () => {
  const [categories, setCategories] = useState<{ category: string; products: IProductType[] }[]>([]);

  useEffect(() => {
    async function getServerSideProps() {
      try {
        const query = `{
          "trending": *[_type == "product" && pageType == "hero" && lower(category) == "trending"]
          | order(_createdAt desc) [0..7],
      
          "bestSellers": *[_type == "product" && pageType == "hero" && lower(category) == "best-sellers"]
          | order(_createdAt desc) [0..7],
      
          "newArrivals": *[_type == "product" && pageType == "hero" && lower(category) == "new-arrivals"]
          | order(_createdAt desc) [0..7],
      
          "exclusive": *[_type == "product" && pageType == "hero" && lower(category) == "exclusive"]
          | order(_createdAt desc) [0..7],
      
          "limitedEdition": *[_type == "product" && pageType == "hero" && lower(category) == "limited-edition"]
          | order(_createdAt desc) [0..7],
      
          "seasonal": *[_type == "product" && pageType == "hero" && lower(category) == "seasonal"]
          | order(_createdAt desc) [0..7],
      
          "specialOffers": *[_type == "product" && pageType == "hero" && lower(category) == "special-offers"]
          | order(_createdAt desc) [0..7]
        }`;
  
        const response = await client.fetch(query);
  
        console.log(" Data Fetched from Sanity:", response); // 👀 Debugging Line
  
        if (!response || Object.keys(response).length === 0) {
          console.error("❌ No data found in Sanity!");
        }
  
        const formattedCategories = [
          { category: "Trending", products: response.trending },
          { category: "Best Sellers", products: response.bestSellers },
          { category: "New Arrivals", products: response.newArrivals },
          { category: "Exclusive", products: response.exclusive },
          { category: "Limited Edition", products: response.limitedEdition },
          { category: "Seasonal", products: response.seasonal },
          { category: "Special Offers", products: response.specialOffers },
        ].filter(cat => cat.products.length > 0);
  
        console.log("🛠️ Formatted Categories:", formattedCategories); // 👀 Debugging Line
  
        setCategories(formattedCategories);
      } catch (error) {
        console.error(" Error fetching products:", error);
      }
    }
    getServerSideProps();
  }, []);
  

  return (
    <main className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      {categories.map((categoryData, index) => (
        <div key={categoryData.category} className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 font-[Integral] mt-8 mb-6 tracking-wide w-fit mx-auto">
            {categoryData.category}
          </h2>

          {categoryData.category === "Trending" || categoryData.category === "Special Offers" ? ( // 👈 Trending & Special Offers ke liye Carousel
            /** 🔹 Trending (Carousel) */
            <Carousel className="w-full max-w-7xl mx-auto">
              <CarouselContent>
                {categoryData.products.map((product) => (
                  <CarouselItem
                    key={product._id}
                    className={`flex justify-center items-center h-[400px]
                      sm:w-full sm:flex-none
                      md:w-1/2 md:flex-none
                      lg:w-1/3 lg:flex-none
                      xl:w-1/4 xl:flex-none
                    `}
                  >
                    <Card className="w-[280px] p-4 h-[380px] flex flex-col justify-between shadow-lg">
                      <CardContent className="flex flex-col items-center text-center">
                        <img
                          src={urlFor(product.productImage).url()}
                          alt={product.title}
                          className="w-full h-[180px] rounded-lg object-cover"
                        />
                        <div className="mt-4 flex flex-col gap-1">
                          <p className="text-gray-600 text-xs leading-tight line-clamp-3">
                            {product.description}
                          </p>
                          <p className="font-semibold text-lg mt-1">{product.title}</p>
                          <p className="text-black font-medium mt-1">${product.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            /** 🔹 Other Categories (Grid) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 mx-auto max-w-[1300px]">
              {categoryData.products.map((product) => (
                <Card key={product._id} className="w-full max-w-[300px] p-4 h-auto flex flex-col justify-between shadow-lg rounded-2xl bg-white">
                  <CardContent className="flex flex-col items-center text-center space-y-3">
                    <img
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      className="w-full h-[200px] rounded-lg object-cover"
                    />
                    <div className="mt-4 flex flex-col gap-2">
                      <p className="text-gray-600 text-sm leading-tight line-clamp-3">{product.description}</p>
                      <p className="font-semibold text-lg mt-1">{product.title}</p>
                      <p className="text-black font-medium mt-1">${product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Hero;
