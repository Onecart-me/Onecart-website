import Image from 'next/image';
import HowItWorksTapIn from './(website)/onecart/howitworks/tapInTune';
import OneCartHero from './(website)/onecart/oneCartHero';
import OneCartTieUps from './(website)/onecart/oneCartTieUps';
import WhyOneCart from './(website)/onecart/whyonecart';
import BestFinds from './(website)/onecart/whyonecart/bestFinds';
import ExcluciveAccess from './(website)/onecart/whyonecart/exclusiveAccess';
import UserDashboard from './(website)/onecart/whyonecart/userDashboard';

export default function Home() {
  return (
    <section className='grid gap-5 pt-3 overflow-x-clip'>
      <OneCartHero />
      <div className='hidden md:block'>
        <WhyOneCart />
      </div>
      <div className='md:hidden block'>
        <UserDashboard />
        <BestFinds />
        <ExcluciveAccess />
      </div>

      <HowItWorksTapIn />
      <OneCartTieUps />
    </section>
  );
}
