import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import DualPathways from '../components/DualPathways';
import HowItWorks from '../components/HowItWorks';
import Metrics from '../components/Metrics';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DualPathways />
        <HowItWorks />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

