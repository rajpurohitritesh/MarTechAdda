import { Icon } from '../Icons';

const DiscussionsView = () => {
  const discussions = [
    {
      id: 1,
      client: 'TechStart Inc.',
      topic: 'Brand Identity Design',
      scheduled: '2024-01-15 14:00',
      status: 'scheduled',
      type: 'video',
    },
    {
      id: 2,
      client: 'HealthCare Plus',
      topic: 'Marketing Strategy',
      scheduled: '2024-01-16 10:00',
      status: 'pending',
      type: 'call',
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">Discussions</h1>
          <p className="text-sm text-charcoal-light">Manage your pre-hiring conversations with clients</p>
        </div>

        <div className="space-y-6">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md smooth-transition"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      <Icon name="building" className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal-dark">{discussion.client}</h3>
                      <p className="text-sm text-charcoal-light">{discussion.topic}</p>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  discussion.status === 'scheduled'
                    ? 'bg-primary-light text-primary-dark'
                    : 'bg-primary-light text-primary-dark'
                }`}>
                  {discussion.status}
                </span>
              </div>

              <div className="bg-offwhite rounded-soft p-4 mb-6 border border-gray-200">
                <div className="flex items-center gap-2 text-sm text-charcoal-light mb-1">
                  <Icon name="calendar" className="w-5 h-5" />
                  <span className="font-medium">Scheduled: {discussion.scheduled}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <Icon name={discussion.type === 'video' ? 'video' : 'phone'} className="w-4 h-4 text-black" />
                  <span>Type: {discussion.type === 'video' ? 'Video Call' : 'Phone Call'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {discussion.status === 'pending' && (
                  <>
                    <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-white" />
                      Accept
                    </button>
                    <button className="px-5 py-2.5 border-2 border-gray-200 rounded-lg font-semibold text-sm hover:border-primary hover:bg-primary-light/10 smooth-transition flex items-center gap-2">
                      <Icon name="calendar" className="w-4 h-4 text-black" />
                      Reschedule
                    </button>
                  </>
                )}
                {discussion.status === 'scheduled' && (
                  <>
                    <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center gap-2">
                      <Icon name="video" className="w-4 h-4 text-white" />
                      Join Discussion
                    </button>
                    <button className="px-5 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary-light smooth-transition flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-primary" />
                      Mark Completed
                    </button>
                  </>
                )}
              </div>

              {discussion.status === 'scheduled' && (
                <div className="mt-4 p-3 bg-primary-light/10 rounded-soft border border-primary/20">
                  <p className="text-sm text-charcoal-dark flex items-start gap-2">
                    <Icon name="lightbulb" className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">Note:</span> Quotation unlocks ONLY after discussion completion.</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionsView;
