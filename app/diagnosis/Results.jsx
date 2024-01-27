"use client";
import { Typography, Divider } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
import React from "react";
import { isMobile } from "react-device-detect";

const DiseaseResult = ({ disease }) => {
  console.log(disease);
  return (
    <div style={{ padding: isMobile ? 5 : 40 }}>
      <Typography>
        <Title>{disease.name}</Title>
        <Paragraph>{disease.des}</Paragraph>

        <Divider />
        <Title level={2}>Symptoms</Title>
        <Paragraph>{disease.symptoms}</Paragraph>

        <Title level={2}>What causes {disease.name}?</Title>
        <Paragraph>{disease.causes}</Paragraph>

        <Divider />

        <Title level={2}>How can people treat {disease.name}?</Title>
        <Paragraph>{disease.treatment}</Paragraph>

        <Title level={2}>How can {disease.name} be prevented?</Title>
        <Paragraph>{disease.prevents}</Paragraph>

        <Title level={2}>Recommended Products to treat {disease.name}?</Title>
        <Paragraph>{disease.recommend}</Paragraph>

        <Divider />
      </Typography>
    </div>
  );
};

export default DiseaseResult;
