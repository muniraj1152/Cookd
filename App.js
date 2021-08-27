/**
 * Cookd Recipe App
 */

import React from 'react';
import { Provider } from 'react-redux';

import { RootNavigator } from './src/Navigation/index';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator></RootNavigator>
    </Provider>
  );
};

export default App;
