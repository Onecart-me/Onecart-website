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
      <div className='px-3'>
        <div className='  bg-[linear-gradient(0deg,rgba(137,13,139,0)_-77.08%,rgba(137,13,139,0.08)_100%)] rounded-2xl  grid gap-6 md:hidden '>
          <UserDashboard />
          <div className='px-28 -mt-3'>
            <hr className='bg-[#890D8B4D]' />
          </div>
          <BestFinds />
          <div className='px-28 -mt-3'>
            <hr className='bg-[#890D8B4D]' />
          </div>
          <ExcluciveAccess />
        </div>
      </div>

      <div className='hidden md:block'>
        <HowItWorks />
      </div>
      <div className='px-3'>
        <div className=' grid bg-[#890D8B0D] rounded-2xl md:hidden px-3'>
          <TapInTune />
          <div className='px-28 -mt-3'>
            <hr className='bg-[#890D8B4D]' />
          </div>
          <ChatBidBuy />
          <div className='px-28 -mt-3'>
            <hr className='bg-[#890D8B4D]' />
          </div>
          <PocketTheGoods />
        </div>
      </div>

      <OneCartTieUps />
    </section>
  );
}
