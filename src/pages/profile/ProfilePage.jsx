import React from 'react';

import './ProfilePage.scss';

import AccountInfoBlock from "../../components/AccountInfoBlock/AccountInfoBlock";
import AccountOptionsBlock from "../../components/AccountOptionsBlock/AccountOptionsBlock";

const ProfilePage = () => {
    return (
        <div className="profilePage" >
            <AccountOptionsBlock />
            <AccountInfoBlock />
        </div>
    );
};

export default ProfilePage;
