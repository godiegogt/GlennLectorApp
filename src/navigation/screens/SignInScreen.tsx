import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Theme from '../../constants/Theme'
import { Box, Button, Icon, Input, theme } from 'native-base'


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}><Image resizeMode='contain' style={styles.logo} source={require('../../assets/img/logo.png')} /></View>

      <View style={styles.content}>

        <View style={styles.inputs}>
          <Input mb={10} placeholder="Username" />
          <Input placeholder="Password" />
        </View>


        <View style={styles.buttons}>
          <Button
            style={{ width: '100%',backgroundColor:Theme.colors.primary }}
           
            onPress={() => {
              console.log('hello')
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