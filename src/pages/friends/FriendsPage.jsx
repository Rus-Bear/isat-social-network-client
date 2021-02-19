import React from 'react';

import './FriendsPage.scss';
import UserFriendsBlock from "../../components/UserFriendsBlock/UserFriendsBlock";

const FriendsPage = () => {
    return (
        <div className="friendsPage">
            <UserFriendsBlock />
        </div>
    );
};

export default FriendsPage;
