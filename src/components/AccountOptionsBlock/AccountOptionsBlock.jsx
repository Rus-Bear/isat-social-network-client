import React from 'react';

import "./AccountOptionsBlock.scss";

const AccountOptionsBlock = () => {
    return (
        <div className="accountOptions" >
            <div className="accountOptions__block">
                <img src="https://sun2-10.userapi.com/s/v1/if1/dQzYqnx7GFiIXurQubAF1qoEblTc_Sr2aVg8Nj1h_sxcWblUHadtAcFOqECcmhPgFsPxEV18.jpg?size=200x0&quality=96&crop=0,0,1728,2160&ava=1" alt="profileImg" />
                <button>Добавить в друзья</button>
                <button>Написать сообщение</button>
            </div>
        </div>
    );
};

export default AccountOptionsBlock;
