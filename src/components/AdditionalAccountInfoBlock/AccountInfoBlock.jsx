import React from 'react';

import './AccountInfoBlock.scss';

const AccountInfoBlock = () => {
    return (
        <div className="AccountInfo">
            <h2>Комов Максим</h2>
            <div className="AccountInfo__infoBlock">
                <p>Город: <span>Воронеж</span></p>
                <p>Факультет: <span>Информационные системы и технологии</span></p>
                <p>Группа: <span>У-204</span></p>
                <p>Языки: <span>Русский, Английский</span></p>
                <p>Номер телефона: <span>+7 (123) 456-78-90</span></p>
            </div>
            <div className="AccountInfo__socialBlock">
                <a href="https://vk.com/" ><i className="fab fa-vk"></i></a>
                <a href="https://instagram.com/" ><i className="fab fa-instagram"></i></a>
                <a href="https://facebook.com/" ><i className="fab fa-facebook-f"></i></a>
                <a href="https://gmail.com/"    ><i className="fab fa-google"></i></a>
            </div>
        </div>
    );
};

export default AccountInfoBlock;
