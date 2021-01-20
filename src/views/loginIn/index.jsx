import React, { useState } from 'react';
import PropTypes from 'prop-types';
import switchLoginMethods from '../../firebase/users/sigInAndCreateSwitch';
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
        
        setErrors({});
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = values;

        switchLoginMethods(email, password, nextStep, setErrors);
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