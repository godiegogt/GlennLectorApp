import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen,SignInScreen,CategoryScreen} from './screens'
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
const Stack = createStackNavigator();
import auth from '@react-native-firebase/auth';

const ScreenNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Maneja el cambio en el estado de autenticación
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // Suscríbete a los cambios en el estado de autenticación
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // Limpia la suscripción al desmontar el componente
    return subscriber;
  }, []);


  if (initializing) return <ActivityIndicator size="large" color="#0000ff" />;
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerTitle:'Categoria' }}  name="Category"  component={CategoryScreen} />
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