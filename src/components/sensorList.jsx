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
        co2: 10,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 10,
        smoke: 4,
        active: true,
      },
      {
        id: 12,
        floor: 2,
        room: 3,
        co2: 10,
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">{this.sensorComponents}</div>
        </div>
      </div>
    );
  }
}

export default SensorList;
