import Preact from 'preact';
import styles from './styles.module.less';
import { Contact } from '../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

type FormContactProps = {
  contact?: Contact;
}

const FormContact: Preact.FunctionComponent<FormContactProps> = ({contact}: FormContactProps) => {
  
  const {t} = useTranslation();

  return (
    <div className={styles.cont}>
      <div className={styles.field}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder={t('placeholder.name')} />
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder={t('placeholder.mail')} />
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
        <div className={styles.input}>
          <textarea placeholder={t('placeholder.content')} ></textarea>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.hint}>
          <div className={styles.icon}><FontAwesomeIcon icon={faCircleInfo} /></div>
          <div className={styles.msg}>Son obligatorios todos los campos</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.btn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default FormContact;