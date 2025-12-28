import { Icon } from '../Icons';

const DashboardHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-charcoal-dark">Expert Dashboard</h1>
          <p className="text-xs text-charcoal-light">Welcome back! Here's your overview.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="connect" className="w-5 h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-charcoal-light truncate">Active Engagements</p>
                <p className="text-lg sm:text-xl font-bold text-primary-dark">2</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="pending" className="w-5 h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-charcoal-light truncate">Pending Actions</p>
                <p className="text-lg sm:text-xl font-bold text-primary-dark">3</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="money" className="w-5 h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-charcoal-light truncate">Deposits Released</p>
                <p className="text-lg sm:text-xl font-bold text-primary-dark">₹45,000</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="calendar" className="w-5 h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-charcoal-light truncate">Upcoming Discussions</p>
                <p className="text-lg sm:text-xl font-bold text-charcoal-dark">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
