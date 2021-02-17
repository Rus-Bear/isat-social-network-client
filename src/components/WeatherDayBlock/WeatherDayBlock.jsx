import React from 'react';

import './WeatherDayBlock.scss';

const WeatherDayBlock = () => {
    return (
        <div className="weatherDayBlock">
            <div className="weatherDayBlock__date">
                <h3>Пн</h3>
                <h4>23 февраля</h4>
            </div>
            <div className="weatherDayBlock__generalInfo">
                <i className="far fa-sun"></i>
                <p>Днем: <span>-6°</span></p>
                <p>Ночью: <span>-12°</span></p>
            </div>
            <div className="weatherDayBlock__overInfo">
                <div className="weatherDayBlock__overInfo_paragraph">
                    <i className="fas fa-wind"></i>
                    <p>6.5 м/с, ЮЗ</p>
                </div>
                <div className="weatherDayBlock__overInfo_paragraph">
                    <i className="fas fa-tint"></i>
                    <p>83%</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDayBlock;
