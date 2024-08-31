import { useEffect, useState } from "react";
import { Card } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRevenue } from "../../API";

// Register Chart.js components for a line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `Date-${new Date(cart.date).toLocaleDateString()}`;
      });
      const salesData = res.carts.map((cart) => cart.discountedTotal);
      const ordersData = res.carts.map((cart) => cart.total);

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Sales",
            data: salesData,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.4, // For smooth curves
          },
          {
            label: "Orders",
            data: ordersData,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
            tension: 0.4, // For smooth curves
          }
        ],
      };

      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales vs Orders",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="w-full bg-white shadow-lg rounded-lg p-6" style={{ width: "100%", height: "100%" }}>
      <Line options={options} data={revenueData} />
    </Card>
  );
}

export default DashboardChart;
