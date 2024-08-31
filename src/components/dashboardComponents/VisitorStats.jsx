import { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { getComments } from "../../API";
import 'tailwindcss/tailwind.css';

// Register Chart.js components for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

function VisitorStats() {
  const [sources, setSources] = useState({
    wooCommerce: 0,
    shopify: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    getComments().then((res) => {
      // For demo purposes, we use static values for WooCommerce and Shopify
      setSources({
        wooCommerce: 44.2, // Replace with dynamic data if available
        shopify: 55.8, // Replace with dynamic data if available
      });
    });
  }, []);

  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [sources.wooCommerce, sources.shopify],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <Card className="w-full bg-white shadow-lg rounded-lg p-6">
      <Typography.Title level={4} className="text-xl font-bold mb-2">Portion of Sales</Typography.Title>
      <Pie data={data} />
      <Typography.Text className="text-center text-gray-600 mt-4">Total Sales: 2659</Typography.Text>
      
    </Card>
  );
}

export default VisitorStats;
