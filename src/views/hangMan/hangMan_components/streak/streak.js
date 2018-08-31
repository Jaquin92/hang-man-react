import React from 'react';
import './streak.css';

const Streak = (props) => {
    return (
        <div className={'streak-body'} >Streak:{`${props.currentStreak}`}</div>
    )
};

export default Streak;