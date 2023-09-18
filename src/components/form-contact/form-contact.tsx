import Preact from 'preact';
import styles from './styles.module.less';
import { Contact } from '../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

type FormContactProps = {
  contact: Contact;
  onSend: (msg: Contact) => void
}

const FormContact: Preact.FunctionComponent<FormContactProps> = ({contact, onSend}: FormContactProps) => {
  
  const {t} = useTranslation();
  const validation: Yup.AnyObject = Yup.object<Contact>({
    name: Yup.string()
      .max(50, t('error.maxStr', {max: 50}))
      .required(t('hint.mandatory')),
    mail: Yup.string()
      .email(t('error.maxStr', {max: 100}))
      .required(t('hint.mandatory')),
    content: Yup.string()
      .max(50, t('error.maxStr', {max: 200}))
      .required(t('hint.mandatory'))
  });
  const formik: FormikProps<Contact> = useFormik<Contact>({
    initialValues: contact,
    validationSchema: validation,
    onSubmit: (values: Contact): void => onSend(values)
  });

  return (
    <form className={styles.cont} onSubmit={(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>): void => {
      e.preventDefault();
      e.stopPropagation();
      onSend(formik.values);
    }}>
      <div className={styles.field}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={styles.input}>
          <input 
            id="name"
            name="name"
            type="text"
            maxLength={50}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder={t('placeholder.name')} 
          />
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.input}>
          <input 
            id="mail"
            name="mail"
            type="text"
            maxLength={100}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mail}
            placeholder={t('placeholder.mail')} 
          />
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
        <div className={styles.input}>
          <textarea 
            id="content"
            name="content"
            type="text"
            maxLength={200}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            placeholder={t('placeholder.content')} 
          ></textarea>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.hint}>
          <div className={styles.icon}><FontAwesomeIcon icon={faCircleInfo} /></div>
          <div className={styles.msg}>{t('hint.mandatory')}</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.btn} type="submit" disabled={!(formik.isValid && formik.dirty)}>{t('labels.send')}</button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;