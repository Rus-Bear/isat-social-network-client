import React from 'react';
import {Link} from 'react-router-dom';

import './SettingsLinkBlock.scss';

const SettingsLinkBlock = ({icon, link, text}) => {
    return (
        <Link className="settingsLink" to={link} >
            {icon}
            <p>{text}</p>
        </Link>
    );
};

export default SettingsLinkBlock;
