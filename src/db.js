import config from './config';
import firebase from 'firebase';

// Initialize Firebase
const app = firebase.initializeApp(config);
const db = firebase.database();

export default db;
