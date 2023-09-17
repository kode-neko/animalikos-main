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
}

const FormContact: Preact.FunctionComponent<FormContactProps> = ({contact}: FormContactProps) => {
  
  const {t} = useTranslation();
  const validation: Yup.AnyObject = Yup.object<Contact>({
    name: Yup.string()
      .max(50, t('error.maxStr', {max: 50}))
      .required(t('hint.mandatory')),
    mail: Yup.string()
      .email(t('error.maxStr', {max: 50}))
      .required(t('hint.mandatory')),
    content: Yup.string()
      .max(50, t('error.maxStr', {max: 200}))
      .required(t('hint.mandatory'))
  });
  const formik: FormikProps<Contact> = useFormik<Contact>({
    initialValues: contact,
    validationSchema: validation,
    onSubmit: (values: Contact): void => {
      console.log(values);
    }
  });

  return (
    <form className={styles.cont} onSubmit={(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>): void => {
      e.preventDefault();
      e.stopPropagation();
      console.log('submit');
      formik.handleSubmit();
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
          <button className={styles.btn} type="submit">{t('placeholder.send')}</button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;