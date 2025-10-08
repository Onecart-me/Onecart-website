"use client";
import React, { useState } from "react";
import UserDashboard from "./userDashboard";
import BestFinds from "./bestFinds";
import ExclusiveAccess from "./exclusiveAccess";

const WhyOneCart = () => {
  const [current, setCurrent] = useState(0);
  const components = [UserDashboard, BestFinds, ExclusiveAccess];

  const next = () => setCurrent((prev) => (prev + 1) % components.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + components.length) % components.length);

  const CurrentComponent = components[current];

  return (
    <div className="relative">
      <CurrentComponent
        onNext={next}
        onPrev={prev}
        currentIndex={current}
        total={components.length}
      />
    </div>
  );
};

export default WhyOneCart;
