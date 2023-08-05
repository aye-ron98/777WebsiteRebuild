import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = require('./secretes.json') // path to config file

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const userEmails = db.collection('subscribe-emails');


export async function addEmail(email) {
    try {
        await userEmails.add({
            email: email,
        });
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
