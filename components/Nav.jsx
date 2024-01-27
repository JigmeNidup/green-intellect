"use client";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  BookOutlined,
  HomeOutlined,
  LineChartOutlined,
  PoundCircleOutlined,
  QuestionOutlined,
  ScanOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Sider } = Layout;

const NavBar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navLinks = [
    {
      key: "0",
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "1",
      icon: <ScanOutlined />,
      label: <Link href="/diagnosis">Diagnosis and Insights</Link>,
    },
    {
      key: "2",
      icon: <LineChartOutlined />,
      label: <Link href="/profile/sensors">Sensor Data Analysis</Link>,
    },
    {
      key: "3",
      icon: <TeamOutlined />,
      label: <Link href="/community">Community Engagement</Link>,
    },
    {
      key: "4",
      icon: <BookOutlined />,
      label: <Link href="/resource">Resource</Link>,
    },
    {
      key: "5",
      icon: <PoundCircleOutlined />,
      label: <Link href="/subscribe">Get Premium</Link>,
    },

    {
      key: "6",
      icon: <QuestionOutlined />,
      label: <Link href="/faq">FAQ</Link>,
    },
  ];

  const MobileNavBar = () => {
    return (
      <Layout style={{ backgroundColor: "transparent" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#285a43",
          }}
        >
          <Image src="/icons/logo.png" height={60} width={60} alt="logo" />
          <Menu
            items={navLinks}
            mode="horizontal"
            style={{
              backgroundColor: "#285a43",
              color: "white",
              flex: 1,
              minWidth: 0,
            }}
          />
        </div>
        <main
          style={{
            marginRight: 10,
            marginTop: 10,
            minHeight: "93vh",
          }}
        >
          {children}
        </main>
      </Layout>
    );
  };

  const DesktopNavBar = () => {
    return (
      <Layout style={{ minHeight: "100vh", backgroundColor: "transparent" }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          style={{ backgroundColor: "transparent" }}
        >
          <div
            style={{
              minHeight: 60,
            }}
          >
            {!collapsed ? (
              <p
                style={{ fontSize: "23px", color: "#FFFFFF" }}
                onClick={() => setCollapsed(!collapsed)}
              >
                GREENINTELLECT
              </p>
            ) : (
              <Image
                onClick={() => setCollapsed(!collapsed)}
                src="/icons/logo.png"
                height={60}
                width={60}
                alt="logo"
              />
            )}
          </div>

          <Menu
            items={navLinks}
            style={{ backgroundColor: "#285a43", color: "white" }}
          />
        </Sider>

        <Layout style={{ backgroundColor: "#285a43" }}>
          <main
            style={{
              marginRight: 10,
              marginTop: 10,
              minHeight: "93vh",
            }}
          >
            {children}
          </main>
        </Layout>
      </Layout>
    );
  };

  return isMobile ? <MobileNavBar /> : <DesktopNavBar />;
};

export default NavBar;
