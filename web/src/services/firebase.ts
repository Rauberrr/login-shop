import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyBl8ORDeDt1lmXc9O-id5epL9yTwIqqHpw",
  
    authDomain: "loginshop-405715.firebaseapp.com",
  
    projectId: "loginshop-405715",
  
    storageBucket: "loginshop-405715.appspot.com",
  
    messagingSenderId: "361038505703",
  
    appId: "1:361038505703:web:204dff475df5ca30b8e442"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)