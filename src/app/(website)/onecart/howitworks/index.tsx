'use client';
import React, { useState } from 'react';

import ChatBidBuy from './chatBidBuy';
import TapInTune from './tapInTune';
import PocketTheGoods from './pocketTheGoods';

const HowItWorks = () => {
  const [current, setCurrent] = useState(0);
  const components = [TapInTune, PocketTheGoods, ChatBidBuy];

  const next = () => setCurrent((prev) => (prev + 1) % components.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + components.length) % components.length);

  const CurrentComponent = components[current];

  return (
    <div className='relative md:-mt-1 px-2'>
      <CurrentComponent
        key={current}
        onNext={next}
        onPrev={prev}
        currentIndex={current}
        total={components.length}
      />
    </div>
  );
};

export default HowItWorks;
