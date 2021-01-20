import React from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types'; 

const Button = (props) => {
    const {classN, type, text, fnc} = props;

    return(
        <button 
        className={classN === 'login' ? `${styles.buttonLogin}` : `${styles.buttonLogout}`}
        onClick={fnc} 
        type={type}>{text}</button>
    )
}

Button.propTypes = {
    classN: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    fnc: PropTypes.func,
}

export default Button;