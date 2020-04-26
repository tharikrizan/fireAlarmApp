import React from "react";

const Sensor = (props) => {
  const sensorDetails = props.sensorDetails;
  let sensorState;
  if (
    !sensorDetails.active ||
    sensorDetails.co2 >= 5 ||
    sensorDetails.smoke >= 5
  ) {
    sensorState = "danger";
  } else {
    sensorState = "success";
  }

  const boarderClassColor = `card border-${sensorState} mb-3`;
  const badgeStateColor = ` badge badge-${sensorState}`;

  return (
    <div className="card w-25 ">
      <div className={boarderClassColor} style={{ maxWidth: "18rem" }}>
        <div className="card-header container">
          <div className="row">
            <div className="col">Sensor {sensorDetails.id}</div>
            <div className="col">
              <span className={badgeStateColor}>
                {sensorDetails.active ? "active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>
        <div className="card-body text-primary">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="card-title">Location </h5>
              </div>
              <div className="col">
                <span className={badgeStateColor}>
                  floor: {sensorDetails.floor}{" "}
                </span>
                <span style={{ margin: "5px" }} className={badgeStateColor}>
                  room: {sensorDetails.room}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5 className="card-title">CO2 Level </h5>
              </div>
              <div className="col">
                <span style={{ padding: "10px" }} className={badgeStateColor}>
                  {sensorDetails.co2}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5 className="card-title">Smoke Level </h5>
              </div>
              <div className="col">
                <span style={{ padding: "10px" }} className={badgeStateColor}>
                  {sensorDetails.smoke}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensor;
