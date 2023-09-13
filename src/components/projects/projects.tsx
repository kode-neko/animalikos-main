import Preact from 'preact';
import styles from './styles.module.less';
import { ProjectList } from '../../globals';
import ProjectElement from './project-element';
import { Project } from '../../model';

const Projects: Preact.FunctionComponent= () => {
  return (
    <div className={styles.cont}>
      {ProjectList.map((p: Project) => <div className={styles.ele}><ProjectElement {...p} /></div>)}
    </div>
  );
};

export default Projects;