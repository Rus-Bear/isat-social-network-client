import React from 'react';

import './HomePage.scss';

import LinksBlock from "../../components/LinksBlock/LinksBlock";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

const HomePage = () => {
    return (
        <div className="homePage" >
            <LinksBlock />
            <ContentBlock />
            <InfoBlock />
        </div>
    );
};

export default HomePage;
