import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <SkillBadge name="Java" />
        <SkillBadge name="Spring Boot" />
        <SkillBadge name="React" />
        <SkillBadge name="Python" />
        <SkillBadge name="SQL" />
        <SkillBadge name="MongoDB" />
        <SkillBadge name="AWS" />
        <SkillBadge name="Docker" />
        <SkillBadge name="CI/CD" />
        <SkillBadge name="Kubernetes" />
        <SkillBadge name="GitHub Actions" />
        <SkillBadge name="Jenkins" />
        <SkillBadge name="Linux" />
      </div>
    </section>
  );
}
