import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Input = (props) => {
    const {value, placeholder, id, fnc, type, text, autoComplete} = props;

    return(
        <>
            <label htmlFor={id} className={styles.sr}>{text}</label>
            <input className={styles.input} 
            onChange={fnc} 
            value={value} 
            placeholder={placeholder} 
            id={id}
            name={id} 
            type={type}
            autoComplete={autoComplete}
            />
        </>
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fnc: PropTypes.func.isRequired, 
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    autoComplete: PropTypes.string.isRequired,
}

export default Input;