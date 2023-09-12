import Preact, { ComponentChildren } from 'preact';
import styles from './styles.module.less';

type SectionProps = {
  title: string;
  children: ComponentChildren
}

const Section: Preact.FunctionComponent<SectionProps> = ({title, children}: SectionProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <div className={styles.left} />
        <div className={styles.title}>{title}</div>
        <div className={styles.right} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Section;