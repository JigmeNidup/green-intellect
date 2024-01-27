"use client";
import React, { useEffect, useState } from "react";
import DiseaseComp from "../Disease";
import Image from "next/image";

const PlantDiseasePage = ({ params }) => {
  const [disease, setDisease] = useState();

  useEffect(() => {
    const getDisease = async () => {
      try {
        let res = await fetch(`/api/admin/resource/${params.id}`);
        res = await res.json();
        setDisease(res);
      } catch (error) {
        console.log(error);
      }
    };
    getDisease();
  }, []);

  if (!disease) {
    return <div />;
  } else {
    return (
      <div
        style={{
          borderRadius: 30,
          backgroundColor: "white",
          padding: 50,
        }}
      >
        
        <DiseaseComp disease={disease} />
      </div>
    );
  }
};

export default PlantDiseasePage;
