import React from 'react';

import './AddPostBlock.scss';

const AddPostBlock = () => {

    function expandTextarea(id) {
        document.getElementById(id).addEventListener('keyup', function() {
            this.style.height = 0;
            this.style.height = this.scrollHeight + 'px';
        }, false);
    }

    React.useEffect(() => {
        expandTextarea('addPostTextArea');
    })

    return (
        <div className="addPost">
            <div className="addPost__postText">
                <img src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" alt="userImg"/>
                <div>
                    <textarea placeholder="Что нового?" id="addPostTextArea" ></textarea>
                </div>
            </div>
            <div className="addPost__postOptions">
                <div className="addPost__postOptions_addFiles">
                    <input type="file" id="addPhoto" accept="image/png,image/jpeg" />
                    <label htmlFor="addPhoto"><i className="far fa-image"></i></label>
                    <input type="file" id="addFile" />
                    <label htmlFor="addFile"><i className="far fa-file"></i></label>
                </div>
                <button>Опубликовать</button>
            </div>
        </div>
    );
};

export default AddPostBlock;
