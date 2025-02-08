import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

interface IProduct {
  title?: string;
  paragraph?: string;
  icons?: any;
  title0?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
}
let product: IProduct[] = [
  {
    title: "SHOP.CO",
    paragraph:
      "We have clothes that suits your style and which you’re proud to wear. From women to men.",
    icons: [
      <AiFillTwitterCircle />,
      <RiFacebookCircleFill />,
      <FaInstagram />,
      <AiFillGithub />,
    ],
  },
  {
    title0: "COMPANY",
    title1: "About",
    title2: "Fatures",
    title3: "Works",
    title4: "Career",
  },
  {
    title0: "HELP",
    title1: "Customer Support",
    title2: "Delivery Details",
    title3: "Terms & Conditions",
    title4: "Privacy Policy",
  },
  {
    title0: "FAQ",
    title1: "Account",
    title2: "Manage Deliveries",
    title3: "Orders",
    title4: "Payments",
  },
  {
    title0: "RESOURCES",
    title1: "Free eBooks",
    title2: "Development Tutorial",
    title3: "How to - Blog",
    title4: "Youtube Playlist",
  },
];

export default function Footer() {
  return (
    <div className="">
      <div className="w-[359px] md:w-full h-[900px] md:h-[420px] bg-[#F0F0F0] mt-[-58px] md:mt-[-1px]">
        <div className="grid grid-cols-3 md:flex flex-row justify-between px-7 md:px-16 xl:px-44">
          {product.map((data) => {
            return (
              <div className="justify-between items-center ">
                <div>
                  <p className="text-black text-4xl font-[Integral-CF] font-extrabold pt-[40px]  tracking-tighter leading-[30.24px] md:leading-[38.4px] mt-[50px] md:mt-[40px] ml-[-2] md:ml-[-12px] xl:ml-[-14px]">
                    {data.title}
                  </p>
                  <p className="w-[350px] md:w-[248px] mt-3 ml-[-4px] md:ml-[-14px] text-[#00000099] text-[16px] ">
                    {data.paragraph}
                  </p>
                  <p
                    className="w-[148px] h-[28px] flex text-[34px]
                            mt-[30px] md:mt-[40px] ml-[-5px] md:ml-[-17px] space-x-2 "
                  >
                    {data.icons}
                  </p>
                </div>
                
                <div className="hidden md:block w-[98px] h-[18px]  md:ml-[40px] ">
                  <p className=" md:mt-[-63px] tracking-[4px] font-semibold text-xl">
                    {data.title0}
                  </p>
                  <div
                    className="w-[249px] h-[133px] mt-[20px] ml-[px] space-y-4 
                               text-[#00000099] text-[18px] "
                  >
                    <p className="w-[px] ">{data.title1}</p>
                    <p>{data.title2}</p>
                    <p>{data.title3}</p>
                    <p>{data.title4}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer/>
        <div className="w-full text-black mt-[20px] md:mt-[50px] border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px]"></div>

        <div className="md:flex justify-between items-center mt-6 mx-3 md:mx-[60px] xl:mx-[80px]">
          <h3 className="text-[#00000099] text-[16px] md:text-[18px] mx-4 md:mx-0 xl:ml-[75px] ">
            Shop.co © 2000-2023, All Rights Reserved
          </h3>
          <div
            className="flex space-x-4
        text-xl "
          >
            <img
              src="/Visa.png"
              alt="logo"
              className="w-[56.61px] h-[40.03px] p-3 bg-[#FFFFFF]  border-t-[0.22px] border-b-[0.22px] border-r-[0.22px] border-l-[0.22px] rounded-[5.38px]"
            />
            <img
              src="/Mastercard.png"
              alt="logo"
              className="w-[56.61px] h-[40.03px] p-3 bg-[#FFFFFF] border-t-[0.22px] border-b-[0.22px] border-r-[0.22px] border-l-[0.22px] rounded-[5.38px]"
            />
            <img
              src="/Paypal.png"
              alt="logo"
              className="w-[56.61px] h-[40.03px] p-3 bg-[#FFFFFF] border-t-[0.22px] border-b-[0.22px] border-r-[0.22px] border-l-[0.22px] rounded-[5.38px]l"
            />
            <img
              src="/ Pay.png"
              alt="logo"
              className="w-[56.61px] h-[40.03px] p-3 bg-[#FFFFFF] border-t-[0.22px] border-b-[0.22px] border-r-[0.22px] border-l-[0.22px] rounded-[5.38px]"
            />
            <img
              src="/G Pay.png"
              alt="logo"
              className="w-[56.61px] h-[40.03px] p-3 bg-[#FFFFFF] border-t-[0.22px] border-b-[0.22px] border-r-[0.22px] border-l-[0.22px] rounded-[5.38px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
