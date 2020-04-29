import React, { Component } from "react";
import Sensor from "./sensor";

class SensorList extends Component {
  state = {
    sensors: [],
  };
  componentDidMount() {
    let fetchedData;
    fetch(" https://fire-alarm-api-ds.herokuapp.com/api/sensorinfo")
      .then((res) => res.json())
      .then((data) => {
        fetchedData = this.state.sensors.concat(data);

        this.setState({
          sensors: fetchedData,
        });
       // console.log("sensor list before sorting :", this.state.sensors);
        this.setState(this.state.sensors.sort((s1, s2) => s1.id - s2.id));
       // console.log("sensor list after sorting :", this.state.sensors);
      });
    //console.log("After fetching  :", this.state.sensors);
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
