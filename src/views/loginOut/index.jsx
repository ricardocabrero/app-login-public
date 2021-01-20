import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {firebase, db} from '../../firebase/firebaseConfig';
import moment from 'moment';
import styles from './style.module.css';
import TimeDiff from '../../components/timeDiff';
import Button from '../../components/button';
import Title from '../../components/title';
import Paragraph from '../../components/paragraph';

const LoginOut = ({prevStep}) => {

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
            const docRef = db.collection("users").doc(user.email);

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

    const handleClick = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
        prevStep();
    }

    return(
        <div className={styles.wrapper}>
            <Title text={'Welcome!'}/>
            <Paragraph text={'The last time you accessed was'}/>
            <div className={styles.time}>
                <TimeDiff time={lastTimeSigIn}/>
            </div>
            <Button 
            fnc={handleClick}
            classN={'logout'}
            type={'button'}
            text={'logout'}
            />
        </div>
    )
}

LoginOut.propTypes = {
    prevStep: PropTypes.func.isRequired,
}

export default LoginOut;