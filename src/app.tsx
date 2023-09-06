import Preact from 'preact';
import Router from 'preact-router';
import { Main } from './screen/main';

const App: Preact.FunctionComponent = () => {
  return (
    <>
      App
      <hr />
      <Router>
        <Main path="/"></Main>
      </Router>
    </>
  );
};

export default App;