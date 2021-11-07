import React from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const dataPointValues=props.dataPoints.map(points => points.value)
  const totalMaximum=Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
