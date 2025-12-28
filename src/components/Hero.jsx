import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

const Hero = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: 'Branding', iconName: 'branding' },
    { id: 2, name: 'Strategic Marketing', iconName: 'strategic' },
    { id: 3, name: 'Advertising', iconName: 'advertising' },
    { id: 4, name: 'Collateral Marketing', iconName: 'collateral' },
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">
            Hire marketing experts without RFPs, pitches, or guesswork
          </h1>
          <p className="body-text mb-6 max-w-2xl mx-auto">
            Find and connect with verified marketing professionals in a clear, simple way.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="heading-3 mb-4 text-center sm:text-left">Find Marketing Experts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-2 sm:p-3 border text-left smooth-transition ${
                  selectedService === service.id
                    ? 'border-primary bg-white'
                    : 'border-[#E0E0E0] hover:border-primary'
                }`}
              >
                <div className="mb-1 sm:mb-2">
                  <Icon name={service.iconName} className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#111111] leading-tight">
                  {service.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <button className="btn-primary w-full sm:w-auto">
            Find Marketing Experts
          </button>
          <Link to="/expert/register" className="btn-secondary w-full sm:w-auto text-center">
            Showcase Your Expertise
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
