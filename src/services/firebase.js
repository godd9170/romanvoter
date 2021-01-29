import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
})

const db = firebase.firestore()

const addVote = () => {
  db.collection("votes")
    .add({
      test: "this",
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error)
    })
}
