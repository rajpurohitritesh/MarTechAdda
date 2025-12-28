import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/HowItWorksPage/PageHero';
import ParallelFlow from '../components/HowItWorksPage/ParallelFlow';
import TrustBlock from '../components/HowItWorksPage/TrustBlock';
import WhyThisWorks from '../components/HowItWorksPage/WhyThisWorks';
import SoftCTA from '../components/HowItWorksPage/SoftCTA';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero />
        <ParallelFlow />
        <TrustBlock />
        <WhyThisWorks />
        <SoftCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

