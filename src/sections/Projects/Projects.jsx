import styles from './ProjectsStyles.module.css';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitLift}
          link="https://wast-ed-zeta.vercel.app/"
          h3="Wast.ed"
          p="Mobile App"
        />
      </div>
    </section>
  );
}

export default Projects;
