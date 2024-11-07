'use client'
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#3498db] text-white p-4 w-full fixed top-0 z-[1000]">
      <nav className="flex justify-between items-center px-8">
        <div className="text-2xl font-bold">🦋GoodHabit🦋</div>
        
        {/* Hamburger Menu */}
        <div className="hamburger flex flex-col gap-[5px] cursor-pointer md:hidden" onClick={toggleMenu}>
          <div className="w-6 h-[3px] bg-white transition duration-300 ease-in-out"></div>
          <div className="w-6 h-[3px] bg-white transition duration-300 ease-in-out"></div>
          <div className="w-6 h-[3px] bg-white transition duration-300 ease-in-out"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "flex" : "hidden"} md:flex md:flex-row gap-6 list-none mt-4 md:mt-0 md:static absolute right-4 top-[70px] bg-[#3498db] md:bg-transparent rounded-lg shadow-md md:shadow-none p-4 md:p-0`}>
          <li><Link href="/" className="text-white text-lg hover:underline hover:font-bold">Home</Link></li>
          <li><Link href="/routes/about" className="text-white text-lg hover:underline hover:font-bold">About</Link></li>
          <li><Link href="/routes/products" className="text-white text-lg hover:underline hover:font-bold">Products</Link></li>
          <li><Link href="/routes/contact" className="text-white text-lg hover:underline hover:font-bold">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
