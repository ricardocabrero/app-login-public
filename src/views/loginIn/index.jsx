import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase, db } from '../../firebase/firebaseConfig';
import styles from './style.module.css';
import Picture from '../../components/picture';
import Error from '../../components/error';
import Button from '../../components/button';
import Input from '../../components/input';

const LoginIn = ({nextStep}) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = ({target}) => {
        const { name, value } = target;
        
        setValues({
            ...values,
            [name] : value
        });
        
        setErrors({})
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();

        const { email } = values;
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
    
    const {email, password} = values;
    const conditionalRederError = errors.message && <Error message={errors.message}/>;

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <Picture/>
            {conditionalRederError}    
            <div className={styles.field}>
                <Input
                text={'Email'}
                value={email} 
                placeholder={'Email'} 
                id={'email'} 
                fnc={handleChange} 
                type={'text'} 
                autoComplete={'off'}
                />
            </div>
            <div className={styles.field}>
                <Input
                text={'Password'}
                value={password} 
                placeholder={'Password'} 
                id={'password'} 
                fnc={handleChange} 
                type={'text'} 
                autoComplete={'off'}
                />
            </div>
            <Button 
            classN={'login'}
            type={'submit'}
            text={'Log in'}
            />
        </form>
    )
}

LoginIn.propTypes = {
    nextStep: PropTypes.func.isRequired,
}

export default LoginIn;