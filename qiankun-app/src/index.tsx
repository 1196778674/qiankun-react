import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

function render(props: { container?: any; }) {
  const { container } = props;
  ReactDOM.render(
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/qiankun' : '/'}>
      <App />
    </Router>
  , container ? container.querySelector('#rootApp') : document.querySelector('#rootApp'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: { container?: any; }) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: { container: any; }) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#rootApp') : document.querySelector('#rootApp'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
