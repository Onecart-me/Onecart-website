import Image from 'next/image';
import HowItWorksTapIn from './(website)/onecart/howItWorksTapIn';
import OneCartHero from './(website)/onecart/oneCartHero';
import OneCartTieUps from './(website)/onecart/oneCartTieUps';
import WhyOneCart from './(website)/onecart/whyonecart';

export default function Home() {
  return (
    <section className='grid gap-5 pt-3'>
      <OneCartHero />
      <WhyOneCart />
      <HowItWorksTapIn />
      <OneCartTieUps />
    </section>
  );
}
