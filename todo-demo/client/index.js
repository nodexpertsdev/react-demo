/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main';
import { configureStore } from './store';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');
// Injecting Tap Plugin fot MUI
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <AppContainer>
      <Main store={store} />
    </AppContainer>
  </MuiThemeProvider>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./Main', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Main').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}
