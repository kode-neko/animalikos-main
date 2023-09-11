import Preact from 'preact';
import Router from 'preact-router';
import { Main } from './screen/main';
import initI18n from './i18n';

initI18n();

const App: Preact.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Main path="/"></Main>
      </Router>
    </>
  );
};

export default App;