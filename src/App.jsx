import Hero from './components/Hero';
import Mistakes from './components/Mistakes';

import Learnings from './components/Learnings';
import WhyYouMatter from './components/WhyYouMatter';
import ChangeProof from './components/ChangeProof';
import Confession from './components/Confession';
import CTA from './components/CTA';
import React from 'react';

function App() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      <Hero />
      <Learnings />
      <WhyYouMatter />
      <Confession />
    </main>
  );
}

export default App;
