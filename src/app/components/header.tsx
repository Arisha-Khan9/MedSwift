import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { BsPersonExclamation } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { SheetSide } from "./sheet";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";   


interface IProduct {
  icon?:any;
  icon0?:any;
  icon1?:any;
  id:number
}
let product: IProduct[] =[
  {
    icon:<FaRegHeart/>,
    id:2,
  },
  {
    icon:<BsPersonExclamation/>,
    id:3,
  },
  {
    icon1:<LuShoppingCart/>,
    id:4,
  },
]
export default function Header() {
    return (
      <main className="border-t-2 border-b-2 h-[80px]">
      <div className=" w-[full] h-[48px] md:pt-[24px] flex justify-between items-center">
        <div className="flex justify-center items-center">
        <SheetSide/>
         <img src="OIP.jpeg" alt="Logo" className="hidden md:block w-[160px] text-slate-100 text-[1px] md:mx-[80px] xl:mx-[150px]"/>
          {/* <h1 className=" text-black text-2xl md:text-3xl font-[Integral-CF] font-bold leading-[30.24px] md:leading-[38.4px] ml-[7px] md:ml-[-72px] xl:ml-[-120px]">
          MedSwift
            </h1> */}
        </div>

        {/* Navbar */}
       <div>
        
        <ul className="hidden xl:block">
          <li className=" gap-[58px] flex justify center items-center">
    
            <Link href="/" className="font-semibold hover:text-blue-500">Home</Link>
            <Link href="/product" className="font-semibold hover:text-blue-500">Product</Link>
            <Link href="/healthcare" className=" font-semibold hover:text-blue-500">Health Care</Link>
            <Link href="/healthArticle" className="font-semibold hover:text-blue-500">Health Articles</Link>
            <Link href="/blogs" className="font-semibold hover:text-blue-500">Blogs</Link>
            <Link href="/contact" className="font-semibold hover:text-blue-500">Contact</Link>
          </li>
        </ul>
       </div>

        {/* cart icon */}
        <div className="flex gap-[6px] md:gap-[44px] mr-[83px] md:mr-[100px] xl:mr-[150px]">
          {
            product.map((data) => {
              return(
                <div className="flex">
                <div className="">
                <p  className="hover:text-blue-500 text-lg md:text-2xl ">
                  {data.icon}
                </p>

              <div key={data.id}>
              <Link href={`/cart/${data.id}`}>
              <div className="flex">
              <p  className="hover:text-blue-500 text-lg md:text-2xl ">
                {data.icon1}
              </p>
              </div>
              </Link>
              </div>
           </div>
           </div>
              )
            })
          }
         <div className="flex font-bold hover:text-blue-500">
              <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
        </div>
      </div>
      </main>
    );
}