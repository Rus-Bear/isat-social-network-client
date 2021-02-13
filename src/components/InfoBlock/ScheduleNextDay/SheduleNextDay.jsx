import React from 'react';

import './SheduleNextDay.scss';

import Lesson from "./Lesson/Lesson";

const SheduleNextDay = () => {
    return (
        <div className="sheduleNextDay" >
            <h3>Расписание на завтра</h3>
            <div className="sheduleNextDay__lessons" >
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </div>
    );
};

export default SheduleNextDay;
