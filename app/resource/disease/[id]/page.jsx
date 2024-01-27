"use client";
import SearchBar from "@/components/SearchBar";
import { Card, Col, Row, Select } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const { Meta } = Card;
const DiseaseCardsPage = ({ params }) => {
  const [disease, setDisease] = useState([]);
  const languageOptions = [
    {
      value: "English",
      label: "English",
    },
    {
      value: "Hindi",
      label: "Hindi",
    },
    { value: "Tamil", label: "Tamil" },
    {
      value: "Bengali",
      label: "Bengali",
    },
    {
      value: "Gujarati",
      label: "Gujarati",
    },
    { value: "Kannada", label: "Kannada" },
    {
      value: "Malayalam",
      label: "Malayalam",
    },
    {
      value: "Marathi",
      label: "Marathi",
    },
    { value: "Odia", label: "Odia" },
    { value: "Punjabi", label: "Punjabi" },
  ];
  const [language, setLanguage] = useState("English");
  useEffect(() => {
    const getDisease = async () => {
      try {
        let res = await fetch(`/api/admin/resource/diseaseslist`, {
          method: "POST",
          body: JSON.stringify({ type: params.id, language }),
        });
        res = await res.json();
        console.log(res);
        setDisease(res);
      } catch (error) {
        console.log(error);
      }
    };
    getDisease();
  }, [language]);

  const DiseaseCard = ({ value }) => {
    return (
      <Link href={`/resource/${value._id}`}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img alt="example" height={250} width={200} src={value.image} />
          }
        >
          <Meta title={value.name} description={value.des} />
        </Card>
      </Link>
    );
  };
  return (
    <div>
      <section
        style={{
          borderRadius: "30px 30px 0px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <SearchBar />
      </section>
      <section
        style={{
          minHeight: "400px",
          paddingLeft: 40,
          borderRadius: "0px 0px 30px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row justify="space-between">
          <Col>
            <span style={{ fontSize: "34px", fontWeight: "bold" }}>
              Different {params.id} Diseases
            </span>
          </Col>
          <Col>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Language:
            </span>
            &nbsp;&nbsp;&nbsp;
            <Select
              defaultValue="English"
              style={{
                width: 120,
              }}
              onChange={(val) => {
                setLanguage(val);
              }}
              options={languageOptions}
            />
          </Col>
        </Row>

        <br />

        <Row>
          {disease.map((val, id) => {
            return (
              <Col key={id} style={{ margin: 20 }}>
                <DiseaseCard value={val} key={id} />
              </Col>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default DiseaseCardsPage;
