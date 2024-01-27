"use client";
import { Typography, Divider } from "antd";
import Image from "next/image";
const { Title, Paragraph, Text, Link } = Typography;
import React from "react";

const DiseaseComp = ({ disease }) => {
  // console.log(disease);
  return (
    <div style={{ padding: 40 }}>
      <Image src={disease.image} alt="disease image" height={400} width={500} />
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

        <Divider />
      </Typography>
    </div>
  );
};

export default DiseaseComp;
