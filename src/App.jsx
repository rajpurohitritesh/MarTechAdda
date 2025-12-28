import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import WhyThisWorksPage from './pages/WhyThisWorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExpertRegistration from './pages/ExpertRegistration';
import ExpertVerify from './pages/ExpertVerify';
import ExpertConfirmRole from './pages/ExpertConfirmRole';
import ExpertOnboarding from './pages/ExpertOnboarding';
import ExpertConfirmation from './pages/ExpertConfirmation';
import ExpertDashboard from './pages/ExpertDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/why-this-works" element={<WhyThisWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Expert Registration Flow */}
        <Route path="/expert/register" element={<ExpertRegistration />} />
        <Route path="/expert/verify" element={<ExpertVerify />} />
        <Route path="/expert/confirm-role" element={<ExpertConfirmRole />} />
        
        {/* Expert Onboarding Flow */}
        <Route path="/expert/onboarding/*" element={<ExpertOnboarding />} />
        <Route path="/expert/confirmation" element={<ExpertConfirmation />} />
        
        {/* Expert Dashboard */}
        <Route path="/expert/dashboard/*" element={<ExpertDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

