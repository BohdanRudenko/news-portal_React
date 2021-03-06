import React from 'react';

import prepareDate from 'utils/prepareDate';

import './style.scss';


interface IDateViewParams {
    value : string;
}

const DateView: React.FunctionComponent<IDateViewParams> = ({ value }) => {
    const {day, month} = prepareDate(value)
    return(
        <p className='dateView'>
            <span className='day'>{day}</span> / {" "}
            <span className='month'>{month}</span>
        </p>
    );
}

export default DateView