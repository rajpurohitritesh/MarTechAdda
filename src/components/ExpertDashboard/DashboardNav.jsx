import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../Icons';

const DashboardNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/expert/dashboard', label: 'My Profile', iconName: 'user' },
    { path: '/expert/dashboard/discussions', label: 'Discussions', iconName: 'connect' },
    { path: '/expert/dashboard/engagements', label: 'Engagements', iconName: 'align' },
    { path: '/expert/dashboard/deposits', label: 'Deposits', iconName: 'money' },
    { path: '/expert/dashboard/settings', label: 'Settings', iconName: 'settings' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3.5 text-sm font-semibold smooth-transition whitespace-nowrap flex items-center gap-2 rounded-t-lg border-b-2 transition-all ${
                  isActive
                    ? 'border-b-2 border-primary text-primary bg-primary-light/10'
                    : 'border-b-2 border-transparent text-charcoal-light hover:text-charcoal-dark hover:bg-gray-50'
                }`}
              >
                <Icon 
                  name={item.iconName} 
                  className={`w-4 h-4 smooth-transition ${
                    isActive ? 'text-primary' : 'text-charcoal-light'
                  }`} 
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
