import { initializeApp } from 'firebase'

const app = initializeApp({
	apiKey: "AIzaSyCN8FVkY2coL1PoF0sfM_zONC2PRh5-KZ0",
    authDomain: "monopolloi.firebaseapp.com",
    databaseURL: "https://monopolloi.firebaseio.com",
    projectId: "monopolloi",
    storageBucket: "monopolloi.appspot.com",
    messagingSenderId: "130282149770",
    appId: "1:130282149770:web:168bbbce3af38045361a73",
    measurementId: "G-4VVNHB2TN0"
});

export const db = app.firestore()

// export const une_ref = db.collection('ref')


export const functions = app.functions()




