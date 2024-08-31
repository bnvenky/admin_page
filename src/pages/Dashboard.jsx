/* eslint-disable no-unused-vars */
import { Typography, Row, Col } from "antd";
import DashboardChart from "../components/dashboardComponents/DashboardChart";
import VisitorStats from "../components/dashboardComponents/VisitorStats";
import { Box } from "@mui/material";

function Dashboard() {
  

  return (
    <Box sx={{ padding: 4}} >
      <Typography.Title level={4}>Dashboard</Typography.Title>
      
      <Row gutter={[16, 16]}>
      <Col xs={24} md={16} style={{ marginTop: 16 }}>
      <DashboardChart />
      </Col>
      <Col xs={24} md={8} style={{ marginTop: 16 }}>
      <VisitorStats />
      </Col>
      </Row>
      
    </Box>
  );
}

export default Dashboard;