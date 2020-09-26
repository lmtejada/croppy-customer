import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import appNavigation from './src/appNavigation';

const App = createAppContainer(appNavigation);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => { setNavigator(navigator) }}
      />
    </AuthProvider>
  );
};
