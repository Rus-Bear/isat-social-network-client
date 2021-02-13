import React from "react";

import './App.scss';
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
        <NavBar />
        <HomePage />
    </div>
  );
}

export default App;
