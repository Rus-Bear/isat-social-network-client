import React from 'react';

import './ProfilePage.scss';

import AccountInfoBlock from "../../components/AdditionalAccountInfoBlock/AccountInfoBlock";

const ProfilePage = () => {
    return (
        <div className="profilePage" >
            <div className="profilePage__avatar" >
                <img src="https://sun2-10.userapi.com/s/v1/if1/dQzYqnx7GFiIXurQubAF1qoEblTc_Sr2aVg8Nj1h_sxcWblUHadtAcFOqECcmhPgFsPxEV18.jpg?size=200x0&quality=96&crop=0,0,1728,2160&ava=1" alt="profileImg" />
            </div>
            <AccountInfoBlock />
        </div>
    );
};

export default ProfilePage;
