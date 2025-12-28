import { Link } from 'react-router-dom';
import { Icon } from '../Icons';

const AudienceSplit = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* For Businesses */}
          <div className="card">
            <div className="mb-3">
              <Icon name="building" className="icon-medium text-primary" />
            </div>
            <h3 className="heading-3 mb-3">
              For Businesses
            </h3>
            <p className="body-text mb-5">
              Businesses looking to hire marketing experts with clarity
            </p>
            <Link
              to="/"
              className="btn-primary"
            >
              Explore experts →
            </Link>
          </div>

          {/* For Marketing Professionals */}
          <div className="card">
            <div className="mb-3">
              <Icon name="expert" className="icon-medium text-primary" />
            </div>
            <h3 className="heading-3 mb-3">
              For Marketing Professionals
            </h3>
            <p className="body-text mb-5">
              Marketing professionals who want fair, merit-based discovery
            </p>
            <Link
              to="/expert/register"
              className="btn-secondary"
            >
              Create your profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSplit;

