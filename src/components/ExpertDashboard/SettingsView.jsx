import { Icon } from '../Icons';

const SettingsView = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">Settings</h1>
          <p className="text-sm text-charcoal-light">Manage your account preferences and privacy</p>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="settings" className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-dark">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-offwhite rounded-lg border border-gray-200">
                <div>
                  <p className="font-semibold text-sm text-charcoal-dark">Email Notifications</p>
                  <p className="text-xs text-charcoal-light">Receive updates via email</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary rounded focus:ring-primary" />
              </div>
              <div className="flex items-center justify-between p-3 bg-offwhite rounded-lg border border-gray-200">
                <div>
                  <p className="font-semibold text-sm text-charcoal-dark">SMS Notifications</p>
                  <p className="text-xs text-charcoal-light">Receive updates via SMS</p>
                </div>
                <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary" />
              </div>
              <div className="flex items-center justify-between p-3 bg-offwhite rounded-lg border border-gray-200">
                <div>
                  <p className="font-semibold text-sm text-charcoal-dark">Push Notifications</p>
                  <p className="text-xs text-charcoal-light">Browser push notifications</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary rounded focus:ring-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="lock" className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-dark">Privacy & Security</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-offwhite rounded-lg border border-gray-200 hover:border-primary smooth-transition">
                <p className="font-semibold text-sm text-charcoal-dark">Update Password</p>
                <p className="text-xs text-charcoal-light">Change your account password</p>
              </button>
              <button className="w-full text-left p-3 bg-offwhite rounded-lg border border-gray-200 hover:border-primary smooth-transition">
                <p className="font-semibold text-sm text-charcoal-dark">Privacy Settings</p>
                <p className="text-xs text-charcoal-light">Control your profile visibility</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="bank" className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-dark">Payment & Billing</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-offwhite rounded-lg border border-gray-200 hover:border-primary smooth-transition">
                <p className="font-semibold text-sm text-charcoal-dark">Bank Details</p>
                <p className="text-xs text-charcoal-light">Manage your bank account information</p>
              </button>
              <button className="w-full text-left p-3 bg-offwhite rounded-lg border border-gray-200 hover:border-primary smooth-transition">
                <p className="font-semibold text-sm text-charcoal-dark">Tax Information</p>
                <p className="text-xs text-charcoal-light">Update PAN, GST, and tax details</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
