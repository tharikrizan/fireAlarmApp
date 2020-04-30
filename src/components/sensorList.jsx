import React, { Component } from "react";
import Sensor from "./sensor";

class SensorList extends Component {
  state = {
    sensors: [],
  };

  fetchingData() {
    let fetchedData;
    fetch(" https://fire-alarm-api-ds.herokuapp.com/api/sensorinfo")
      .then((res) => res.json())
      .then((data) => {
        fetchedData = this.state.sensors.concat(data);

        this.setState({
          sensors: fetchedData,
        });
        // sorting the sensors
        this.setState(this.state.sensors.sort((s1, s2) => s1.id - s2.id));
      });
  }
  componentDidMount() {
    this.fetchingData();
    setInterval(this.fetchingData, 30000);
  }

  render() {
    const sensorComponents = this.state.sensors.map((sensor) => (
      <Sensor sensorDetails={sensor} />
    ));

    return (
      <div className="grid-container">
        {sensorComponents.map((comp) => (
          <div key={comp.props.sensorDetails.id}>{comp}</div>
        ))}
      </div>
    );
  }
}

export default SensorList;
