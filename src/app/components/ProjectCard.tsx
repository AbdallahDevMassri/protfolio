import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        View Project →
      </Link>
    </div>
  );
}
