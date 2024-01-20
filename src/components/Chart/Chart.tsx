import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createChart } from 'lightweight-charts';
import './Chart.scss';

const Chart = () => {
  const { pair } = useParams();
  const pairName = pair.replace('-', '/');
  const chartContainerRef = useRef();
  const chart = useRef();
  const candleSeries = useRef();
  const [timeframe, setTimeframe] = useState('1M'); // Default to 1 minute timeframe

  // Placeholder function for fetching data based on the timeframe
  const fetchData = async (selectedTimeframe) => {
    // Here you would implement data fetching logic
    // For demonstration purposes, we'll just return a sample dataset
    let data = [];
    const now = Math.floor(Date.now() / 1000); // current time in seconds
    for (let i = 0; i < 10; i++) {
      // Generate sample data: this is where you'd fetch from an API
      data.push({
        time: now - i * 60, // every minute if 1M, change the multiplier for other timeframes
        open: Math.random() * 100 + 100,
        high: Math.random() * 100 + 105,
        low: Math.random() * 100 + 95,
        close: Math.random() * 100 + 100
      });
    }
    return data.reverse(); // Newest data should be at the end
  };

  useEffect(() => {
    // Initialize the chart
    chart.current = createChart(chartContainerRef.current, { width: chartContainerRef.current.clientWidth, height: 400 });
    candleSeries.current = chart.current.addCandlestickSeries();

    // Fetch and set the initial data
    fetchData(timeframe).then(data => {
      candleSeries.current.setData(data);
    });

    // Handle chart resizing
    const resizeChart = () => {
      if (chart.current) {
        chart.current.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    // Fetch and update the data when the timeframe changes
    fetchData(timeframe).then(data => {
      candleSeries.current.setData(data);
    });
  }, [timeframe]);

  return (
    <div className="chart-container">
      <div className="pair-name">
        {pairName} 📊 {/* Display the name of the pair */}
      </div>
      <div className="timeframe-selector">
        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="1M">1 Minute</option>
          <option value="1H">1 Hour</option>
          <option value="1D">1 Day</option>
        </select>
      </div>
      <div ref={chartContainerRef} className="chart" />
    </div>
  );
};

export default Chart;
