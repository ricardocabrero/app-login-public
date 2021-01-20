import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Paragraph = ({text}) => {
    return(
        <p className={styles.text}>{text}</p>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Paragraph;