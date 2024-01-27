"use client";
import SignInButton from "@/components/SignInButton";
import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import SensorGraphComp from "./SensorGraph";
import { DownloadOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";

const SensorAndAnalyzePage = () => {
  function ScreenShot() {
    const captureElement = document.getElementById("sensor");
    html2canvas(captureElement)
      .then((canvas) => {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", "SensorResult.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });
  }

  useEffect(() => {
    console.log("gg");
  }, []);
  return (
    <div id="sensor">
      <section
        style={{
          padding: 40,
          borderRadius: "30px 30px 30px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row justify="space-between">
          <Col>
            <span
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                color: "#121212",
              }}
            >
              Analyze and Predict Disease
            </span>
          </Col>
          <Col>
            <SignInButton />
          </Col>
        </Row>
      </section>
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <SensorGraphComp />
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "5vh",
          borderRadius: "0px 30px 30px 30px",
          padding: 40,
          marginBottom: 10,
        }}
      >
        <Button icon={<DownloadOutlined />} onClick={() => ScreenShot()}>
          Download Report
        </Button>
      </section>
    </div>
  );
};

export default SensorAndAnalyzePage;
