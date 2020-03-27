import firebase from 'firebase';

try {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
  };
  firebase.initializeApp(config);
} catch (err) {
  console.log(err);
}

export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export default firebase;
