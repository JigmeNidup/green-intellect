"use client";
import {
  AppleFilled,
  FacebookFilled,
  GoogleCircleFilled,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  return (
    <section>
      <Row justify="space-evenly">
        <Col>
          <div
            style={{
              minWidth: "400px",
              backgroundColor: "white",
              borderRadius: "25px",
              minHeight: "85vh",
              margin: 30,
              padding: 30,
            }}
          >
            <p
              style={{ fontSize: "43px", fontWeight: "bold", color: "#121212" }}
            >
              Log in to GreenIntellect
            </p>
            <br />
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Button
                icon={<GoogleCircleFilled />}
                onClick={() => signIn("google")}
              >
                Continue with Google
              </Button>
              <br />
              <Button
                icon={<FacebookFilled />}
                onClick={() => signIn("google")}
              >
                Continue with Facebook
              </Button>
              <br />
              <Button icon={<AppleFilled />} onClick={() => signIn("google")}>
                Continue with Apple
              </Button>
              <br />
              <Button onClick={() => signIn("google")}>
                Continue with phone number
              </Button>
              <br />
              <br />
              <br />
              <span>
                Don&apos;t have an account?&nbsp;
                <Link href="/auth/register">Sign Up</Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LoginPage;
