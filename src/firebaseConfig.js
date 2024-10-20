// firebaseConfig.js
import firebase from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBArvxZC-sJsRjwcRFFuxr6RZa_kvukI80",
    authDomain: "glenn-22ae4.firebaseapp.com",
    projectId: "glenn-22ae4",
    storageBucket: "glenn-22ae4.appspot.com",
    messagingSenderId: "758723698560",
    appId: "1:758723698560:web:68873d387aeec053c36b65"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;