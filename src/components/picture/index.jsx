import React from 'react'
import styles from './style.module.css';
import padlock from '../../images/padlock.svg';

const Picture = () => {
    return(
        <span className={styles.icon}>
            <img src={padlock} alt="padlock"/>
        </span>
    )
}

export default Picture;