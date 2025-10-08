import ImageTextSrip from "@/components/imageTextStrip";
import React from "react";

const HowItWorksTapIn = () => {
  return (
    <section>
      <ImageTextSrip
        title="How it works?"
        content1="Tap In & Tune In"
        content2="Download the OneCart app, sign up in seconds, and open the Live Feed. You’ll in a buzzing marketplace of real-time shows where sellers demo everything from street-style sneakers to limited-edition collectibles—all streaming live from across the UK."
        content3="Chat, Bid, Buy"
        imageSrc="/images/how-it-works.png"
        textPosition="right"
        imageWidth={1200}
        imageHeight={800}
      />
    </section>
  );
};

export default HowItWorksTapIn;
