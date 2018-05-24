import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCgUiH_q8qCo30qyj44j0OGeypehx5gIJg",
    authDomain: "noteherder-9a2f8.firebaseapp.com",
    databaseURL: "https://noteherder-9a2f8.firebaseio.com",
    projectId: "noteherder-9a2f8",
    storageBucket: "noteherder-9a2f8.appspot.com",
    messagingSenderId: "561765059103",
}
firebase.initializeApp(config)
export default firebase