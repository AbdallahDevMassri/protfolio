import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-lg mb-6">Feel free to reach out to me!</p>
      <div className="flex justify-center space-x-6 text-3xl">
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
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaCode />
        </a> */}
      </div>
    </section>
  );
}
