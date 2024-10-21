import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../constants/Theme'
import { Box, Button, Icon, Input, theme } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import {signin} from '../../state/slices/ConfigurationSlice'
import { RootState } from '../../state/store'
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [isLoading, setisLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
   try {
       
    setisLoading(true);

    // Perform login logic here
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // navigation.replace('Categories');
        setisLoading(false)
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
        setisLoading(false)
      });
   } catch (error) {
    
   }finally{
    setisLoading(false)
   }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}><Image resizeMode='contain' style={styles.logo} source={require('../../assets/img/logo.png')} /></View>

      <View style={styles.content}>

        <View style={styles.inputs}>
          <Input onChangeText={(text) => setEmail(text)} mb={10} placeholder="Username" />
          <Input onChangeText={(text) => setPassword(text)} placeholder="Password" type='password' />
        </View>


        <View style={styles.buttons}>
          <Button
          disabled={isLoading}
          isLoading={isLoading}
            style={{ width: '100%',backgroundColor:Theme.colors.primary }}
           
            onPress={() => {
              handleLogin()
            }}

          >
            SignIn
          </Button>


          <Text>v1.0.0</Text>
        </View>

        <View style={styles.signupbuttons}>
          <Text>No tienes cuenta?<TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Text style={{color:Theme.colors.primary,fontWeight:'bold'}}> Registrarse</Text></TouchableOpacity></Text>
        </View>
        
      </View>









    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 226,
    marginTop: Theme.sizes.BASE

  },
  logo: {


  },
  content: {
    padding: Theme.sizes.BASE,

    flex: 1,
    alignItems: 'center'

  },
  inputs: {
    marginBottom: Theme.sizes.BASE,
    width: '100%'
  },
  buttons: {

    marginTop: Theme.sizes.BASE,
    width: '100%',
    alignItems: 'center'
  },
  signupbuttons:{
marginTop:Theme.sizes.BASE
  }

})