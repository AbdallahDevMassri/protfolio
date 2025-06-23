"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-5 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <p className="text-lg mb-6 text-center text-blue-700 italic">
        <Typewriter
          words={[
            "Motivated Junior Software Engineer",
            "Skilled in Java, Spring Boot, React, AWS, Docker",
            "Passionate about clean code and DevOps",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </p>

      <p className="text-lg mb-6 text-center text-gray-700">
        I have strong problem-solving skills, a passion for clean code, and
        enjoy learning new technologies. In my final projects, I designed and
        implemented full-stack systems and automation pipelines on AWS.
      </p>

      <p className="text-lg mb-6 text-center text-gray-700">
        I’m eager to apply my skills in a dynamic team environment. I thrive on
        challenges and am excited to contribute to innovative projects.
      </p>
    </motion.section>
  );
}
