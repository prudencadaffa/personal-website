import styles from './ProjectsStyles.module.css';
import museum from '../../assets/museum.png';
import library from '../../assets/library.png';
import hospital from '../../assets/hospital.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={museum}
          link="https://github.com/prudencadaffa"
          h3="Museum"
          p="Internal Museum Website"
        />
        <ProjectCard
          src={library}
          link="https://github.com/prudencadaffa"
          h3="Library"
          p="Internal Library Website"
        />
        <ProjectCard
          src={hospital}
          link="https://github.com/prudencadaffa"
          h3="Hospital"
          p="Internal Hospital Website"
        />
      </div>
    </section>
  );
}

export default Projects;
