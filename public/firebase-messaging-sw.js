importScripts(
    '/bower_components/firebase/firebase-app.js',
    '/bower_components/firebase/firebase-messaging.js'
);

firebase.initializeApp({
    apiKey: "AIzaSyA7EbzPZ05OQdmVE1RDugffQzrymjt_WdE",
    authDomain: "noteguu-61501.firebaseapp.com",
    databaseURL: "https://noteguu-61501.firebaseio.com",
    storageBucket: "noteguu-61501.appspot.com",
    messagingSenderId: "1012796826573"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler();