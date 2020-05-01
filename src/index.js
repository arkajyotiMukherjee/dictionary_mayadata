import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import {store, persistor, history} from './services/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
