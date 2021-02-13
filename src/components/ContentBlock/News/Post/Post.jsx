import React from 'react';

import './Post.scss';

const Post = () => {
    return (
        <div className="post" >
            <div className="post__header" >
                <img src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" alt="userLogo"/>
                <div className="post__header_info" >
                    <p>Комов Максим</p>
                    <span>3 ч</span>
                </div>
            </div>
            <div className="post__imgs" >
                <img src="https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5df380a26f5f6f00ae722794_5df38110e6e8ef00b0203d3b/scale_1200" alt="img"/>
            </div>
            <div className="post__text" >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi, consectetur distinctio et excepturi minima natus nisi obcaecati perferendis placeat sed totam ut? Dolorum eligendi explicabo fugit magni unde?</p>
            </div>
        </div>
    );
};

export default Post;
