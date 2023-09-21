import Preact from 'preact';
import { MainBar, Section, Projects, FormContact, Footer } from '../../components';
import { Contact } from '../../model';
import styles from './styles.module.less';
import { getContact } from '../../service/getters';

const Main: Preact.FunctionComponent = () => {

  const initMsg: Contact = {
    name: '',
    mail: '',
    content: ''
  };

  const handleSend: (contact: Contact) => void = (contact: Contact) => {
    getContact().sendMessage(contact)
      .then((res: Contact) => console.log('mensaje enviado: ', res))
      .catch(() => console.log('error al enviar mensaje'));
  };

  return (
    <div className={styles.cont}>
      <MainBar />
      <Section title="Projects">
        <Projects />
      </Section>
      <Section title="Contact">
        <FormContact contact={initMsg} onSend={handleSend}/>
      </Section>
      <Footer label="Kodeneko @ 2023" />
    </div>
  );
};

export default Main;