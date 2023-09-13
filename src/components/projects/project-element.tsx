import Preact from 'preact';
import styles from './styles.module.less';
import { Project, ProjectUrl, ProjectUrlType } from '../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const ProjectElement: Preact.FunctionComponent<Project> = (project: Project) => {

  const web: ProjectUrl = project.urlList[ProjectUrlType.WEB];
  const github: ProjectUrl = project.urlList[ProjectUrlType.GITHUB];
  const satckblitz: ProjectUrl = project.urlList[ProjectUrlType.STACKBLITZ];
  
  return (
    <div className={styles.contProject}>
      <div className={styles.left}>
        <FontAwesomeIcon className={styles.icon} icon={project.icon} />
        <div>{project.version}</div>
      </div>
      <div className={styles.right}>
        <a href={web.url} target="_blank" className={styles.ele}>
          <span className={styles.icon}><FontAwesomeIcon icon={faLaptop} /></span>
          <span className={styles.label}>Web</span>
        </a>
        <a href={github.url} target="_blank" className={styles.ele}>
          <span className={styles.icon}><FontAwesomeIcon icon={faGithubAlt} /></span>
          <span className={styles.label}>Github</span>
        </a>
        <a href={satckblitz.url} target="_blank" className={styles.ele}>
          <span className={styles.icon}><FontAwesomeIcon icon={faBolt} /></span>
          <span className={styles.label}>StackBlitz</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectElement;