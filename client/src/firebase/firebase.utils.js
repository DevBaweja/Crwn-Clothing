import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDwhfPag5OtdUfzZqCc6BGN7tI6laWgICk',
    authDomain: 'crown-clothing-3518d.firebaseapp.com',
    databaseURL: 'https://crown-clothing-3518d.firebaseio.com',
    projectId: 'crown-clothing-3518d',
    storageBucket: 'crown-clothing-3518d.appspot.com',
    messagingSenderId: '717941750097',
    appId: '1:717941750097:web:8f5d86f9b035ac7309bb70',
    measurementId: 'G-GFKZWL3M5D',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log('Error : Creating User', err.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objects) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objects.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
        };
    });
    return transformedCollections.reduce((acc, cur) => {
        acc[cur.title.toLowerCase()] = cur;
        return acc;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
