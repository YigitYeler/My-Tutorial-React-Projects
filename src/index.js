import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZPZ8-BKUPIUMZ7jklLl7k-IIOoJN68A8",
    authDomain: "noteapp-d8e7d.firebaseapp.com",
    databaseURL: "https://noteapp-d8e7d.firebaseio.com",
    projectId: "noteapp-d8e7d",
    storageBucket: "noteapp-d8e7d.appspot.com",
    messagingSenderId: "579175575636",
    appId: "1:579175575636:web:a0adbe192d73f9ce127dc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
