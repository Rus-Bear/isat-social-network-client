import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__searchBlock">
                <img alt="social-logo" src="https://avatars.mds.yandex.net/get-zen_doc/1534997/pub_5d73a5de86c4a900ae934969_5d73b34c4735a600aee9cb4f/scale_1200" />
                <input type="search" />
            </div>
            <div className="navBar__mainBlock">
                <a href="#" >Ссылка</a>
                <a href="#" >Ссылка</a>
                <a href="#" >Ссылка</a>
                <a href="#" >Ссылка</a>
                <a href="#" >Ссылка</a>
            </div>
            <div className="navBar__appsBlock">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
        </div>
    );
};

export default NavBar;
