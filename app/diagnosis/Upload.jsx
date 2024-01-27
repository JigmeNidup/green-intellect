"use client";
import { Button, Col, Row, Select, Space } from "antd";
import React, { useState } from "react";
import { message, Upload } from "antd";
import { InboxOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useSession } from "next-auth/react";
const { Dragger } = Upload;

const UploadComp = ({ setDiseaseName, setResultShow }) => {
  const { data: session } = useSession();
  const typeList = ["Crops", "Fruits"];
  const cropsList = ["Rice", "Wheat", "Tomato", "Potato", "Corn"];
  const fruitsList = ["Mango", "Banana", "Citrus", "Apple", "Grapes"];
  const [loading, setLoading] = useState(false);
  const [nameList, setNameList] = useState([]);

  const [type, setType] = useState();
  const [name, setName] = useState();
  const [filebase64, setFileBase64] = useState();

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFileBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleAnalyze = async () => {
    try {
      setResultShow(false);
      setLoading(true);
      if (!type || !name) {
        message.error("Crop not selected");
      } else if (!filebase64) {
        message.error("File not uploaded");
      } else {
        // console.log({ type, name, filebase64 });

        let res = await fetch("/api/diagnosis/create", {
          method: "POST",
          body: JSON.stringify({
            type,
            name,
            filebase64,
            uid: session?.user.id,
          }),
        });
        res = await res.json();
        // console.log(res);

        setLoading(false);
        setDiseaseName(res.name);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)",
        borderRadius: "30px 0px 0px 30px",
        marginLeft: 40,
        minHeight: 400,
        padding: 30,
      }}
    >
      <span style={{ fontSize: "50px", fontWeight: "bold" }}>Upload Photo</span>
      <br />
      <br />
      Type:&nbsp;&nbsp;&nbsp;&nbsp;
      <Select
        style={{
          width: 120,
        }}
        placeholder="Select Crop"
        onChange={(val) => {
          setType(val);
          if (val === "Crops") {
            setNameList(cropsList);
            setName();
          } else if (val === "Fruits") {
            setNameList(fruitsList);
            setName();
          }
        }}
        options={typeList.map((val) => ({
          label: val,
          value: val,
        }))}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      {isMobile ? (
        <>
          <br />
          <br />
        </>
      ) : null}
      Name:&nbsp;&nbsp;&nbsp;&nbsp;
      <Select
        placeholder="Select Fruit"
        style={{
          width: 120,
        }}
        onChange={(val) => {
          setName(val);
          //   console.log(val);
        }}
        options={nameList.map((val) => ({
          label: val,
          value: val,
        }))}
      />
      <br />
      <br />
      {filebase64 ? (
        <section>
          <center>
            <Image
              style={{ borderRadius: "25px" }}
              src={filebase64}
              alt="upload file"
              height={isMobile ? 250 : 350}
              width={isMobile ? 300 : 500}
            />
            <br />
            <Button type="primary" onClick={() => setFileBase64()} danger>
              Clear Image
            </Button>
          </center>
        </section>
      ) : (
        <Dragger
          name="file"
          maxCount={1}
          accept="image/png, image/jpeg, image/jpg"
          beforeUpload={(file) => {
            const isJpgOrPng =
              file.type === "image/jpeg" || file.type === "image/png";
            if (!isJpgOrPng) {
              message.error("You can only upload JPG/PNG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
              message.error("Image must smaller than 2MB!");
            }

            getBase64(file);
          }}
          onChange={async (info) => {
            const { status } = info.file;
            if (status !== "uploading") {
              // console.log(info.file, info.fileList);
            }
            if (status === "done") {
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
              message.error(`${info.file.name} file upload failed.`);
            }
          }}
          onDrop={(e) => {
            console.log("Dropped files", e.dataTransfer.files);
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      )}
      <br />
      <br />
      <Row justify="space-between">
        <Col>
          <QuestionCircleOutlined />
          &nbsp; Help Center
        </Col>
        <Col>
          <Space>
            <Button type="primary" onClick={handleAnalyze} loading={loading}>
              Analyze
            </Button>
          </Space>
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default UploadComp;
