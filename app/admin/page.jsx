"use client";
import SignInButton from "@/components/SignInButton";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session } = useSession();

  const handleResourceSubmit = async (val) => {
    try {
      let res = await fetch("/api/admin/resource/create", {
        method: "POST",
        body: JSON.stringify(val),
      });
      res = await res.json();
      if (!res.ok) {
        message.success("Resource Added Successfully");
      } else {
        message.error("Resource Not Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section
        style={{
          padding: 40,
          borderRadius: "30px 30px 0px 0px",
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
      <section
        style={{
          padding: 30,
          minHeight: "400px",
          borderRadius: "0px 0px 30px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Card>
          <Row gutter={[6, 6]}>
            <Col>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Create Resource
              </span>
              <Form onFinish={handleResourceSubmit}>
                <Form.Item label="name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="crop" name="crop">
                  <Input />
                </Form.Item>
                <Form.Item label="Language" name="language">
                  <Input />
                </Form.Item>
                <Form.Item label="desc" name="des">
                  <Input />
                </Form.Item>
                <Form.Item label="Image Link" name="image">
                  <Input />
                </Form.Item>
                <Form.Item label="systoms" name="symptoms">
                  <Input />
                </Form.Item>
                <Form.Item label="cause" name="causes">
                  <Input />
                </Form.Item>
                <Form.Item label="treatment" name="treatment">
                  <Input />
                </Form.Item>
                <Form.Item label="prevention" name="prevents">
                  <Input />
                </Form.Item>
                <Form.Item label="recommendations" name="recommend">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Card>
      </section>
    </div>
  );
};

export default AdminPage;
