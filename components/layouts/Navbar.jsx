import { PiSneakerBold } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="mb-4 flex items-center justify-between py-4 md:py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <PiSneakerBold className="h-auto w-6" />
          Snicks
        </a>
        <div className="hidden lg:block">
          <nav className="  gap-12 lg:flex">
            <Link href="/" className="text-lg font-semibold text-indigo-500">
              Home
            </Link>
            <Link
              href="/products"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </Link>
          </nav>
        </div>
        <a
          href="#"
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          <div className="flex space-x-2">
            <AiOutlineShoppingCart className="h-auto w-4" />
            <span>Cart</span>
          </div>
        </a>
        <div className="lg:hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Products</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Cart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
