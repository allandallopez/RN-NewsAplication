import React from 'react';
import RootNavigator from './navigations/RootNavigator';
import NavigationService from './utils/NavigationService';

const App = () => {
  return (
    <RootNavigator
      ref={navigationRef => {
        NavigationService.setTopLevelNavigator(navigationRef);
      }}
    />
  );
};

export default App;
