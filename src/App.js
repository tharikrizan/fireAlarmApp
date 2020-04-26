import React from "react";
import Header from "./components/header";
import "./App.css";
import SensorList from "./components/sensorList";

function App() {
  return (
    <div class="container">
      <Header />
      <SensorList />
    </div>
  );
}

export default App;
