import { Icon } from './Icons';

const Solution = () => {
  const values = [
    {
      iconName: 'target',
      title: 'Marketing-only discovery',
      description: 'A platform dedicated exclusively to marketing expertise.',
    },
    {
      iconName: 'connect',
      title: 'Conversations before commitment',
      description: 'Connect and align before any formal agreements.',
    },
    {
      iconName: 'document',
      title: 'Clear scope upfront',
      description: 'Understand capabilities and fit from the start.',
    },
    {
      iconName: 'sparkle',
      title: 'No paid rankings or clutter',
      description: 'Experts are discovered based on capability, not ad spend.',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            A clearer way to discover and hire marketing expertise
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Built for businesses who want clarity, not confusion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="card">
              <div className="mb-3">
                <Icon name={value.iconName} className="icon-medium" />
              </div>
              <h3 className="heading-3 mb-2">
                {value.title}
              </h3>
              <p className="body-text">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
