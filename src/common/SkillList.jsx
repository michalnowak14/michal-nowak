function SkillList({ src, skill, className }) {
  return (
    <span className={className}>
      <img src={src} alt="checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
