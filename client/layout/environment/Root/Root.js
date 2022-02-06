import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import themes from '../../../themes';

import Main from '_environment/Main';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
      </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
