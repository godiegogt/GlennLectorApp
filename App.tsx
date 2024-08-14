/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {

  useColorScheme,
} from 'react-native';
import './src/navigation/gesture-handler';

import ScreenNavigation from './src/navigation/ScreenNavigation';
import { NativeBaseProvider, Box } from "native-base";
import { Provider } from 'react-redux';
import { store } from './src/state/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
    <NativeBaseProvider>
   <ScreenNavigation/>
   </NativeBaseProvider>
   </Provider>
  );
}



export default App;
