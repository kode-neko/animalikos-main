import Preact from 'preact';
import { useState } from 'preact/hooks';
import styles from './styles.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ColorList, SocialList } from '../../globals';
import { Color, Social } from '../../model';
import { useTranslation } from 'react-i18next';

const MainBar: Preact.FunctionComponent = () => {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  const [isVisMenu, setIsVisMenu] = useState<boolean>(false);

  const handleClickLang: (sel: string) => void = (sel: string) => {
    if(i18n.language !== sel) {
      i18n.changeLanguage(sel);
      setLang(sel);
    }
  };
  const handleClickMenu: () => void = () => setIsVisMenu(!isVisMenu);

  return (
    <div className={styles.cont}>
      <div className={styles.title}>{t('main.title')}</div>
      <div className={styles.menu}>
        <div className={styles.left}>
          <div className={styles.lang}>
            <div onClick={() => handleClickLang('es')} className={classNames(styles.es, lang === 'es' && styles.bold)}>es</div>
            <div onClick={() => handleClickLang('en')} className={classNames(styles.en, lang === 'en' && styles.bold)}>en</div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.color}>
            <div className={styles.label}>
              <span className={styles.icon}><FontAwesomeIcon icon={faPaintRoller} /></span>
              <span className={styles.text}>{t('btn.color')}</span>
            </div>
            <div onClick={handleClickMenu} className={classNames(styles.menu)}>
              <ul>
                {ColorList.map((c: Color) => (
                  <li>
                    <span className={classNames(styles['color'], styles[c.name])} />
                    <span className={styles.label}>{t(`colors.${c.name}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <ul>
              {SocialList.map((s: Social) => <li><a href={s.url} target="_blank"><FontAwesomeIcon icon={s.icon} /></a></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <p>{t('main.desc')}</p>
      </div>
    </div>
  );
};

export default MainBar;