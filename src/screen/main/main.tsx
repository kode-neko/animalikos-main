import Preact from 'preact';
import { MainBar, Section, Projects, FormContact, Footer } from '../../components';
import { Contact } from '../../model';

const Main: Preact.FunctionComponent = () => {

  const test: Contact = {
    name: '',
    mail: '',
    content: ''
  };

  return (
    <div style={{padding: '20px', maxWidth: '984px', margin: '0 auto'}}>
      <MainBar />
      <br/>
      <br/>
      <Section title="Projects">
        <Projects />
      </Section>
      <Section title="Contact">
        <FormContact contact={test} onSend={(contact: Contact) => console.log(contact)}/>
      </Section>
      <Footer label="Kodeneko @ 2023" />
    </div>
  );
};

export default Main;