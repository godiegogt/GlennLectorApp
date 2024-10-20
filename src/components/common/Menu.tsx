import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import firestore from '@react-native-firebase/firestore';
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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = firestore()
  .collection('categories')
  .onSnapshot((querySnapshot) => {
    const categoriesData:any = [];
    querySnapshot.forEach((documentSnapshot) => {
      categoriesData.push({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      });
      console.log(documentSnapshot.id,documentSnapshot.data())
    });

    
    setCategories(categoriesData);
    setLoading(false);
  });

return () => unsubscribe();
}, [])






  return (
    <View>
     {
        categories.map((item:any)=><MenuItem category={item}/>)
     }
    </View>
  )

  
}

export default Menu

const styles = StyleSheet.create({})