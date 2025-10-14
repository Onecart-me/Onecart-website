import React from 'react';
import AboutUs from './aboutUs';
import OurVision from './ourVision';
import OurMission from './ourMission';
import Creativity from './creativity';
import LiveCommerce from './liveCommerce';
import PassionSelling from './passionSelling';

export default function OneStory() {
  return (
    <section className='grid gap-3'>
      <AboutUs />
      <OurVision />
      <OurMission />
      <Creativity />
      <PassionSelling />
      <LiveCommerce />
    </section>
  );
}
