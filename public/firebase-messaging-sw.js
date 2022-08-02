


importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyClGcQyJ1Uu33za19Rn1pNKGgexbPuw6uI",
    authDomain: "fir-cloud-messaging-6ac8d.firebaseapp.com",
    projectId: "fir-cloud-messaging-6ac8d",
    storageBucket: "fir-cloud-messaging-6ac8d.appspot.com",
    messagingSenderId: "338837083559",
    appId: "1:338837083559:web:3a70426caffde0bc681282"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "/logo192.png",
    };
  
    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });