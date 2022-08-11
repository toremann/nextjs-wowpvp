import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

// Options for Line Chart
const config = {
    maintainAspectRatio: false,
    tension: 0.4,
    plugins: {
        legend: {
            labels: {
                color: 'black',
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'black',
            },
        },
        y: {
            ticks: {
                color: 'black',
            },
            beginAtZero: true,
        },
    },
};

function LineChart({ chartData }) {
    return <Line data={chartData} options={config} />;
}

export default LineChart;
