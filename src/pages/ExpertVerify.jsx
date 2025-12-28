import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReassuranceStrip from '../components/ExpertOnboarding/ReassuranceStrip';
import VerifyContinue from '../components/ExpertOnboarding/VerifyContinue';

const ExpertVerify = () => {
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Get data from localStorage
    const stored = localStorage.getItem('expertAccountData');
    if (stored) {
      setAccountData(JSON.parse(stored));
    }
  }, []);

  const handleVerifyComplete = () => {
    // Verification complete, data already stored
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReassuranceStrip />
        <VerifyContinue accountData={accountData} onComplete={handleVerifyComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertVerify;
