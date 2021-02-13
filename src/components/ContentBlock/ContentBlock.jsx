import React from 'react';

import './ContentBlock.scss';

import News from "./News/News";

const ContentBlock = () => {
    return (
        <div className="contentBlock" >
            <News />
        </div>
    );
};

export default ContentBlock;
