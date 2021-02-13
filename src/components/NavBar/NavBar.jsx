import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__searchBlock">
                <img alt="social-logo" src="assets/img/logo.png" />
                <i className="fas fa-search"></i><input type="search" placeholder="Найти в Lacis" />
            </div>
            <div className="navBar__mainBlock">
                <a data-tooltip="Новости" className="active" href="#" ><i className="fas fa-newspaper"></i></a>
                <a data-tooltip="Чат" href="#" ><i className="fas fa-comments"></i></a>
                <a data-tooltip="Видеочат" href="#" ><i className="fas fa-video"></i></a>
                <a data-tooltip="Расписание" href="#" ><i className="fas fa-stream"></i></a>
            </div>
            <div className="navBar__appsBlock">
                <button className="navBar__appsBlock_imgButton" ><img alt="profileImg" src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" /><p>Максим</p></button>
                <button className="navBar__appsBlock_iconButton" data-tooltip="Группа" ><i className="fas fa-users"></i></button>
                <button className="navBar__appsBlock_iconButton" data-tooltip="Ссылки" ><i className="fas fa-link"></i></button>
                <button className="navBar__appsBlock_iconButton" data-tooltip="Настройки" ><i className="fas fa-sliders-h"></i></button>
            </div>
        </div>
    );
};

export default NavBar;
