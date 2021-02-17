import React from 'react';

import './Lesson.scss';

const Lesson = () => {
    return (
        <div className="lesson" >
            <p className="lesson__time" >13:00-14:30</p>
            <p className="lesson__name" >Какое-то название пары</p>
        </div>
    );
};

export default Lesson;
