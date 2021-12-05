import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components';
import { ErrorBoundry } from './components';

import store from './store';

import "./assets/styles/styles.css"

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
