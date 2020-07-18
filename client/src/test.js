import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('ObjectID').collection('cardItems').doc('ObjectId');

firestore.doc('users/ObjectID/cardItems/ObjectId');
firestore.collection('users/ObjectID/cardItems');
