import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from './OnboardingProgress';
import { Icon } from '../Icons';

const Stage1Profile = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    businessName: '',
    alias: '',
    role: '',
    primaryEmail: '',
    primaryMobile: '',
    secondaryEmail: '',
    secondaryMobile: '',
    logo: null,
    website: '',
    country: '',
    city: '',
    about: '',
    yearsExperience: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
    navigate('/expert/onboarding/expertise');
  };

  return (
    <div className="bg-white">
      <OnboardingProgress currentStage={1} totalStages={4} />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">
              Create Your Profile
            </h1>
            <p className="text-base text-charcoal-light">
              Let's start with your basic information and professional identity.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Profile Identity Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="user" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">Profile Identity</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Business Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    onFocus={() => setFocusedField('businessName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2.5 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary/20 smooth-transition text-sm ${
                      focusedField === 'businessName'
                        ? 'border-primary bg-primary-light/5'
                        : 'border-gray-200 focus:border-primary'
                    }`}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      Alias / Brand Name <span className="text-charcoal-light text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.alias}
                      onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      Role <span className="text-primary">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                      required
                    >
                      <option value="">Select role</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="consultant">Consultant</option>
                      <option value="agency">Agency</option>
                      <option value="company">Company</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="phone" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">Contact Details</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      Primary Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.primaryEmail}
                      onChange={(e) => setFormData({ ...formData, primaryEmail: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      Primary Mobile <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.primaryMobile}
                      onChange={(e) => setFormData({ ...formData, primaryMobile: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presence Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="branding" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">Brand Presence</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Logo Upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-primary smooth-transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, logo: e.target.files[0] })}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <Icon name="upload" className="w-8 h-8 mx-auto mb-2 text-black" />
                      <span className="text-charcoal-dark font-medium text-sm block">Click to upload logo</span>
                      <span className="text-charcoal-light text-xs block mt-1">PNG, JPG up to 5MB</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      Country <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      City <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="edit" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">About / Summary</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Professional background <span className="text-primary">*</span>
                  </label>
                  <textarea
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-sm"
                    placeholder="Tell us about your marketing expertise and experience..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Years of experience <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.yearsExperience}
                    onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-5">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Save & Continue — Build Service Profile →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stage1Profile;
