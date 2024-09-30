import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const metrics = [
  { name: "mood", label: "Mood" },
  { name: "anxiety", label: "Anxiety" },
  { name: "sleepQuality", label: "Sleep Quality" },
  { name: "hoursSleep", label: "Hours of Sleep" },
  { name: "stress", label: "Stress" },
];

const MentalStatsChart = ({ mentalStats = [] }) => {
  const series = mentalStats.reduce((result, current) => {
    metrics.forEach((metric) => {
      const { name, label } = metric;
      let metricData = result.find((item) => item.name === label);
      if (!metricData) {
        metricData = { name: label, data: [] };
        result.push(metricData);
      }
      metricData.data.push(current[name]);
    });
    return result;
  }, []);
  const chartOptions = {
    series,
  };
  return (
    <div>
      {mentalStats?.length && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default MentalStatsChart;
