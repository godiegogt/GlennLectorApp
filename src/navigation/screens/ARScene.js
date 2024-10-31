// ARScene.js
import React, { useEffect, useState } from 'react';
import { ViroARScene, Viro3DObject, ViroAmbientLight, ViroScene, ViroImage, ViroVRSceneNavigator, ViroMaterials, ViroARSceneNavigator, ViroARPlaneSelector, ViroBox, ViroARPlane } from '@reactvision/react-viro';
import { View } from 'native-base';
import { StyleSheet,Text } from 'react-native';
import storage from '@react-native-firebase/storage';

const ARScene = ({route}) => {
  const { img } = route.params;
  const [imageUrl, setImageUrl] = useState("")
// const src=require('../../assets/models/Manzana.obj')
// const rsrc=require('../../assets/models/Manzana.mtl')
// console.log(model0)

  useEffect(() => {
    const fetchImageUrl = async () => {
      const url = await getImageUrl();
      setImageUrl(url);
      console.log(url)
    };

    fetchImageUrl();
  }, []);

  const getImageUrl = async () => {
   
    try {
      const url = await storage().ref(img).getDownloadURL();
      return url;
    } catch (error) {
      console.error('Error al obtener la URL de la imagen:', error);
    }
  };
console.log("imageURL: ",imageUrl)
  const FirstScene = () => {
    ViroMaterials.createMaterials({
      background: {
        diffuseColor: 'rgba(0, 0, 0, 1)',
      },
    });
    return (
      <ViroARScene
      onAnchorFound={() => console.log('onAnchorFound')}
      onAnchorUpdated={() => console.log('onAnchorUpdated')}
      onAnchorRemoved={() => console.log('onAnchorRemoved')}>
      <ViroARPlane minHeight={0.1} minWidth={0.1} alignment={'Horizontal'}>
        <ViroImage
        source={{ uri: imageUrl }}
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]} // Ajusta el tamaño de la imagen
         rotation={[0, -45, 0]} // Ajusta la rotación de la imagen
        />
      </ViroARPlane>
    </ViroARScene>
    );
  };
  return (
    // <ViroARScene>
    //   <ViroAmbientLight color="#ffffff" />
    //   <Viro3DObject
    //     source={src}
    //     resources={[rsrc]}
    //     position={[0, 0, -1]}
    //     scale={[0.1, 0.1, 0.1]}
    //     type="OBJ"
    //   />
    // </ViroARScene>
  <>
  {
    imageUrl==""
    ?
   <Text>Cargando</Text>
    :
    <ViroARSceneNavigator
    initialScene={{ scene: FirstScene }}
    style={{ flex: 1 }}
  />
  }
  
  </>
    
  
  );
};



export default ARScene; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:800,
    backgroundColor:'#333'
  },
});