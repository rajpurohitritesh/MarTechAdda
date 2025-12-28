import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReassuranceStrip from '../components/ExpertOnboarding/ReassuranceStrip';
import ConfirmRole from '../components/ExpertOnboarding/ConfirmRole';

const ExpertConfirmRole = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleComplete = () => {
    // Role confirmed
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReassuranceStrip />
        <ConfirmRole onComplete={handleComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertConfirmRole;

