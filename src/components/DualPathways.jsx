import { Link } from 'react-router-dom';
import { Icon } from './Icons';

const DualPathways = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            One goal: Better marketing connections
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="mb-4">
              <Icon name="building" className="icon-medium" />
            </div>
            <h2 className="heading-2 mb-3">
              For Businesses
            </h2>
            <p className="body-text mb-6">
              Hire marketing experts with confidence. Find the right expertise without the hassle of RFPs and lengthy processes.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Find marketing experts
            </Link>
          </div>

          <div className="card">
            <div className="mb-4">
              <Icon name="expert" className="icon-medium" />
            </div>
            <h2 className="heading-2 mb-3">
              For Experts
            </h2>
            <p className="body-text mb-6">
              Get discovered for capability, not ad spend. Showcase your expertise and connect with businesses that value your skills.
            </p>
            <Link to="/expert/register" className="btn-primary inline-block">
              Create your profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPathways;
