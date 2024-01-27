import FooterComp from "@/components/Footer";
import NavBar from "@/components/Nav";
import Provider from "@/components/Provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "GREENINTELLECT",
  description:
    "AI powered Plant Disease Identification and Prediction Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url('/imgs/bg1.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AntdRegistry>
          <Provider>
            <NavBar>{children}</NavBar>
            <FooterComp />
            <Analytics />
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
