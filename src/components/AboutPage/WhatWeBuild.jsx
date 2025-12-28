import { Icon } from '../Icons';

const WhatWeBuild = () => {
  const features = [
    {
      text: "Find marketing experts using domain-specific search and filters",
      iconName: "search",
    },
    {
      text: "Connect directly to align on requirements and fit",
      iconName: "connect",
    },
    {
      text: "Hire with clearer scope and confidence",
      iconName: "check",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            What we're building
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            A marketing-only platform for better hiring decisions.
          </p>
        </div>

        <div className="card mb-8">
          <p className="body-text mb-6">
            MarTechAdda focuses on clarity before commitment.
            </p>
          
          <p className="body-text mb-6 font-medium">
            We help users:
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-[#E0E0E0] rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Icon name={feature.iconName} className="icon-medium text-primary" />
                </div>
                <p className="body-text pt-1">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            We intentionally focus on the decision stage — where most hiring mistakes are made.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
