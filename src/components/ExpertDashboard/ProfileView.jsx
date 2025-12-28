import { Icon } from '../Icons';

const ProfileView = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">My Profile</h1>
          <p className="text-sm text-charcoal-light">Manage your professional profile and visibility</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center">
              <Icon name="user" className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-charcoal-dark">Creative Marketing Solutions</h2>
              <p className="text-sm text-charcoal-light">Agency • Mumbai, India</p>
              <span className="inline-block mt-2 px-2.5 py-1 bg-primary-light/20 text-primary-dark rounded-full text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <Icon name="check" className="w-3 h-3 text-primary" />
                  Verified
                </span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-charcoal-dark mb-3">Profile Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal-light mb-1">Business Name</label>
                  <p className="text-sm text-charcoal-dark font-semibold">Creative Marketing Solutions</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal-light mb-1">Role</label>
                  <p className="text-sm text-charcoal-dark font-semibold">Agency</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal-light mb-1">Location</label>
                  <p className="text-sm text-charcoal-dark font-semibold">Mumbai, India</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal-light mb-1">Experience</label>
                  <p className="text-sm text-charcoal-dark font-semibold">8+ years</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-5">
              <h3 className="text-base font-semibold text-charcoal-dark mb-3">Services Offered</h3>
              <div className="flex flex-wrap gap-2">
                {['Branding', 'Strategic Marketing', 'Advertising'].map((service, index) => {
                  const iconNames = ['branding', 'strategic', 'advertising'];
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary-light/20 text-primary-dark rounded-lg border border-primary/30 text-xs font-medium flex items-center gap-1.5"
                    >
                      <Icon name={iconNames[index]} className="w-3.5 h-3.5 text-primary" />
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="border-t pt-5 flex gap-3">
              <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md flex items-center gap-2">
                <Icon name="edit" className="w-4 h-4 text-white" />
                Edit Profile
              </button>
              <button className="px-5 py-2.5 border-2 border-gray-200 rounded-lg font-semibold text-sm hover:border-primary hover:bg-primary-light/10 smooth-transition flex items-center gap-2">
                <Icon name="user" className="w-4 h-4 text-black" />
                Preview Public Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
