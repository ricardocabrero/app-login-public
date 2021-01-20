import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Entry = ({time, text}) => {
    return(
        <p className={styles.entry}>
            <span>{time}</span>
            <span>{text}</span>
        </p>
    )
}

Entry.propTypes = {
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Entry;