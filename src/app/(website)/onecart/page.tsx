"use client";
import React from "react";
import OneCartHero from "./oneCartHero";
import OneCartTieUps from "./oneCartTieUps";

import HowItWorksTapIn from "./howItWorksTapIn";
import WhyOneCart from "./whyonecart";

export default function OneCart() {
  return (
    <section className="grid gap-5 pt-3">
      <OneCartHero />
      <WhyOneCart />
      <HowItWorksTapIn />
      <OneCartTieUps />
    </section>
  );
}
