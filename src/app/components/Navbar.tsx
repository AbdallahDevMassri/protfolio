"use client";

import Link from "next/link";
import emailjs from "emailjs-com";
import { p } from "framer-motion/client";

export default function Navbar() {
  const handleCVDownload = () => {
    console.log("CV Downloaded");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",

        { to_name: "Abdallah Massri" },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

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
        <a
          href="/AbdallahMassri.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCVDownload}
          className="hover:text-blue-600"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
