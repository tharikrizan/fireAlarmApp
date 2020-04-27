import React, { Component } from "react";
import Sensor from "./sensor";

class SensorList extends Component {
  state = {
    sensors: [
      {
        id: 10,
        floor: 2,
        room: 3,
        co2: 4,
        smoke: 4,
        active: false,
      },
      {
        id: 11,
        floor: 2,
        room: 3,
        co2: 1,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 1,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 1,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 1,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 1,
        smoke: 4,
        active: true,
      },
    ],
  };

  sensorComponents = this.state.sensors.map((sensor) => (
    <Sensor sensorDetails={sensor} />
  ));

  count = this.sensorComponents.length;
  render() {
    return (
      <div className="grid-container">
        {this.sensorComponents.map((comp) => (
          <div>{comp}</div>
        ))}
      </div>
    );
  }
}

export default SensorList;
