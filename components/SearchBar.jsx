"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Space } from "antd";
import React, { useState } from "react";
import SignInButton from "./SignInButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

const { Search } = Input;

const SearchBar = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const handleSearch = async (val) => {
    console.log(val);
  };

  return (
    <section
      style={{
        padding: 40,
        borderRadius: "30px 30px 30px 0px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Row justify="space-between">
        <Col span={18}>
          <Search
            prefix={<SearchOutlined />}
            loading={loading}
            placeholder="Search"
            onSearch={handleSearch}
          />
        </Col>
        <Col>
          <Space>
            <SignInButton />
            {!session ? (
              <Link href="/auth/register">
                <Button type="primary">Register</Button>
              </Link>
            ) : null}
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default SearchBar;
