
import { useEffect, useState } from 'react';
import { firebase, db } from '../firebaseConfig';
import moment from 'moment';

const SuscribeTime = () => {
    const [lastTimeSigIn, setLastTimeSigIn] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {

        let unSubscribe = false;
    
        firebase.auth().onAuthStateChanged(user => { 
            if(!unSubscribe) {
                const user = firebase.auth().currentUser;
                const dataLastDb = moment().format("YYYY-MM-DDTHH:mm");
                const docRef = db.collection('users').doc(user.email);
    
                docRef.get().then(doc => {
                    if(doc.exists) {
                        const now = moment();
                        const dataLast = moment(doc.data().dataLastDb, "YYYY-MM-DDTHH:mm");
                        setLastTimeSigIn({
                            days: now.diff(dataLast, 'days'),
                            hours: now.diff(dataLast, 'hours'),
                            minutes: now.diff(dataLast, 'minutes'),
                            seconds: now.diff(dataLast, 'seconds'),
                        });
                    } 
    
                    db.collection('users').doc(user.email).set({ 
                        dataLastDb,
                    });
                });
            }
        });   
    
        return () => {
            unSubscribe = true;
        }
    
    },[]);

    return lastTimeSigIn;
}

export default SuscribeTime;