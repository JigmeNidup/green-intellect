"use client";
import SearchBar from "@/components/SearchBar";
import { Card, Col, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;
const ResourcePage = () => {
  const cropsList = [
    { name: "Rice" },
    { name: "Wheat" },
    { name: "Tomato" },
    { name: "Potato" },
    { name: "Corn" },
  ];
  const fruitsList = [
    { name: "Mango" },
    { name: "Banana" },
    { name: "Citrus" },
    { name: "Apple" },
    { name: "Grapes" },
  ];

  const DiseaseListCard = ({ value }) => {
    return (
      <Link href={`/resource/disease/${value.name}`}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              height={250}
              width={200}
              src={`/sample/healthy/${value.name}.jpeg`}
            />
          }
        >
          <Meta title={value.name} />
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
        <span style={{ fontSize: "34px", fontWeight: "bold" }}>
          Different Plant Diseases and their details
        </span>
        <br />

        <Row>
          {cropsList.map((val, id) => {
            return (
              <Col key={id} style={{ margin: 20 }}>
                <DiseaseListCard value={val} key={id} />
              </Col>
            );
          })}
        </Row>
        <Row>
          {fruitsList.map((val, id) => {
            return (
              <Col key={id} style={{ margin: 20 }}>
                <DiseaseListCard value={val} key={id} />
              </Col>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default ResourcePage;
