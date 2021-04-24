import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import MainNavigator from './src/navigation/navigation';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
const App = ({}) => {
  return (
    <Provider store={store}>
      <StatusBar />
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
