import React, { useState } from 'react';
import styles from './style.module.css'
import LoginIn from '../loginIn'
import LoginOut from '../loginOut';

const Main = () => {
    const [loginIn, setLogin] = useState(false);

    const handleLogoutView = () => {
        setLogin(true)
    }

    const handleLoginView = () => {
        setLogin(false)
    }

    const conditionalRender = loginIn 
    ? <LoginOut prevStep={handleLoginView}/>
    : <LoginIn nextStep={handleLogoutView}/> 


    return(
        <div className={loginIn ? `${styles.main} ${styles.white}` : `${styles.main}`}>
            {conditionalRender}
        </div>
    )
}

export default Main;