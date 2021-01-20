import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import {formatDays, formatTime} from '../../utils/formats';
import Entry from './entry';

const TimeDiff = ({time}) => {
    const {days, hours, minutes, seconds} = time;
    const daysF = formatDays(days);
    const hoursF = formatTime(hours, 24);
    const minutesF = formatTime(minutes, 60);
    const secondsF = formatTime(seconds, 60);

    return (
        <div className={styles.time}>
            <Entry time={daysF} text={'days'}/>
            <Entry time={hoursF} text={'hours'}/>
            <Entry time={minutesF} text={'minutes'}/>
            <Entry time={secondsF} text={'seconds'}/>
        </div>
    )
}

TimeDiff.propTypes = {
    time: PropTypes.object.isRequired,
}

export default TimeDiff;