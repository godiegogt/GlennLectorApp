import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Container } from 'native-base'
import Theme from '../../constants/Theme'
import { useNavigation } from '@react-navigation/native'

type MenuItemProps={
    category:any
}

const MenuItem:FC<MenuItemProps> = ({category}) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.Container} 
    onPress={() => navigation.navigate('Category', { categoryId: category.id, categoryName: category.name })}>
      <Text style={styles.text}>{category.name.toUpperCase()}</Text>
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