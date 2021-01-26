import firebase from "firebase"
import "firebase/storage"
import "firebase/auth"

 const app = firebase.initializeApp({
    "projectId": "game-shop-react",
    "appId": "1:294948387672:web:d576560742317f90e9032d",
    "storageBucket": "game-shop-react.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDu4d7XNfYYncrxlMafKIKf8wCDM4981m8",
    "authDomain": "game-shop-react.firebaseapp.com",
    "messagingSenderId": "294948387672",
    "measurementId": "G-V7W4JKEBPH"
  })
  
  export default app