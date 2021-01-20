import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Title = ({text}) => {
    return(
        <h1 className={styles.title}>{text}</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Title;