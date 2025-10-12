import React from 'react';
import AboutUs from './aboutUs';
import OurVision from './ourVision';
import OurMission from './ourMission';

export default function OneStory() {
  return (
    <section className='grid gap-3'>
      <AboutUs />
      <OurVision />
      <OurMission />
    </section>
  );
}
