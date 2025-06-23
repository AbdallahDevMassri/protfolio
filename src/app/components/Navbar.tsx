"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md bg-white sticky top-0 z-50">
      <div className="font-bold text-xl">Abdallah Massri</div>
      <div className="space-x-5">
        <Link href="#home" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="#about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="#projects" className="hover:text-blue-600">
          Projects
        </Link>
        <Link href="#skills" className="hover:text-blue-600">
          Skills
        </Link>
        <Link href="#contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
}
