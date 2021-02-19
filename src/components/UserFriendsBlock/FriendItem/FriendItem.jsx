import React from 'react';
import {Link} from "react-router-dom";

import './FriendItem.scss';

const FriendItem = () => {
    return (
        <div className="friendItem">
            <img src="https://sun2-10.userapi.com/s/v1/ig2/P7d-zu9maFdfg5G17FUEdEtohSnqHvOFKkat0v6qkq4EOf3dqrkDBjwchr-oBuif7DCYj0bCFseRCeMx_q7tSvbZ.jpg?size=200x0&quality=96&crop=54,8,442,442&ava=1" alt="userImg"/>
            <div className="friendItem__friendInfo">
                <Link className="friendItem__friendInfo_userPage" to="/profile" >Анастасия Арефьева</Link>
                <Link className="friendItem__friendInfo_userChat" to="/chat?_id=123456789">Открыть чат</Link>
            </div>
        </div>
    );
};

export default FriendItem;
