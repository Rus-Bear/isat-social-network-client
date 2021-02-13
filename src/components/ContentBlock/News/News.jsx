import React from 'react';

import './News.scss';
import Post from "./Post/Post";

const News = () => {
    return (
        <div className="news" >
            <h3>Новости</h3>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default News;
