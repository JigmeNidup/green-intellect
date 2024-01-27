import SearchBar from "@/components/SearchBar";
import SignInButton from "@/components/SignInButton";
import { Col, Row } from "antd";
import Image from "next/image";

export default function HomePage() {
  return (
    <section>
      <SearchBar />
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <Row
          style={{
            background:
              "linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)",
            borderRadius: "30px 0px 0px 30px",
            marginLeft: 40,
            minHeight: 300,
          }}
          justify="space-between"
          gutter={[8, 8]}
        >
          <Col span={11} style={{ padding: 40 }}>
            <span
              style={{ fontSize: "40px", fontWeight: "bold", color: "#121212" }}
            >
              Predict Protect Prosper
            </span>
            <br />
            <br />
            <br />
            <Row>
              <Col span={12}>
                <span style={{ fontSize: "26px", color: "#121212" }}>10+</span>
                <br />
                <span style={{ fontSize: "16px", color: "#121212" }}>
                  Disease Surveillance, Prediction
                </span>
              </Col>
              <Col span={12}>
                <span style={{ fontSize: "26px", color: "#121212" }}>1M+</span>
                <br />
                <span style={{ fontSize: "16px", color: "#121212" }}>
                  Customers
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image
              src="/imgs/plantpot.png"
              alt="plant photo"
              height={320}
              width={364}
              priority
            />
          </Col>
        </Row>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "34vh",
          borderRadius: "0px 30px 30px 30px",
          textAlign: "center",
          padding: 10,
        }}
      >
        <span
          style={{ fontSize: "32px", color: "#121212", fontWeight: "bold" }}
        >
          Key Features
        </span>
        <br />
        <span
          style={{
            fontSize: "18px",
            color: "gray",
          }}
        >
          Rooted in Intelligence, Blooming with Assurance
        </span>
        <br />
        <Row justify="space-between" style={{ margin: 20 }}>
          <Col style={{ maxWidth: 200 }}>
            <Image src="/imgs/box.png" height={96} width={98} alt="box" />
            <br />
            <span
              style={{ fontSize: "18px", color: "#000000", fontWeight: "bold" }}
            >
              Instant Disease Identification
            </span>
            <br />
            <span style={{ fontSize: "18px", color: "gray" }}>
              Instantly identify plant diseases with photo uploads for quick
              action
            </span>
          </Col>
          <Col style={{ maxWidth: 200 }}>
            <Image src="/imgs/pot.png" height={96} width={98} alt="box" />
            <br />
            <span
              style={{ fontSize: "18px", color: "#000000", fontWeight: "bold" }}
            >
              Disease Insights
            </span>
            <br />
            <span style={{ fontSize: "18px", color: "gray" }}>
              Uncover plant disease details: symptoms, causes, risks, and
              lifecycle insights for proactive care.
            </span>
          </Col>
          <Col style={{ maxWidth: 200 }}>
            <Image src="/imgs/phone.png" height={96} width={98} alt="box" />
            <br />
            <span
              style={{ fontSize: "18px", color: "#000000", fontWeight: "bold" }}
            >
              Treatment Guidance
            </span>
            <br />
            <span style={{ fontSize: "18px", color: "gray" }}>
              Effortlessly nurture your plants with user-friendly instructions
              for robust growth and vitality
            </span>
          </Col>
        </Row>
        <br />
        <br />
        <Row justify="space-evenly">
          <Col>
            <Image
              src="/imgs/wetleaf1.png"
              alt="wet leaf 1"
              height={260}
              width={324}
            />
          </Col>
          <Col>
            <span
              style={{ fontSize: "32px", fontWeight: "bold", color: "#1E1E1E" }}
            >
              Humidity and Temperature
            </span>
            <br />
            <span style={{ fontSize: "17px", color: "#8e8e8e" }}>
              Ideal Humidity and Temperature at Your Fingertips!
            </span>
          </Col>
        </Row>
        <br />
        <Row justify="space-evenly">
          <Col>
            <span
              style={{ fontSize: "32px", fontWeight: "bold", color: "#1E1E1E" }}
            >
              NPK Values
            </span>
            <br />
            <span style={{ fontSize: "17px", color: "#8e8e8e" }}>
              Rooted in Intelligence, Blooming with Assurance
            </span>
          </Col>
          <Col>
            <Image
              src="/imgs/wetleaf2.png"
              alt="wet leaf 1"
              height={260}
              width={324}
            />
          </Col>
        </Row>
        <br />
        <Row justify="space-evenly">
          <Col>
            <Image
              src="/imgs/wetleaf3.png"
              alt="wet leaf 1"
              height={260}
              width={324}
            />
          </Col>
          <Col>
            <span
              style={{ fontSize: "32px", fontWeight: "bold", color: "#1E1E1E" }}
            >
              Key Features
            </span>
            <br />
            <span style={{ fontSize: "17px", color: "#8e8e8e" }}>
              Rooted in Intelligence, Blooming with Assurance
            </span>
          </Col>
        </Row>
      </section>
    </section>
  );
}
