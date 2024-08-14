/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  useColorScheme,
} from 'react-native';
import './src/navigation/gesture-handler';

import ScreenNavigation from './src/navigation/ScreenNavigation';
import { NativeBaseProvider, Box } from "native-base";


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
   <ScreenNavigation/>
   </NativeBaseProvider>
  );
}



export default App;
