import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Search', description: 'Find experts by service, industry, or expertise' },
    { number: '2', title: 'Connect', description: 'Start conversations without formal RFPs' },
    { number: '3', title: 'Align', description: 'Discuss scope, expectations, and fit' },
    { number: '4', title: 'Hire', description: 'Move forward with confidence' },
  ];

  return (
    <section id="how-it-works" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            How It Works
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            A simple, straightforward process to connect businesses with marketing experts
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#E0E0E0]" style={{ width: 'calc(100% - 3rem)' }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#E0E0E0] rounded-full"></div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 border border-[#E0E0E0] rounded-full flex items-center justify-center text-base font-medium text-[#111111] bg-white">
                    {step.number}
                  </div>
                  <h3 className="heading-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="body-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/how-it-works" className="btn-secondary">
            See how MarTechAdda works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
