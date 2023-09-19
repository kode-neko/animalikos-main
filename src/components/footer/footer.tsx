import Preact from 'preact';
import styles from './styles.module.less';

interface FooterProps {
  label: string;
}

const Footer: Preact.FunctionComponent<FooterProps> = ({label}: FooterProps) => {
  return (
    <div className={styles.cont}>
      {label}
    </div>
  );
};

export default Footer;