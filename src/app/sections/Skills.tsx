import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaLinux,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiSqlite,
} from "react-icons/si";
import { FaTools, FaCogs } from "react-icons/fa";

import { DiAndroid } from "react-icons/di";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <SkillBadge name="Java" icon={<FaJava />} />
        <SkillBadge name="JavaFx" icon={<FaJava />} />
        <SkillBadge name="Spring Boot" icon={<SiSpringboot />} />
        <SkillBadge name="RestAPI" icon={<SiSpringboot />} />
        <SkillBadge name="Python" icon={<FaPython />} />
        <SkillBadge name="Flask" icon={<SiFlask />} />
        <SkillBadge name="Android" icon={<DiAndroid />} />
        <SkillBadge name="React" icon={<FaReact />} />
        <SkillBadge name="JavaScript" icon={<SiJavascript />} />
        <SkillBadge name="TypeScript" icon={<SiTypescript />} />
        <SkillBadge name="SQL" icon={<SiSqlite />} />
        <SkillBadge name="MongoDB" icon={<SiMongodb />} />
        <SkillBadge name="AWS" icon={<FaAws />} />
        <SkillBadge name="Docker" icon={<FaDocker />} />
        <SkillBadge name="CI/CD" icon={<FaTools />} />
        <SkillBadge name="DevOps" icon={<FaCogs />} />
        <SkillBadge name="Git" icon={<FaGithub />} />
        <SkillBadge name="Kubernetes" icon={<SiKubernetes />} />
        <SkillBadge name="GitHub Actions" icon={<FaGithub />} />
        <SkillBadge name="Jenkins" icon={<SiJenkins />} />
        <SkillBadge name="Linux" icon={<FaLinux />} />
      </div>
    </section>
  );
}
