import React from 'react';

import './SettingsPopup.scss';
import SettingsLinkBlock from "./SettingsLinkBlock/SettingsLinkBlock";

const SettingsPopup = () => {
    return (
       <div className="popups">
           <div className="settingsPopup" >
               <SettingsLinkBlock icon={<i className="fas fa-user"></i>} link={"/profile-settings"} text={"Настройки профиля"} />
               <SettingsLinkBlock icon={<i className="fas fa-heart"></i>} link={"/admin-request"} text={"От разработчика"} />
           </div>
       </div>
    );
};

export default SettingsPopup;
