import Preact from 'preact';
import { useState } from 'preact/hooks';
import styles from './styles.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ColorList, SocialList } from '../../globals';
import { Color, Social } from '../../model';

const MainBar: Preact.FunctionComponent = () => {

  const [isVisMenu, setIsVisMenu] = useState<boolean>(false);

  const handleClickMenu: () => void = () => setIsVisMenu(!isVisMenu);

  return (
    <div className={styles.cont}>
      <div className={styles.title}>Animalikos</div>
      <div className={styles.menu}>
        <div className={styles.left}>
          <div className={styles.lang}>
            <div className={styles.es}>ES</div>
            <div className={styles.en}>EN</div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.color}>
            <div className={styles.label}>
              <span className={styles.icon}><FontAwesomeIcon icon={faPaintRoller} /></span>
              <span className={styles.text}>Color</span>
            </div>
            <div onClick={handleClickMenu} className={classNames(styles.menu)}>
              <ul>
                {ColorList.map((c: Color) => (
                  <li>
                    <span className={classNames(styles['color'], styles[c.name])} />
                    <span className={styles.label}>azul</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <ul>
              {SocialList.map((s: Social) => <li><FontAwesomeIcon icon={s.icon} /></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <p>
          Fugiat dolore et in nostrud ex duis mollit incididunt sint ea. Aliqua proident non enim consequat irure incididunt nisi duis laboris nulla. Enim proident in sunt laborum sit irure aliquip id reprehenderit consequat excepteur qui in. Esse elit exercitation ullamco dolor.
        </p>
      </div>
    </div>
  );
};

export default MainBar;