import { useEffect, useRef } from "react";
import styles from "./SkillsStyles.module.css";
import checkmarkIconLight from "../../assets/checkmark-light.svg";
import checkmarkIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const { theme } = useTheme();
  const checkmarkIcon =
    theme === "light" ? checkmarkIconLight : checkmarkIconDark;

  const skillsRef = useRef(null);

  useEffect(() => {
    if (!skillsRef.current) return;

    const skillItems = skillsRef.current.querySelectorAll(".stagger-skill");

    if (skillItems.length === 0) return;

    gsap.fromTo(
      skillItems,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={skillsRef} id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"HTML"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"CSS"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"Javascript"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"Typescript"}
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"Node"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"React"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"Bootstrap"}
        />
        <SkillList
          className="stagger-skill"
          src={checkmarkIcon}
          skill={"Tailwind CSS"}
        />
      </div>
    </section>
  );
}

export default Skills;
