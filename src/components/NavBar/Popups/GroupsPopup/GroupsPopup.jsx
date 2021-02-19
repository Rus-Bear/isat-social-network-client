import React from 'react';

import './GroupsPopup.scss';
import UserBlock from "./UserBlock/UserBlock";

const GroupsPopup = () => {
    return (
        <div className="popups">
            <div className="popups__groupsPopup" >
                <UserBlock />
                <UserBlock />
                <UserBlock />
                <UserBlock />
                <UserBlock />
            </div>
        </div>
    );
};

export default GroupsPopup;
