import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="HR-Pulse Desktop App"
          description="HR management system built with Java & MySQL. Designed system architecture, created user workflows, integrated MySQL database and reporting."
          link="https://github.com/AbdallahDevMassri/Hr-pulse"
          image="/Hr-pulse.png"
        />
        <ProjectCard
          title="Object Detect Bot"
          description="Telegram bot integrated with AWS S3 & MongoDB. Implemented object detection using Python, Boto3, and deployed with CI/CD."
          link="https://github.com/AbdallahDevMassri/telegramBot"
          image="/TelegramBot.jpg"
        />
        <ProjectCard
          title="Full-stack eCommerce Website"
          description="Developed secure eCommerce site with Java Spring Boot, React, JWT, Docker, deployed to AWS Elastic Beanstalk."
          link="https://github.com/AbdallahDevMassri/ElectronicApp-Fullstack"
          image="/eCommerce_Website.png"
        />

        <ProjectCard
          title="BayanNails Booking App"
          description="Android app for booking nail salon services. Features booking, queue management, WhatsApp integration, and admin tools. Built with Android Studio."
          link="https://github.com/AbdallahDevMassri/BayanNails"
          image="/NailsSalon.jpg"
        />
      </div>
    </section>
  );
}
