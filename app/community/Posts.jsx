import { Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const PostsComp = ({ session }) => {
  return (
    <Card style={{ width: "400px" }}>
      <Row gutter={[6, 6]}>
        <Col>
          <Image
            src={session?.user.image}
            height={40}
            width={40}
            alt="profile img"
            style={{ borderRadius: 25 }}
          />
        </Col>
        <Col>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#121212",
            }}
          >
            Post Title
          </span>
          <br />
          <span
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#636363",
            }}
          >
            Short Description
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default PostsComp;
