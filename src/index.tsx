import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Welcome from './components/Welcome';
import FormLogin from './components/FormLogin';
import './css/form.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <FormLogin />,
      document.getElementById('root'),
);
registerServiceWorker();
