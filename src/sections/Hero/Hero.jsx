import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/michal-profile-picture.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedInIconLight from "../../assets/linkedin-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv-michal-nowak.pdf";
import { useTheme } from "../../common/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedInIcon = theme === "light" ? linkedInIconLight : linkedInIconDark;

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".stagger-element");

    gsap.fromTo(
      elements,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Michal Nowak"
        />
        <img
          onClick={toggleTheme}
          className={styles.colorModeIcon}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1 className="stagger-element">
          Michal
          <br />
          Nowak
        </h1>
        <h2 className="stagger-element">Frontend Developer</h2>
        <span className="stagger-element">
          <a href="https://github.com/michalnowak14" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/michal-nowak1998/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description + " stagger-element"}>
          Eager to learn and grow in web development, with hands-on experience
          in HTML, CSS, JavaScript, React and front-end frameworks.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
