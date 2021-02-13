import React from 'react';

import './LinksBlock.scss';

const LinksBlock = () => {
    return (
        <div className="linksBlock" >
            <a href="#"><img alt="profileImg" src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" /><p>Максим Комов</p></a>
            <a href="#"><i className="fas fa-cloud-sun"></i><p>Погода</p></a>
            <a href="#"><i className="fas fa-map-marked-alt"></i><p>Карты</p></a>
        </div>
    );
};

export default LinksBlock;
