import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import { Icon } from '../Icons';

const VerifyContinue = ({ accountData, onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [verificationMethod, setVerificationMethod] = useState('email');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, '');
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerified(true);
        setIsVerifying(false);
        setTimeout(() => {
          onComplete();
          navigate('/expert/confirm-role');
        }, 1000);
      }, 1500);
    }
  };

  const isOtpComplete = otp.join('').length === 6;

  return (
    <div className="bg-white">
      <ProgressIndicator
        currentStep={2}
        totalSteps={3}
        stepLabels={['Account Setup', 'Verify', 'Confirm Role']}
      />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="card">
            <div className="mb-6">
              <h1 className="heading-1 mb-2">
                Verify to continue
              </h1>
              <p className="body-text">
                We've sent a verification code to help us keep MarTechAdda credible and spam-free.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-charcoal-dark mb-3">Choose verification method:</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVerificationMethod('email')}
                  className={`card text-left cursor-pointer ${
                    verificationMethod === 'email'
                      ? 'border-primary bg-primary-light/10'
                      : 'hover:border-primary'
                  }`}
                >
                  <div className="font-medium text-sm text-charcoal-dark mb-1 flex items-center gap-1">
                    <Icon name="email" className="w-4 h-4 text-black" />
                    Email
                  </div>
                  <div className="text-xs text-charcoal-light truncate">{accountData?.workEmail || 'john@example.com'}</div>
                </button>
                <button
                  type="button"
                  onClick={() => setVerificationMethod('mobile')}
                  className={`card text-left cursor-pointer ${
                    verificationMethod === 'mobile'
                      ? 'border-primary bg-primary-light/10'
                      : 'hover:border-primary'
                  }`}
                >
                  <div className="font-medium text-sm text-charcoal-dark mb-1 flex items-center gap-1">
                    <Icon name="phone" className="w-4 h-4 text-black" />
                    Mobile
                  </div>
                  <div className="text-xs text-charcoal-light">{accountData?.mobileNumber || '+91 9876543210'}</div>
                </button>
              </div>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-3 text-center">
                  Enter the 6-digit code
                </label>
                <div className="flex justify-center gap-2 mb-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-10 h-10 text-center text-lg font-bold rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 smooth-transition"
                    />
                  ))}
                </div>
                <p className="text-center text-xs text-charcoal-light">
                  Didn't receive? <button type="button" className="text-primary hover:underline">Resend code</button>
                </p>
              </div>

              <div className="card">
                <p className="body-text-small">
                  <span className="font-semibold flex items-center gap-1">
                    <Icon name="lock" className="icon-small text-black" />
                    Security:
                  </span> This helps us keep MarTechAdda credible and spam-free.
                </p>
              </div>

              <button
                type="submit"
                disabled={!isOtpComplete || isVerifying || isVerified}
                className={`w-full btn-primary ${
                  (!isOtpComplete || isVerifying || isVerified) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isVerifying ? (
                  <span className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="pending" className="w-4 h-4 animate-spin text-black" /> Verifying...
                  </span>
                ) : isVerified ? (
                  <span className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="check" className="w-4 h-4 text-black" /> Verified! Redirecting...
                  </span>
                ) : (
                  'Verify & Continue →'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyContinue;
