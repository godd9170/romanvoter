import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
})

const db = firebase.firestore()

export const addVote = (voteId, vote) => {
  db.collection("votes")
    .doc(voteId)
    .set({ ...vote }, { merge: true })
    .catch((error) => {
      console.error("Error adding document: ", error)
    })
}

export const streamVoters = (voteId, observer) => {
  return (
    db
      .collection("votes")
      .doc(voteId)
      //.orderBy('created')
      .onSnapshot(observer)
  )
}
