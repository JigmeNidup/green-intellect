import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComp = () => {
  return (
    <div
      style={{
        minHeight: 250,
        borderRadius: "50px 50px 0px 0px",
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        padding: "10px 10px 0px 10px",
      }}
    >
      <div
        style={{
          minHeight: 250,
          borderRadius: "50px 50px 0px 0px",
          backgroundColor: "#285a43",
          padding: "50px 50px 0px 50px",
        }}
      >
        <Row
          justify="space-between"
          style={{ fontSize: "12px", color: "#FFFFFF" }}
          gutter={[6, 6]}
        >
          <Col style={{ width: 220 }}>
            <Image
              src="/imgs/leaf.png"
              alt="leaf image"
              height={40}
              width={50}
            />
            &nbsp;
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "#FFFFFF" }}
            >
              GREENINTELLECT
            </span>
            <br />
            <br />
            <span style={{ fontSize: "13px", color: "#d1dcd7" }}>
              AI-based plant disease identification and prediction
            </span>
          </Col>
          <Col style={{ width: 220 }}>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", color: "#FFFFFF" }}
            >
              Useful Links
            </p>
            &nbsp;&nbsp;<Link href="/">Home</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/diagnosis">Diagnosis</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">About Us</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Contact</Link>
          </Col>
          <Col style={{ width: 220 }}>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", color: "#FFFFFF" }}
            >
              Community
            </p>
            &nbsp;&nbsp;<Link href="/subscribe">Go Premium</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Team Plans</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Refer a Friend</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Gift Cards</Link>
          </Col>
          <Col style={{ width: 220 }}>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", color: "#FFFFFF" }}
            >
              Resources
            </p>
            &nbsp;&nbsp;<Link href="/resource">Support</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Latest news</Link>
            <br />
            <br />
            &nbsp;&nbsp;<Link href="/">Terms and Conditions</Link>
          </Col>
          <Col style={{ width: 220 }}>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", color: "#FFFFFF" }}
            >
              Newsletter
            </p>
            <span>Subscribe to our Newsletter</span>
          </Col>
        </Row>
        <br />
        <hr color="#004807" />
        <center>
          <span style={{ fontSize: "18px", color: "#A8A8A8" }}>
            2024 all Right Reserved Term of use GreenIntellect
          </span>
        </center>
      </div>
    </div>
  );
};

export default FooterComp;
