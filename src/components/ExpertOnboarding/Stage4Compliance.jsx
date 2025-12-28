import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from './OnboardingProgress';
import { Icon } from '../Icons';

const Stage4Compliance = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    entityType: '',
    pan: '',
    gst: '',
    cin: '',
    businessAddress: '',
    gstApplicable: '',
    accountNumber: '',
    ifsc: '',
    upi: '',
    consent: false,
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.consent) {
      onComplete(formData);
      navigate('/expert/confirmation');
    }
  };

  return (
    <div className="bg-white">
      <OnboardingProgress currentStage={4} totalStages={4} />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">
              Legal Identity & Compliance
            </h1>
            <p className="text-base text-charcoal-light">
              Compliance comes after trust — not before. This information is kept secure and confidential.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Entity Information Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="building" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">Entity Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Entity Type <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    required
                  >
                    <option value="">Select entity type</option>
                    <option value="individual">Individual</option>
                    <option value="proprietorship">Proprietorship</option>
                    <option value="llp">LLP</option>
                    <option value="pvt-ltd">Private Limited</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      PAN <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.pan}
                      onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase().slice(0, 10) })}
                      onFocus={() => setFocusedField('pan')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm ${
                        focusedField === 'pan'
                          ? 'border-primary bg-primary-light/5'
                          : 'border-gray-200 focus:border-primary'
                      }`}
                      maxLength={10}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                      GST (if applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.gst}
                      onChange={(e) => setFormData({ ...formData, gst: e.target.value.toUpperCase() })}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Business Address <span className="text-primary">*</span>
                  </label>
                  <textarea
                    value={formData.businessAddress}
                    onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Tax Preferences
                  </label>
                  <select
                    value={formData.gstApplicable}
                    onChange={(e) => setFormData({ ...formData, gstApplicable: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="gst-applicable">GST applicable</option>
                    <option value="not-applicable">Not applicable</option>
                    <option value="rcm">RCM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="bank" className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-dark">Bank Details</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    Account Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    IFSC <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.ifsc}
                    onChange={(e) => setFormData({ ...formData, ifsc: e.target.value.toUpperCase().slice(0, 11) })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    maxLength={11}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                    UPI ID <span className="text-charcoal-light text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.upi}
                    onChange={(e) => setFormData({ ...formData, upi: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    placeholder="yourname@upi"
                  />
                </div>
              </div>
            </div>

            {/* Consent Card */}
            <div className="card">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  required
                />
                <label htmlFor="consent" className="text-sm text-charcoal-dark">
                  <span className="font-semibold">I agree to the terms and conditions</span> and consent to verification. 
                  I understand that this information will be used for compliance purposes only and kept secure. 
                  <span className="text-primary"> *</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-5">
              <button
                type="submit"
                disabled={!formData.consent}
                className={`px-6 py-3 rounded-lg font-semibold text-sm smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                  formData.consent
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit for Verification & Activate Profile →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stage4Compliance;
