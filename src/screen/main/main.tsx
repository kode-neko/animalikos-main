import Preact from 'preact';
import { MainBar, Section } from '../../components';

const Main: Preact.FunctionComponent = () => {
  return (
    <div style={{padding: '20px'}}>
      <MainBar />
      <br/>
      <br/>
      <Section title="título">
        <p>Enim excepteur ex eiusmod sint culpa proident exercitation nisi qui voluptate ad.</p>
      </Section>
    </div>
  );
};

export default Main;