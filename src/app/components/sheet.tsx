"use client"
import { IoMenuSharp } from "react-icons/io5";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import Link from "next/link";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="text-9xl font-extrabold bg-white text-black xl:hidden ">
            <IoMenuSharp/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="font-extrabold md:ml-28 pb-[28px]">MedSwift</SheetTitle>
            </SheetHeader>

            {/* Navbar */}
        <ul className="">
          <li className=" grid grid-cols-1 gap-y-3  font-semibold">
          <Link href="/" className="font-semibold hover:text-blue-500">Home</Link>
            <Link href="/product" className="font-semibold hover:text-blue-500">Product</Link>
            <Link href="/healthcare" className=" font-semibold hover:text-blue-500">Health Care</Link>
            <Link href="/healthArticle" className="font-semibold hover:text-blue-500">Health Articles</Link>
            <Link href="/blogs" className="font-semibold hover:text-blue-500">Blogs</Link>
            <Link href="/contact" className="font-semibold hover:text-blue-500">Contact</Link>
          </li>
        </ul>
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
