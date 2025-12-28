import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutPage/AboutHero';
import WhyWeExist from '../components/AboutPage/WhyWeExist';
import WhatWeBuild from '../components/AboutPage/WhatWeBuild';
import PrinciplesGrid from '../components/AboutPage/PrinciplesGrid';
import EcosystemRole from '../components/AboutPage/EcosystemRole';
import ClosingCTA from '../components/AboutPage/ClosingCTA';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <WhyWeExist />
        <WhatWeBuild />
        <PrinciplesGrid />
        <EcosystemRole />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

