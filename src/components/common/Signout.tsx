import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Theme from '../../constants/Theme'
import { useDispatch } from 'react-redux'
import { singout } from '../../state/slices/ConfigurationSlice'
import auth from '@react-native-firebase/auth';

const Signout = () => {

  const _singout=()=>{
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
          
    }


    return (
      <TouchableOpacity style={styles.Container} onPress={_singout}>
        <Text style={styles.text}>SALIR</Text>
      </TouchableOpacity>
    )
  }
  
  export default Signout
  
  const styles = StyleSheet.create({
      Container:{
          width:'100%',
          height:50,
          borderRadius:25,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:Theme.colors.error,
          marginBottom:Theme.sizes.BASE/2
      },
      text:{
          color:'#fff',
          fontSize:Theme.sizes.BASE*2
  
      }
  })