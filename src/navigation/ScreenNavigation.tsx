import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen,SignInScreen} from './screens'
const Stack = createStackNavigator();


const ScreenNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {true ? (
              <>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
              </>
            ) : (
              <>
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default ScreenNavigation

const styles = StyleSheet.create({})