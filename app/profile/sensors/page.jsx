import React from "react";
// import SensorAndAnalyzePage from "./SensorPage";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./SensorPage"), {
  ssr: false,
});

const SensorPage = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default SensorPage;
