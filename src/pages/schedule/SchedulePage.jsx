import React from 'react';

import './SchedulePage.scss';
import {NavLink} from "react-router-dom";
import ScheduleTable from "../../components/ScheduleTable/ScheduleTable";

const SchedulePage = () => {
    return (
        <div className="schedulePage" >
            <div className="schedulePage__daysBlock">
                <NavLink to="/schedule/monday" >Понедельник</NavLink>
                <NavLink to="/schedule/tuesday" >Вторник</NavLink>
                <NavLink to="/schedule/wednesday" >Среда</NavLink>
                <NavLink to="/schedule/thursday" >Четверг</NavLink>
                <NavLink to="/schedule/friday" >Пятница</NavLink>
                <NavLink to="/schedule/saturday" >Суббота</NavLink>
            </div>
            <div className="schedulePage__nominatorBlock">
                <h3>Числитель</h3>
                <ScheduleTable />
            </div>
            <div className="schedulePage__denominatorBlock">
                <h3>Знаменатель</h3>
                <ScheduleTable />
            </div>
        </div>
    );
};

export default SchedulePage;
