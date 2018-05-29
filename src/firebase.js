import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCgUiH_q8qCo30qyj44j0OGeypehx5gIJg",
    authDomain: "noteherder-9a2f8.firebaseapp.com",
    databaseURL: "https://noteherder-9a2f8.firebaseio.com",
    projectId: "noteherder-9a2f8",
    storageBucket: "noteherder-9a2f8.appspot.com",
    messagingSenderId: "561765059103",
}

const app = firebase.initializeApp(config)
const db = firebase.database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)

