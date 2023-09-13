import Preact from 'preact';
import { MainBar, Section, Projects } from '../../components';

const Main: Preact.FunctionComponent = () => {
  return (
    <div style={{padding: '20px', maxWidth: '984px', margin: '0 auto'}}>
      <MainBar />
      <br/>
      <br/>
      <Section title="Projects">
        <Projects />
      </Section>
    </div>
  );
};

export default Main;