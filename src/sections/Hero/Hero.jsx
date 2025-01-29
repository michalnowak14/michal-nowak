import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/michal-profile-picture.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterIconLight from "../../assets/twitter-light.svg";
import twitterIconDark from "../../assets/twitter-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedInIconLight from "../../assets/linkedin-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv-michal-nowak.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const twitterIcon = theme === "light" ? twitterIconLight : twitterIconDark;
  const linkedInIcon = theme === "light" ? linkedInIconLight : linkedInIconDark;

  return (
    <section id="hero" className={styles.container}>
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
        <h1>
          Michal
          <br />
          Nowak
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>

          <a href="https://linkedin.com" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
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
