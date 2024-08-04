/* eslint-disable react/prop-types */


import { Card, Space, Statistic } from "antd";

function DashboardCard({ title, value, icon }) {
  return (
    <Card className="w-full bg-white shadow-lg rounded-lg p-3">
      <Space direction="horizontal">
        {icon}
        <Statistic
          title={
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</div>
          }
          value={value}
          className="overflow-hidden text-ellipsis whitespace-nowrap"
        />
      </Space>
    </Card>
  );
}

export default DashboardCard;




