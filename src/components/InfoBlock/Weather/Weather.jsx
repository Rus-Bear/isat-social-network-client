import React from 'react';

import './Weather.scss';

const Weather = () => {
    return (
        <div className="weather" >
            <h3>Погода в Воронеже</h3>
            <div className="weather__generalInfo" >
                <i className="far fa-sun"></i>
                <div className="weather__generalInfo_numbers" >
                    <p>Температура: 23 °C</p>
                    <p>Скорость ветра: 1.2 м/с</p>
                </div>
            </div>
            <p>Какая-то дополнительная информация...</p>
        </div>
    );
};

export default Weather;
