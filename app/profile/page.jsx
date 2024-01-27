"use client";
import SignInButton from "@/components/SignInButton";
import { Col, Row } from "antd";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div>
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
              style={{ fontSize: "34px", fontWeight: "bold", color: "#121212" }}
            >
              Welcome {session?.user.name}
            </span>
          </Col>
          <Col>
            <SignInButton />
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
        ></div>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "20vh",
          borderRadius: "0px 30px 0px 30px",
          padding: 40,
        }}
      ></section>
      <section style={{ backgroundColor: "white", minHeight: "300px" }}>
        <div
          style={{
            backgroundColor: "#285a43",
            height: 320,
            marginRight: 50,
            borderRadius: "0px 30px 30px 0px",
          }}
        />
      </section>
      <section
        style={{
          backgroundColor: "white",
          minHeight: "200px",
          borderRadius: "30px 0px 30px 30px",
        }}
      ></section>
    </div>
  );
};

export default ProfilePage;
