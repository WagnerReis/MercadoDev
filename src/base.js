const firebaseConfig = {
    apiKey: "AIzaSyCwjEW9biBLx7emq_fZzJwyHG0E5M0y2pM",
    authDomain: "mercadodev-509f1.firebaseapp.com",
    databaseURL: "https://mercadodev-509f1.firebaseio.com",
    projectId: "mercadodev-509f1",
    storageBucket: "gs://mercadodev-509f1.appspot.com",
    messagingSenderId: "987329108964",
    appId: "1:987329108964:web:417ac257a306c9341785f1"
} 

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base