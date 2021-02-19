import React from "react";
import { Route } from "react-router-dom";

import './App.scss';

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/home/HomePage";
import SchedulePage from "./pages/schedule/SchedulePage";
import ProfilePage from "./pages/profile/ProfilePage";
import ChatPage from "./pages/chat/ChatPage";
import VideoConferencePage from "./pages/videoConference/VideoConferencePage";
import WeatherPage from "./pages/weather/WeatherPage";
import MapsPage from "./pages/maps/MapsPage";
import PrivateRoute from "./components/PrivateRouts/PrivateRoute";
import FriendsPage from "./pages/friends/FriendsPage";

function App() {
  return (
    <div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/video-conference" component={VideoConferencePage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/maps" component={MapsPage} />
        <Route path="/friends" component={FriendsPage} />

        <PrivateRoute />
    </div>
  );
}

export default App;
