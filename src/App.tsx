import React from 'react';
import RootNavigator from './navigations/RootNavigator';
import NavigationService from './utils/NavigationService';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator
        ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef);
        }}
      />
    </SafeAreaProvider>
  );
};

export default App;
