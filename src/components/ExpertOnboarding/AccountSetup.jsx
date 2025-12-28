import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import { Icon } from '../Icons';

const AccountSetup = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    mobileNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Invalid email';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      newErrors.mobileNumber = 'Invalid mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onComplete(formData);
      navigate('/expert/verify');
    }
  };

  return (
    <div className="bg-white">
      <ProgressIndicator
        currentStep={1}
        totalSteps={3}
        stepLabels={['Account Setup', 'Verify', 'Confirm Role']}
      />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="card">
            <div className="mb-6">
              <h1 className="heading-1 mb-2">
                Let's start with the basics
              </h1>
              <p className="body-text">
                We'll use this information to create your account and keep you updated.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-charcoal-dark mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-primary/10 smooth-transition ${
                    errors.fullName
                      ? 'border-gray-300 bg-gray-50'
                      : focusedField === 'fullName'
                      ? 'border-primary bg-primary-light/5'
                      : 'border-gray-200 focus:border-primary'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-gray-600 flex items-center gap-1">
                    <Icon name="warning" className="w-3 h-3 text-black" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-dark mb-2">
                  Work Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  onFocus={() => setFocusedField('workEmail')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-primary/10 smooth-transition ${
                    errors.workEmail
                      ? 'border-gray-300 bg-gray-50'
                      : focusedField === 'workEmail'
                      ? 'border-primary bg-primary-light/5'
                      : 'border-gray-200 focus:border-primary'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.workEmail && (
                  <p className="mt-1.5 text-xs text-gray-600 flex items-center gap-1">
                    <Icon name="warning" className="w-3 h-3 text-black" /> {errors.workEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-dark mb-2">
                  Mobile Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  onFocus={() => setFocusedField('mobileNumber')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-primary/10 smooth-transition ${
                    errors.mobileNumber
                      ? 'border-gray-300 bg-gray-50'
                      : focusedField === 'mobileNumber'
                      ? 'border-primary bg-primary-light/5'
                      : 'border-gray-200 focus:border-primary'
                  }`}
                  placeholder="9876543210"
                />
                {errors.mobileNumber && (
                  <p className="mt-1.5 text-xs text-gray-600 flex items-center gap-1">
                    <Icon name="warning" className="w-3 h-3 text-black" /> {errors.mobileNumber}
                  </p>
                )}
              </div>

              <div className="card">
                <p className="body-text-small">
                  <span className="font-semibold flex items-center gap-1">
                    <Icon name="lock" className="icon-small text-black" />
                    Privacy:
                  </span> Used only for account access and communication.
                </p>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Continue →
              </button>

              <p className="text-xs text-center text-charcoal-light/70">
                We don't sell or share your contact details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
