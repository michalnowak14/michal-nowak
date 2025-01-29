import styles from "./ProjectsStyles.module.css";
import spotify from "../../assets/spotify-logo.jpg";
import todo from "../../assets/todo-img.webp";
import recipe from "../../assets/food-recipe.webp";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spotify}
          link="https://github.com/michalnowak14/spotify-clone"
          h3="Spotify clone"
          p="Streaming App"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/michalnowak14/todolist-app"
          h3="ToDo"
          p="To Do List App"
        />
        <ProjectCard
          src={recipe}
          link="https://github.com/michalnowak14/food-recipe-app"
          h3="Food Recipe"
          p="Food Recipes Ideas App"
        />
      </div>
    </section>
  );
}

export default Projects;
