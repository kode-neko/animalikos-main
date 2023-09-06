import { render } from 'preact';
import App from './app';
import './style.less';

render(<App />, document.getElementById('app') as HTMLElement);
