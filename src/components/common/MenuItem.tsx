import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Container } from 'native-base'
import Theme from '../../constants/Theme'

type MenuItemProps={
    name:string
}

const MenuItem:FC<MenuItemProps> = ({name}) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Theme.colors.primary,
        marginBottom:Theme.sizes.BASE/2
    },
    text:{
        color:'#fff',
        fontSize:Theme.sizes.BASE*2

    }
})