import { firebase, db } from '../firebaseConfig';

const signUserInFirebase = async (email, password, fnNext, fnError) => {
    const sigIn = await firebase.auth().signInWithEmailAndPassword(email, password);
    return sigIn;
}

const createUserInFirebase = async (email, password, nextStep, setErrors) => {
    const createIn = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return createIn;
}

const getDocFirebase = async (docRef) => {
    const docRefFirebase = await docRef.get();
    return docRefFirebase;
}

const switchLoginMethods = (email, password, nextStep, setErrors) => {
    const docRef = db.collection('users').doc(email || 'default');

    getDocFirebase(docRef)
    .then(doc => {
        if (doc.exists) {
            signUserInFirebase(email, password, nextStep, setErrors)
            .then(user => {
                nextStep()
            })
            .catch(error => {
                setErrors(error);
            });
        } else {
            createUserInFirebase(email, password, nextStep, setErrors)
            .then(user => {
                nextStep();
            })
            .catch(error => {
                setErrors(error);
            });
        }
    })
}

export default switchLoginMethods;
