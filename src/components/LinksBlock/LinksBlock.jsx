import React from 'react';
import {Link} from "react-router-dom";

import './LinksBlock.scss';

const LinksBlock = () => {
    return (
        <div className="linksBlock" >
            <Link to="/profile" ><img alt="profileImg" src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" /><p>Максим Комов</p></Link>
            <Link to="/friends" ><i className="fas fa-user-friends"></i><p>Друзья</p></Link>
            <Link to="/weather" ><i className="fas fa-cloud-sun"></i><p>Погода</p></Link>
            <Link to="/maps" ><i className="fas fa-map-marked-alt"></i><p>Карты</p></Link>
            <Link to="/music" ><i className="fas fa-record-vinyl"></i><p>Музыка</p></Link>
        </div>
    );
};

export default LinksBlock;
