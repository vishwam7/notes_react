import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBJ9nl3Qjb3tlasTswyKAk6xbT6dvQcJhM",
    authDomain: "notesapp-6522b.firebaseapp.com",
    databaseURL: "https://notesapp-6522b.firebaseio.com",
    projectId: "notesapp-6522b",
    storageBucket: "notesapp-6522b.appspot.com",
    messagingSenderId: "1031577703276",
    appId: "1:1031577703276:web:184af0ca70536bd8545949"
});

ReactDOM.render( <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('note-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();