"use client";
import { Button, Dropdown, Space } from "antd";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = () => {
  const { data: session } = useSession();
  const dropdownitems = [
    {
      key: "1",
      label: (
        <Link href="/profile">
          <Button type="primary">Profile</Button>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Button type="primary" onClick={() => signOut()}>
          Sign Out
        </Button>
      ),
    },
  ];

  return session ? (
    <Space>
      <Dropdown
        menu={{ items: dropdownitems }}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
        overlayStyle={{ textAlign: "right" }}
      >
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          alt="profile image"
          style={{ borderRadius: "25px" }}
        />
      </Dropdown>
    </Space>
  ) : (
    <Button type="primary" onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default SignInButton;
