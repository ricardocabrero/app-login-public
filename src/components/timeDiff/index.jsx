import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import {formatDays, formatTime} from '../../utils/formats';
import Entry from './entry';

const TimeDiff = ({time}) => {

    const {days, hours, minutes, seconds} = time;
    
    const timeEntries = [
        {
            time: formatDays(days),
            text: 'days'
        },
        {
            time: formatTime(hours, 24),
            text: 'hours'
        },
        {
            time: formatTime(minutes, 60),
            text: 'minutes'
        },
        {
            time: formatTime(seconds, 60),
            text: 'seconds'
        },
    ];

    return (
        <div className={styles.time}>
            {timeEntries.map(el => 
                <Entry key={el.text} time={el.time} text={el.text}/>
            )}
        </div>
    )
}

TimeDiff.propTypes = {
    time: PropTypes.object.isRequired,
}

export default TimeDiff;