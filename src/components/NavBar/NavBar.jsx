import React from 'react';
import {Link, NavLink} from "react-router-dom";

import './NavBar.scss';

import SettingsPopup from "./Popups/SettingsPopup/SettingsPopup";
import LinksPopup from "./Popups/LinksPopup/LinksPopup";
import GroupsPopup from "./Popups/GroupsPopup/GroupsPopup";

const NavBar = () => {
    const [viewPopup, setViewPopup] = React.useState('hide');

    const setPopupType = (type) => {
        viewPopup === type ? setViewPopup('hide'): setViewPopup(type)
    }

    return (
        <div className="navBar">
            <div className="navBar__searchBlock">
                <img alt="social-logo" src="assets/img/logo.png" />
                <i className="fas fa-search"></i><input type="search" placeholder="Найти в Lacis" />
            </div>
            <div className="navBar__mainBlock">
                <NavLink exact to="/" data-tooltip="Главная" ><i className="fas fa-home"></i></NavLink>
                <NavLink to="/chat" data-tooltip="Чат" ><i className="fas fa-comments"></i></NavLink>
                <NavLink to="/video-conference" data-tooltip="Видеочат" ><i className="fas fa-video"></i></NavLink>
                <NavLink to="/schedule" data-tooltip="Расписание" ><i className="fas fa-stream"></i></NavLink>
            </div>
            <div className="navBar__appsBlock">
                <NavLink to="/profile" ><img alt="profileImg" src="https://sun2-10.userapi.com/s/v1/if1/HthZ29x_WWEFYFTTC2C7DhBw-ahsMrkwE8zsrqHU8pqmA1l8lLFGINNlcQh9vB7RLNW6Hmiq.jpg?size=50x0&quality=96&crop=173,173,1382,1382&ava=1" /><p>Максим</p></NavLink>
                <button
                    onClick={() => setPopupType("groups")}
                    className="navBar__appsBlock_iconButton"
                    data-tooltip="Группа"
                >
                    <i className="fas fa-users"></i>
                </button>
                <button
                    onClick={() => setPopupType("links")}
                    className="navBar__appsBlock_iconButton"
                    data-tooltip="Ссылки"
                >
                    <i className="fas fa-link"></i>
                </button>
                <button
                    onClick={() => setPopupType("settings")}
                    className="navBar__appsBlock_iconButton"
                    data-tooltip="Настройки"
                >
                    <i className="fas fa-sliders-h"></i>
                </button>
            </div>
            <div className="navBar__popups">
                {
                    viewPopup === "settings" ?
                        <SettingsPopup />
                        :
                        ''
                }
                {
                    viewPopup === "links" ?
                        <LinksPopup />
                        :
                        ''
                }
                {
                    viewPopup === "groups" ?
                        <GroupsPopup />
                        :
                        ''
                }
            </div>
        </div>
    );
};

export default NavBar;
