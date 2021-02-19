import React from 'react';

import './LinksPopup.scss';
import LinkBlock from "./LinkBlock/LinkBlock";

const LinksPopup = () => {
    return (
        <div className="popups">
            <div className="popups__linksPopup" >
                <LinkBlock />
                <LinkBlock />
                <LinkBlock />
            </div>
        </div>
    );
};

export default LinksPopup;
