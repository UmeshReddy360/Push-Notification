import firebase from 'firebase/compat/app';
import  'firebase/compat/messaging'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyClGcQyJ1Uu33za19Rn1pNKGgexbPuw6uI",
  authDomain: "fir-cloud-messaging-6ac8d.firebaseapp.com",
  projectId: "fir-cloud-messaging-6ac8d",
  storageBucket: "fir-cloud-messaging-6ac8d.appspot.com",
  messagingSenderId: "338837083559",
  appId: "1:338837083559:web:3a70426caffde0bc681282"
}
firebase.initializeApp(firebaseConfig)

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;
const messaging=firebase.messaging()

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });