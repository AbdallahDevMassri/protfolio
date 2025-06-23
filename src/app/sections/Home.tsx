"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profilePic.webp"
          alt="Abdallah Massri"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Abdallah Massri
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Junior Software Engineer | Java | Python | React | DevOps | AWS
        </p>
      </motion.div>
    </section>
  );
}
