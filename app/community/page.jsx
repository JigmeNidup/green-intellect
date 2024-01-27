"use client";
import SearchBar from "@/components/SearchBar";
import SignInButton from "@/components/SignInButton";
import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import PostsComp from "./Posts";

const CommunityPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <section
        style={{
          // padding: 40,
          borderRadius: "30px 30px 30px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <SearchBar />
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
          <Row justify="space-evenly" gutter={(8, 8)}>
            <Col>
              <Card
                hoverable
                style={{
                  height: 300,
                  width: 200,
                  borderRadius: 15,
                  backgroundImage: "url('/sample/Healthy/Apple.jpeg')",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{
                  height: 300,
                  width: 200,
                  borderRadius: 15,
                  backgroundImage: "url('/sample/Healthy/Banana.jpeg')",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{
                  height: 300,
                  width: 200,
                  borderRadius: 15,
                  backgroundImage: "url('/sample/Healthy/Citrus.jpeg')",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{
                  height: 300,
                  width: 200,
                  borderRadius: 15,
                  backgroundImage: "url('/sample/Healthy/Corn.jpeg')",
                }}
              ></Card>
            </Col>
          </Row>
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
      >
        <Row justify="space-between">
          <Col>
            <span
              style={{ fontSize: "18px", fontWeight: "bold", color: "#121212" }}
            >
              Disscusions and Articles
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" icon={<EditOutlined />}>
              Create New Post
            </Button>
            <br />
            <br />
            <PostsComp session={session} />
            <br />
            <PostsComp session={session} />
            <br />
            <PostsComp session={session} />
          </Col>
          <Col></Col>
        </Row>
      </section>
    </div>
  );
};

export default CommunityPage;
