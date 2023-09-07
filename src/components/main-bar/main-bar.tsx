import Preact from 'preact';
import styles from './styles.module.less';

const MainBar: Preact.FunctionComponent = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.title}>Animalikos</div>
      <div className={styles.menu}>
        <div className={styles.left}>
          <div className={styles.lang}>
            <div>ES</div>
            <div>EN</div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.color}>
            <ul>
              <li>azul</li>
              <li>rojo</li>
              <li>verde</li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <ul>
              <li>GH</li>
              <li>TW</li>
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