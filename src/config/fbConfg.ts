import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBBEta3Oy7gIcre8awGUotavO5Sdsz6PEc",
  authDomain: "kaj-manage.firebaseapp.com",
  projectId: "kaj-manage",
  storageBucket: "kaj-manage.appspot.com",
  messagingSenderId: "82921915752",
  appId: "1:82921915752:web:66a7c7aaea215d4c62c2dd",
  measurementId: "G-W6Y8ZNPR1X",
}

initializeApp(firebaseConfig)
export default getFirestore()
