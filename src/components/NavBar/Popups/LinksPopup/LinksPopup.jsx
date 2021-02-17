import React from 'react';

import './LinksPopup.scss';
import LinkBlock from "./LinkBlock/LinkBlock";

const LinksPopup = () => {
    return (
        <div className="linksPopup" >
            <LinkBlock />
            <LinkBlock />
            <LinkBlock />
        </div>
    );
};

export default LinksPopup;
