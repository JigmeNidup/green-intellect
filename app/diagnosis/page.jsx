"use client";
import UploadComp from "@/app/diagnosis/Upload";
import React, { useEffect, useState } from "react";
import SignInButton from "@/components/SignInButton";
import { Button, Col, Row, Select, Skeleton, message } from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import DiseaseResult from "./Results";

const DiagnosisPage = () => {
  const [diseaseName, setDiseaseName] = useState();
  const [isShowResult, setResultShow] = useState(false);
  const [diseaseResult, setDiseaseResult] = useState();
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
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

  function ScreenShot() {
    const captureElement = document.getElementById("report");
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
        a.setAttribute("download", "PlantDiseaseResult.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });
  }

  useEffect(() => {
    const getDisease = async () => {
      setLoading(true);
      try {
        if (diseaseName == "Healthy") {
          message.success("Your Plant is Healthy");
        } else {
          let res = await fetch(`/api/admin/resource/byname`, {
            method: "POST",
            body: JSON.stringify({ name: diseaseName, language: language }),
          });
          res = await res.json();
          // console.log(res[0]);
          setDiseaseResult(res[0]);
          setLoading(false);
          setResultShow(true);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };
    if (diseaseName) {
      getDisease();
    }
  }, [diseaseName, language]);

  return (
    <div id="report">
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
                fontWeight: "bold",
                fontSize: "45px",
                color: "#121212",
              }}
            >
              Diagnosis and Insights
            </span>
          </Col>
          <Col>
            <SignInButton />
          </Col>
        </Row>
      </section>
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <UploadComp
          setDiseaseName={setDiseaseName}
          setResultShow={setResultShow}
        />
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "34vh",
          borderRadius: "0px 30px 30px 0px",
          padding: 40,
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
          Select Language:
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
        {isShowResult && !loading ? (
          <>
            <DiseaseResult disease={diseaseResult} />
          </>
        ) : loading ? (
          <Skeleton active />
        ) : null}
        <br />
        <br />
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => {
            ScreenShot();
          }}
        >
          Download Result
        </Button>
      </section>

      <section style={{ backgroundColor: "#FFFFFF" }}>
        <Row
          style={{
            background:
              "linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)",
            borderRadius: "30px 0px 0px 30px",
            marginLeft: 40,
            minHeight: 300,
          }}
        >
          <Col span={11} style={{ padding: 40 }}>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#121212",
              }}
            >
              Upgrade your plant care now!
            </span>
            <br />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "32px",
                color: "#285A43",
              }}
            >
              Get all the recommended products at 30% Off!
            </span>
            <br />
            <br />
            <Link href="/subscribe">
              <Button icon={<ArrowRightOutlined />}> Know More</Button>
            </Link>
          </Col>
          <Col>
            <Image
              src="/imgs/waterpot.png"
              height={350}
              width={400}
              alt="water pot"
            />
          </Col>
        </Row>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "5vh",
          borderRadius: "0px 30px 30px 30px",
          padding: 40,
          marginBottom: 10,
        }}
      ></section>
    </div>
  );
};

export default DiagnosisPage;
