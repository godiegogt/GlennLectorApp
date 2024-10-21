import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system'

const ItemText = ({name}) => {
  return (
   
      <Text style={styles.txt} >{name}</Text>
    
  )
}

export default ItemText

const styles = StyleSheet.create({
txt:{
    color:'#ff5757',
    fontFamily:'Roboto',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    
}

})