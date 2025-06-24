type SkillBadgeProps = {
  name: string;
  icon?: React.ReactNode; // optional prop for the icon
};

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
      {icon && <span className="text-lg">{icon}</span>}
      {name}
    </span>
  );
}
