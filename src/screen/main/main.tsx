import Preact from 'preact';
import { MainBar, Section, Projects, FormContact, Footer } from '../../components';
import { Color, Contact } from '../../model';
import styles from './styles.module.less';
import { getContact } from '../../service/getters';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { appColor } from '../../store';
import { ToastContainer, toast } from 'react-toastify';

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
      .then((res: Contact) => toast("Message sent"))
      .catch(() => toast("Error sending"));
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
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </div>
  );
};

export default Main;