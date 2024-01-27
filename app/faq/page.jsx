import { DownOutlined } from "@ant-design/icons";
import React from "react";

const FAQPage = () => {
  return (
    <section
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        minHeight: "90vh",
        padding: 40,
      }}
    >
      <center>
        <span
          style={{ fontSize: "50px", color: "#121212", fontWeight: "bold" }}
        >
          FAQs
        </span>
      </center>
      <br />
      <br />
      <div style={{ display: "grid", justifyContent: "center" }}>
        <span style={{ fontSize: "20px", color: "#000000" }}>
          Is my personal information secure while uploading an
          image?&nbsp;&nbsp;
          <DownOutlined />
          <hr />
        </span>
        <br />
        <span style={{ fontSize: "20px", color: "#000000" }}>
          Can I change the email address associated with my account?&nbsp;&nbsp;
          <DownOutlined />
          <hr />
        </span>
        <br />
        <span style={{ fontSize: "20px", color: "#000000" }}>
          Is there a membership or subscription plan for accessing <br />
          premium content?&nbsp;&nbsp;
          <DownOutlined />
          <hr />
        </span>
        <br />
        <span style={{ fontSize: "20px", color: "#000000" }}>
          How can I contact customer support for general inquiries?&nbsp;&nbsp;
          <DownOutlined />
          <hr />
        </span>
        <br />
        <span style={{ fontSize: "20px", color: "#000000" }}>
          How can I cancel my subscription or membership?&nbsp;&nbsp;
          <DownOutlined />
          <hr />
        </span>
      </div>
    </section>
  );
};

export default FAQPage;
