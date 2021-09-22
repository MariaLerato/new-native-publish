import firebase from 'firebase'
import 'firebase/database'

const Config = {
    apiKey: "AIzaSyBCehQYqTjUVIXrFlHHKTJK7rXtonRG1r8",
    authDomain: "new-native-project.firebaseapp.com",
    databaseURL: "https://new-native-project-default-rtdb.firebaseio.com",
    projectId: "new-native-project",
    storageBucket: "new-native-project.appspot.com",
    messagingSenderId: "219192469154",
    appId: "1:219192469154:web:02dcf78622d0ae301199fb",
    measurementId: "G-FKHE9LZD6T"
  };
   
  // Initialize Firebase
firebase.initializeApp(Config);
export default firebase.database()