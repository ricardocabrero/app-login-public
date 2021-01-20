import { firebase } from '../firebaseConfig';

const logoutFirebase = () => {
    firebase.auth().signOut();
}

export default logoutFirebase;