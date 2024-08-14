import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuItem from './MenuItem'
const options = [
    {
      name: 'Animales'
    },
    {
      name: 'Frutas'
    },
    {
      name: 'Transportes'
    },
    {
      name: 'Colores'
    },
    {
      name: 'Partes del cuerpo'
    },
  
  ]
const Menu = () => {
  return (
    <View>
     {
        options.map(item=><MenuItem name={item.name}/>)
     }
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})