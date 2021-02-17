import React from 'react';

import './WeatherPage.scss';

import WeatherDayBlock from "../../components/WeatherDayBlock/WeatherDayBlock";

const WeatherPage = () => {
    return (
        <div className="weatherPage" >
            <div className="weatherPage__weatherBlock">
                <div className="weatherPage__weatherBlock_actualInfo">
                    <div className="weatherPage__weatherBlock_actualInfo_header">
                        <h2>Погода в Воронеже</h2>
                        <p>Сейчас 21:46. Вчера в это время -20°C</p>
                    </div>
                    <div className="weatherPage__weatherBlock_actualInfo_body">
                        <h1>-12°</h1>
                        <i className="far fa-sun"></i>
                        <p>Облачно с прояснениями<br /><span>Ощущается как</span> -20°</p>
                    </div>
                    <div className="weatherPage__weatherBlock_actualInfo_footer">
                        <i className="fas fa-wind"></i>
                        <p>6.5 м/с, ЮЗ</p>
                        <i className="fas fa-tint"></i>
                        <p>83%</p>
                    </div>
                </div>
                <div className="weatherPage__weatherBlock_daysInfo">
                    <WeatherDayBlock />
                    <WeatherDayBlock />
                    <WeatherDayBlock />
                    <WeatherDayBlock />
                    <WeatherDayBlock />
                    <WeatherDayBlock />
                </div>
            </div>
        </div>
    );
};

export default WeatherPage;
