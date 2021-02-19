import React from 'react';

import './HomePage.scss';

import LinksBlock from "../../components/LinksBlock/LinksBlock";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import AddPostBlock from "../../components/AddPostBlock/AddPostBlock";

const HomePage = () => {
    return (
        <div className="homePage" >
            <LinksBlock />
            <div className="homePage__newsBlock" >
                <AddPostBlock />
                <ContentBlock />
            </div>
            <InfoBlock />
        </div>
    );
};

export default HomePage;
