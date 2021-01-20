// import React, { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import logoutFirebase from '../../firebase/users/logoutFn';
import SuscribeTime from '../../firebase/users/setLastTimeCustomHook';
import styles from './style.module.css';
import TimeDiff from '../../components/timeDiff';
import Button from '../../components/button';
import Title from '../../components/title';
import Paragraph from '../../components/paragraph';

const LoginOut = ({prevStep}) => {

    const lastTimeSigIn = SuscribeTime();

    const handleClick = (e) => {
        e.preventDefault();
        logoutFirebase();
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