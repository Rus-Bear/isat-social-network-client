import React from 'react';

import './InfoBlock.scss';

import SheduleNextDay from "./ScheduleNextDay/SheduleNextDay";
import Weather from "./Weather/Weather";

const InfoBlock = () => {
    return (
        <div className="infoBlock" >
            <SheduleNextDay />
            <Weather />
        </div>
    );
};

export default InfoBlock;
