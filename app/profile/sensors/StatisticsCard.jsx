import { Area, Line } from "@ant-design/plots";
import { Card, Space, Statistic } from "antd";
import React from "react";

const StatisticsCard = ({ type, dataObj, data }) => {
  let max = 0;
  let min = 0;
  let avg = 0;
  let suffix = "";

  let config = {
    data,
    xField: "time",
    yField: "temp",
  };
  if (type === "temperature") {
    max = Number(dataObj.max.max_temp);
    min = Number(dataObj.min.min_temp);
    avg = Number(dataObj.avg.avg_temp);
    suffix = " °C";
    config.yField = "temp";
  } else if (type === "humidity") {
    max = Number(dataObj.max.max_humi);
    min = Number(dataObj.min.min_humi);
    avg = Number(dataObj.avg.avg_humi);
    suffix = " %rh";
    config.yField = "humi";
  } else if (type === "moisture") {
    max = Number(dataObj.max.max_moist);
    min = Number(dataObj.min.min_moist);
    avg = Number(dataObj.avg.avg_moist);
    suffix = " ppm";
    config.yField = "moist";
  } else if (type === "nitrogen") {
    max = Number(dataObj.max.max_n);
    min = Number(dataObj.min.min_n);
    avg = Number(dataObj.avg.avg_n);
    suffix = " mg/kg";
    config.yField = "n";
  } else if (type === "phosphorus") {
    max = Number(dataObj.max.max_p);
    min = Number(dataObj.min.min_p);
    avg = Number(dataObj.avg.avg_p);
    suffix = " mg/kg";
    config.yField = "p";
  } else if (type === "potassium") {
    max = Number(dataObj.max.max_k);
    min = Number(dataObj.min.min_k);
    avg = Number(dataObj.avg.avg_k);
    suffix = " mg/kg";
    config.yField = "k";
  }
  return (
    <>
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
        Daily Statistics: {type}
      </span>
      <br />
      <br />
      <Space>
        <Card bordered={false}>
          <Statistic
            title="Maximum"
            value={max}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix={suffix}
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="Minimum"
            value={min}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix={suffix}
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="Average"
            value={avg}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix={suffix}
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="Remarks"
            value={"Healthy"}
            valueStyle={{
              color: "#3f8600",
            }}
          />
        </Card>
      </Space>
      <div style={{ margin: "30px 0px 0px 0px" }}>
        <Line {...config} />
      </div>
    </>
  );
};

export default StatisticsCard;
