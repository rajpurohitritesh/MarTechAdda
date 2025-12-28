import { Icon } from './Icons';

const Problem = () => {
  const painPoints = [
    {
      iconName: 'search',
      title: 'Finding relevant experts is difficult',
      description: 'Sifting through generic platforms with no focus on marketing expertise.',
    },
    {
      iconName: 'document',
      title: 'RFPs delay real conversations',
      description: 'Lengthy proposal processes before you can even discuss the project.',
    },
    {
      iconName: 'clock',
      title: 'Clarity comes too late',
      description: 'Understanding scope and fit only after multiple rounds of back-and-forth.',
    },
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Why hiring marketing services still feels harder than it should
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            The challenges businesses face when trying to find the right marketing expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {painPoints.map((point, index) => (
            <div key={index} className="card">
              <div className="mb-3">
                <Icon name={point.iconName} className="icon-medium" />
              </div>
              <h3 className="heading-3 mb-2">
                {point.title}
              </h3>
              <p className="body-text">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            The result? Time wasted and mismatched partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
