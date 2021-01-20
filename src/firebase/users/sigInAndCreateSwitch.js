import { firebase, db } from '../firebaseConfig';

const switchLoginMethods = (email, password, nextStep, setErrors) => {
    
    const docRef = db.collection('users').doc(email || 'default');

    docRef.get().then(doc => {
        if (doc.exists) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    nextStep();
                })
                .catch((error) => {
                    setErrors(error);
                });
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    nextStep();
                })
                .catch((error) => {
                    setErrors(error);
                });
            }
    });
}

export default switchLoginMethods;
