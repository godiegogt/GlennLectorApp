import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'native-base'
import Menu from '../../components/common/Menu'
import Theme from '../../constants/Theme'



const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}><Image resizeMode='contain' source={require('../../assets/img/logo.png')} alt='Logo' /></View>
   <View style={styles.content}>
   <Menu/>
   </View>
   
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    height: 150

  },
  content:{
    marginHorizontal:Theme.sizes.BASE
  }
})