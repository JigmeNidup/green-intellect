import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";

const SubscribePage = () => {
  return (
    <div>
      <section
        style={{
          padding: 40,
          borderRadius: "30px 30px 30px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <span
          style={{ fontSize: "32px", fontWeight: "bold", color: "#121212" }}
        >
          Subscribe to our Premium Plan
        </span>
        <br />
        <br />
        <br />
        <span
          style={{ fontSize: "16px", fontWeight: "bold", color: "#121212" }}
        >
          Premium Plan Offers
        </span>
        <br />
        <br />
        <Row gutter={[8, 8]} justify="space-evenly">
          <Col>
            <div
              style={{
                borderRadius: 25,
                minHeight: 280,
                maxWidth: 200,
                backgroundColor: "#285a43",
                padding: 20,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Get 30% Off on partnered vendor products
              </p>
              <br />
              <span style={{ fontSize: "12px", color: "#FFFFFF" }}>
                Our Premium subscribers can get 30% Off on all partnered vendors
              </span>
            </div>
          </Col>
          <Col>
            <div
              style={{
                borderRadius: 25,
                minHeight: 280,
                maxWidth: 200,
                backgroundColor: "#285a43",
                padding: 20,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Help Predict Plant Disease Early on!
              </p>
              <br />
              <span style={{ fontSize: "12px", color: "#FFFFFF" }}>
                Access to Sensor Data Analysis and Reporting
              </span>
            </div>
          </Col>
          <Col>
            <div
              style={{
                borderRadius: 25,
                minHeight: 280,
                maxWidth: 200,
                backgroundColor: "#285a43",
                padding: 20,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Priority Customer Support
              </p>
              <br />
              <span style={{ fontSize: "12px", color: "#FFFFFF" }}>
                Get First Priority Customer Support
              </span>
            </div>
          </Col>
          <Col>
            <div
              style={{
                borderRadius: 25,
                minHeight: 280,
                maxWidth: 200,
                backgroundColor: "#285a43",
                padding: 20,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Premium Resource
              </p>
              <br />
              <span style={{ fontSize: "12px", color: "#FFFFFF" }}>
                Get Further Detailed Resource on Not only Identifying Disease
                but also on scientifically tested methods to prevent such
              </span>
            </div>
          </Col>
        </Row>
      </section>
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div
          style={{
            background:
              "linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)",
            borderRadius: "30px 0px 0px 30px",
            marginLeft: 40,
            minHeight: 200,
            padding: 30,
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#121212" }}>
            Buy Our Premium Plan
          </p>
          <Button icon={<ShoppingCartOutlined />}>Buy</Button>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "2vh",
          borderRadius: "0px 30px 30px 30px",
          padding: 40,
          marginBottom: 10,
        }}
      ></section>
    </div>
  );
};

export default SubscribePage;
