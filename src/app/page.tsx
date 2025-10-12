import Image from 'next/image';
import HowItWorksTapIn from './(website)/onecart/howitworks/tapInTune';
import OneCartHero from './(website)/onecart/oneCartHero';
import OneCartTieUps from './(website)/onecart/oneCartTieUps';
import WhyOneCart from './(website)/onecart/whyonecart';
import BestFinds from './(website)/onecart/whyonecart/bestFinds';
import ExcluciveAccess from './(website)/onecart/whyonecart/exclusiveAccess';
import UserDashboard from './(website)/onecart/whyonecart/userDashboard';
import TapInTune from './(website)/onecart/howitworks/tapInTune';
import HowItWorks from './(website)/onecart/howitworks';

export default function Home() {
  return (
    <section className='grid gap-5 pt-3 overflow-x-clip'>
      <OneCartHero />
      <div className='hidden md:block'>
        <WhyOneCart />
      </div>
      <div className=' grid gap-6 md:hidden px-3'>
        <UserDashboard />
        <BestFinds />
        <ExcluciveAccess />
      </div>
      <HowItWorks />

      <OneCartTieUps />
    </section>
  );
}
