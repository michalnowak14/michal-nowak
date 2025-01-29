import styles from "./SkillsStyles.module.css";
import checkmarkIconLight from "../../assets/checkmark-light.svg";
import checkmarkIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
function Skills() {
  const { theme } = useTheme();
  const checkmarkIcon =
    theme === "light" ? checkmarkIconLight : checkmarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill={"HTML"} />
        <SkillList src={checkmarkIcon} skill={"CSS"} />
        <SkillList src={checkmarkIcon} skill={"Javascript"} />
        <SkillList src={checkmarkIcon} skill={"Node"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill={"React"} />
        <SkillList src={checkmarkIcon} skill={""} />
        <SkillList src={checkmarkIcon} skill={"Tailwind CSS"} />
      </div>
    </section>
  );
}

export default Skills;
