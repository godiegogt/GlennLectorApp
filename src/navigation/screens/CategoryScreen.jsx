// ImagesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ItemText from '../../components/category/ItemText';

const CategoryScreen = ({ route }) => {
  const { categoryId, categoryName } = route.params;
  const [objects, setObjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   

    const fetchObjects = async () => {
      try {
        const categoryDoc = await firestore()
          .collection('categories')
          .doc(categoryId)
          .get();
    
        if (categoryDoc.exists) {
          const data = categoryDoc.data();
          const objectsArray = data.list;
          if (objectsArray && objectsArray.length > 0) {
            // Obtener los URLs de descarga si es necesario
            const objectsWithUrls = await Promise.all(
              objectsArray.map(async (obj) => {
               
                // Si 'url' es una ruta en Firebase Storage, obtenemos el enlace de descarga
              
                  imageUrl = await storage().ref(`${obj.url.toLowerCase()}`).getDownloadURL();
             console.log(imageUrl)
                return { ...obj, imageUrl };
              })
            );
            setObjects(objectsWithUrls);
          } else {
            Alert.alert('Sin datos', 'No se encontraron objetos en esta categoría.');
          }
        } else {
          Alert.alert('Error', 'La categoría no existe.');
        }
      } catch (error) {
        console.error('Error al obtener los objetos:', error);
        Alert.alert('Error', 'Ocurrió un error al obtener los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchObjects();
  }, [categoryId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!objects || objects.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay imágenes disponibles para esta categoría.</Text>
      </View>
    );
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % objects.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? objects.length - 1 : prevIndex - 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
        <Text style={styles.arrowText}>{"<"}</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: objects[index].imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
       <ItemText name={objects[index].name}/>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', flex: 1,backgroundColor:'#fff' },
  arrowButton: { backgroundColor:'#9f99f2',width:70,height:70,borderRadius:35,justifyContent:'center',alignItems:'center' },
  arrowText: { fontSize: 50,color:'#fff',fontWeight:'bold',fontFamily:'Roboto' },
  imageContainer: { flex: 1, alignItems: 'center' },
  image: { width: '80%', height: '70%' },
  objectName: { fontSize: 20, marginTop: 10 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default CategoryScreen;