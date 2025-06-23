"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
    <section id="contact" className="py-20 px-5 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-lg mb-6">Feel free to reach out to me!</p>
      <div className="flex justify-center space-x-6 text-3xl mb-6">
        <a
          href="mailto:abdallahmassri7e@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/AbdallahDevMassri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdallah-massri-43039b243/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a
          href="/AbdallahMassri.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCVDownload}
          className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <FaFileDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </section>
  );
}
