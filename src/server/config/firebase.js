import firebase from 'firebase'

const config = {} // objeto de configuração do firebase

firebase.initializeApp(config)

const db = firebase.firestore()

export default db