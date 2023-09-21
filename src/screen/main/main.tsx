import Preact from 'preact';
import { MainBar, Section, Projects, FormContact, Footer } from '../../components';
import { Color, Contact } from '../../model';
import styles from './styles.module.less';
import { getContact } from '../../service/getters';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { appColor } from '../../store';

const Main: Preact.FunctionComponent = () => {

  const [themeColor, setThemeColor] = useAtom(appColor);
  const initMsg: Contact = {
    name: '',
    mail: '',
    content: ''
  };
  const handleSelectColor: (c: Color) => void = (c: Color) =>
    setThemeColor(c);
  const handleSend: (contact: Contact) => void = (contact: Contact) => {
    getContact().sendMessage(contact)
      .then((res: Contact) => console.log('mensaje enviado: ', res))
      .catch(() => console.log('error al enviar mensaje'));
  };

  return (
    <div className={classNames(styles.outer, themeColor)}>
      <div className={styles.cont}>
        <MainBar onSelectColor={handleSelectColor} />
        <Section title="Projects">
          <Projects />
        </Section>
        <Section title="Contact">
          <FormContact contact={initMsg} onSend={handleSend}/>
        </Section>
        <Footer label="Kodeneko @ 2023" />
      </div>
    </div>
  );
};

export default Main;