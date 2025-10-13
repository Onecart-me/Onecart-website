import OneCartHero from './(website)/onecart/oneCartHero';
import OneCartTieUps from './(website)/onecart/oneCartTieUps';
import WhyOneCart from './(website)/onecart/whyonecart';
import BestFinds from './(website)/onecart/whyonecart/bestFinds';
import ExcluciveAccess from './(website)/onecart/whyonecart/exclusiveAccess';
import UserDashboard from './(website)/onecart/whyonecart/userDashboard';
import HowItWorks from './(website)/onecart/howitworks';
import TapInTune from './(website)/onecart/howitworks/tapInTune';
import ChatBidBuy from './(website)/onecart/howitworks/chatBidBuy';
import PocketTheGoods from './(website)/onecart/howitworks/pocketTheGoods';

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
      <div className='hidden md:block'>
        <HowItWorks />
      </div>
      <div className=' grid gap-6 md:hidden px-3'>
        <TapInTune />
        <ChatBidBuy />
        <PocketTheGoods />
      </div>

      <OneCartTieUps />
    </section>
  );
}
