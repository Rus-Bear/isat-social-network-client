import React from 'react';
import {Link} from "react-router-dom";

import './UserFriendsBlock.scss';

import FriendItem from "./FriendItem/FriendItem";

const UserFriendsBlock = () => {
    return (
        <div className="userFriends">
            <div className="userFriends__searchBlock">
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Поиск друзей" />
            </div>
            <div className="userFriends__friendsBlock">
                <div className="userFriends__friendsBlock_globalSearchLink" >
                    <Link to="/search"><i className="fas fa-globe"></i><span>Перейти в поиск по Lacis</span></Link>
                </div>
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
            </div>
        </div>
    );
};

export default UserFriendsBlock;
