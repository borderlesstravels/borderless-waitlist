"use client";

import React, { useState } from "react";
import { whyTravelData } from "../../data/whyTravel";
import WhyTravelCard from "../whyTravelCard";

const WhyTravelList = () => {
  const [currentHover, setCurrentHover] = useState(0);

  const handleUpdateHover = (index: number) => setCurrentHover(index);

  return (
    <div>
      {whyTravelData.map((item, index) => (
        <WhyTravelCard
          key={item.label}
          {...item}
          onMouseEnter={() => handleUpdateHover(index)}
          isActive={currentHover === index}
        />
      ))}
    </div>
  );
};

export default WhyTravelList;
