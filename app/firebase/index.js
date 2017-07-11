import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDPKTXkRyN8McdNwTMr_GenH64ndFWbaHs",
    authDomain: "todo-react-5ed90.firebaseapp.com",
    databaseURL: "https://todo-react-5ed90.firebaseio.com",
    projectId: "todo-react-5ed90",
    storageBucket: "todo-react-5ed90.appspot.com",
    messagingSenderId: "80084888910"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
