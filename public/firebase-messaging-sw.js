importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    // apiKey: "AIzaSyDmWvXXUoKPUwUnx82xlinU6oPkWyIpAYM",
    // authDomain: "mys-dev-ef76d.firebaseapp.com",
    // projectId: "mys-dev-ef76d",
    // storageBucket: "mys-dev-ef76d.appspot.com",
    // messagingSenderId: "1061981034499",
    // appId: "1:1061981034499:web:8a2caf1d58afeec9f15636",
    // measurementId: "G-ZJQWGF9CJ9"

//  product
  apiKey: "AIzaSyA8gZ2MPKwhFwwTGW0TT4UHEw5o6U-gh5U",
  authDomain: "mys-mapping-your-success-tns.firebaseapp.com",
  projectId: "mys-mapping-your-success-tns",
  storageBucket: "mys-mapping-your-success-tns.appspot.com",
  messagingSenderId: "248864588349",
  appId: "1:248864588349:web:dcb3c798985ec3f9e02054",
  measurementId: "G-DKTNK38EYY"
});

const messaging = firebase.messaging();