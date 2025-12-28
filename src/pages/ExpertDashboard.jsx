import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardHeader from '../components/ExpertDashboard/DashboardHeader';
import DashboardNav from '../components/ExpertDashboard/DashboardNav';
import ProfileView from '../components/ExpertDashboard/ProfileView';
import DiscussionsView from '../components/ExpertDashboard/DiscussionsView';
import EngagementsView from '../components/ExpertDashboard/EngagementsView';
import DepositsView from '../components/ExpertDashboard/DepositsView';
import SettingsView from '../components/ExpertDashboard/SettingsView';

const ExpertDashboard = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-16">
        <DashboardHeader />
        <DashboardNav />
        <Routes>
          <Route index element={<ProfileView />} />
          <Route path="discussions" element={<DiscussionsView />} />
          <Route path="engagements" element={<EngagementsView />} />
          <Route path="deposits" element={<DepositsView />} />
          <Route path="settings" element={<SettingsView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertDashboard;

