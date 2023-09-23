import Preact, { ComponentChildren } from 'preact';
import { motion } from "framer-motion";
import styles from './styles.module.less';

type SectionProps = {
  title: string;
  children: ComponentChildren
}

const Section: Preact.FunctionComponent<SectionProps> = ({title, children}: SectionProps) => {
  return (
    <motion.div
      className={styles.cont}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.3,
        delay: 0.2
      }}
    >
      <div className={styles.header}>
        <div className={styles.left} />
        <div className={styles.title}>{title}</div>
        <div className={styles.right} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;