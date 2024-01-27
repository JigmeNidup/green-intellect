"use client";
import {
  AppleFilled,
  FacebookFilled,
  GoogleCircleFilled,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/profile");
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
              Sign Up to GreenIntellect
            </p>
            <br />
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Button
                icon={<GoogleCircleFilled />}
                onClick={() => signIn("google")}
              >
                Sign Up with Google
              </Button>
              <br />
              <Button
                icon={<FacebookFilled />}
                onClick={() => signIn("google")}
              >
                Sign Up with Facebook
              </Button>
              <br />
              <Button icon={<AppleFilled />} onClick={() => signIn("google")}>
                Sign Up with Apple
              </Button>
              <br />
              <Button onClick={() => signIn("google")}>
                Sign Up with phone number
              </Button>
              <br />
              <br />
              <br />
              <span>
                Already have an account?&nbsp;
                <Link href="/auth/login">Login</Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default RegisterPage;
