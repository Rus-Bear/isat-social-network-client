import React from 'react';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = () => {
    const scheduleDays = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    return (
        <div>
            <Route exact path="/schedule"
                   render={() => {
                       return <Redirect to={"/schedule/" + scheduleDays[(new Date).getDay()]} />
                   }}
            />
        </div>
    );
};

export default PrivateRoute;
