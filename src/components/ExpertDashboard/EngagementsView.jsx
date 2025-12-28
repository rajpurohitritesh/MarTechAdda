import { Icon } from '../Icons';

const EngagementsView = () => {
  const engagements = [
    {
      id: 1,
      client: 'TechStart Inc.',
      project: 'Brand Identity Design',
      scope: 'Logo design, brand guidelines, color palette, typography selection',
      milestones: [
        { name: 'Initial Concepts', status: 'completed', deposit: '₹15,000', date: '2024-01-10' },
        { name: 'Final Design', status: 'in-progress', deposit: '₹20,000', date: '2024-01-20' },
        { name: 'Brand Guidelines', status: 'pending', deposit: '₹15,000', date: '2024-01-30' },
      ],
      totalDeposit: '₹50,000',
      released: '₹15,000',
      pending: '₹35,000',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-primary-light text-primary-dark';
      case 'in-progress':
        return 'bg-primary-light text-primary-dark';
      default:
        return 'bg-gray-100 text-charcoal-light';
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">Engagements</h1>
          <p className="text-sm text-charcoal-light">Post-hiring project management and deposit tracking</p>
        </div>

        <div className="space-y-6">
          {engagements.map((engagement) => (
            <div
              key={engagement.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md smooth-transition"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                    <Icon name="connect" className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-dark">{engagement.client}</h3>
                    <p className="text-sm text-charcoal-light">{engagement.project}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light/10 rounded-lg p-4 mb-5 border border-primary/20">
                <h4 className="font-semibold text-sm text-charcoal-dark mb-2 flex items-center gap-2">
                  <Icon name="document" className="w-4 h-4 text-black" />
                  Project Scope:
                </h4>
                <p className="text-sm text-charcoal-dark">{engagement.scope}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-bold text-charcoal-dark mb-3">Milestones & Deposits:</h4>
                <div className="space-y-3">
                  {engagement.milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="bg-offwhite rounded-lg p-4 border-2 border-gray-200 hover:border-primary/30 smooth-transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              milestone.status === 'completed' ? 'bg-primary text-white' :
                              milestone.status === 'in-progress' ? 'bg-primary text-white' :
                              'bg-gray-200 text-charcoal-light'
                            }`}>
                              {milestone.status === 'completed' ? (
                                <Icon name="check" className="w-4 h-4 text-white" />
                              ) : (
                                <span className={milestone.status === 'in-progress' ? 'text-white' : 'text-charcoal-light'}>{index + 1}</span>
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-charcoal-dark">{milestone.name}</p>
                              <p className="text-xs text-charcoal-light">Due: {milestone.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-base text-charcoal-dark">{milestone.deposit}</p>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(milestone.status)}`}>
                            {milestone.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6">
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-offwhite rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-charcoal-light mb-1">Total Deposit</p>
                    <p className="text-xl font-bold text-charcoal-dark">{engagement.totalDeposit}</p>
                  </div>
                  <div className="bg-primary-light/20 rounded-lg p-4 border border-primary/20">
                    <p className="text-xs text-charcoal-light mb-1">Released</p>
                    <p className="text-xl font-bold text-primary-dark">{engagement.released}</p>
                  </div>
                  <div className="bg-primary-light/20 rounded-lg p-4 border border-primary/20">
                    <p className="text-xs text-charcoal-light mb-1">Pending</p>
                    <p className="text-xl font-bold text-primary-dark">{engagement.pending}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center gap-2">
                    <Icon name="money" className="w-4 h-4 text-white" />
                    Request Deposit Release →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementsView;
