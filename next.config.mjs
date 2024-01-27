/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "os.alipayobjects.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
