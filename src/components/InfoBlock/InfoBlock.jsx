import React from 'react';

import './InfoBlock.scss';

import SheduleNextDay from "./ScheduleNextDay/SheduleNextDay";
import Weather from "./Weather/Weather";

const InfoBlock = () => {
    return (
        <div className="infoBlock" >
            <div>
                <SheduleNextDay />
                <Weather />
            </div>
        </div>
    );
};

export default InfoBlock;
