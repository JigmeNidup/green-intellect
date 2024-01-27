"use client";
import { Col, Radio, Row, Space } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import StatisticsCard from "./StatisticsCard";

const SensorGraphComp = () => {
  const [type, setType] = useState("temperature");
  const [dataObj, setDataObj] = useState({
    max: {
      max_temp: 0,
      max_humi: 0,
      max_moist: 0,
      max_n: 0,
      max_p: 0,
      max_k: 0,
    },
    min: {
      min_temp: 0,
      min_humi: 0,
      min_moist: 0,
      min_n: 0,
      min_p: 0,
      min_k: 0,
    },
    avg: {
      avg_temp: 0,
      avg_humi: 0,
      avg_moist: 0,
      avg_n: 0,
      avg_p: 0,
      avg_k: 0,
    },
  });
  const [data, setData] = useState([]);
  const [render, setRender] = useState(Math.random());

  useEffect(() => {
    const fetchData = async () => {
      try {
        let date = moment().format("YYYY-MM-DD");
        let apidata = await fetch("/api/sensors", {
          method: "POST",
          body: JSON.stringify({ date }),
        });
        apidata = await apidata.json();
        // console.log(apidata.sensordata.length);
        for (let i = 0; i < apidata.sensordata.length; i++) {
          apidata.sensordata[i].temp = Number(apidata.sensordata[i].temp);
          apidata.sensordata[i].humi = Number(apidata.sensordata[i].humi);
          apidata.sensordata[i].moist = Number(apidata.sensordata[i].moist);
          apidata.sensordata[i].n = Number(apidata.sensordata[i].n);
          apidata.sensordata[i].p = Number(apidata.sensordata[i].p);
          apidata.sensordata[i].k = Number(apidata.sensordata[i].k);
        }
        setDataObj(apidata);
        // console.log(apidata);
        setData(apidata.sensordata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)",
        borderRadius: "30px 0px 0px 30px",
        marginLeft: 40,
        minHeight: 300,
        padding: 30,
      }}
    >
      <Row>
        <Col style={{ width: 250 }}>
          <span
            style={{ fontSize: "25px", fontWeight: "bold", color: "#121212" }}
          >
            Cultivating Data, Nourishing Decisions!
          </span>
          <br />
          <br />
          <Radio.Group
            onChange={(val) => {
              setType(val.target.value);
              setRender(Math.random());
            }}
          >
            <Space direction="vertical" value={type}>
              <Radio value="temperature">Temperature</Radio>
              <Radio value="humidity">Humidity</Radio>
              <Radio value="moisture">Moisture</Radio>
              <Radio value="nitrogen">Nitrogen</Radio>
              <Radio value="phosphorus">Phosphorus</Radio>
              <Radio value="potassium">Potassium</Radio>
            </Space>
          </Radio.Group>
        </Col>
        {render && (
          <Col>
            <StatisticsCard type={type} dataObj={dataObj} data={data} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default SensorGraphComp;
