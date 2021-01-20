import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Error = ({message}) => {
    return(
        <p className={styles.error}>{message}</p>
    )
}

Error.propTypes = {
    message: PropTypes.string,
}

export default Error;