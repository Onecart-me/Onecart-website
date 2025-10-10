import React from 'react';
import AboutTeam from './aboutTeam';
import MeetOurTeam from './meetOurTeam';
import ContactUs from './contactUs';

export default function OneTeam() {
  return (
    <section className='grid gap-3'>
      <AboutTeam />
      <MeetOurTeam />
      <ContactUs />
    </section>
  );
}
