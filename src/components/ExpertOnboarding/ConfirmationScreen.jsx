import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '../Icons';

const ConfirmationScreen = () => {
  const navigate = useNavigate();
  const [expertId] = useState(`MTA-EXP-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className={`card text-center smooth-transition ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}>
          {/* Success Icon */}
          <div className={`w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 smooth-transition ${
            isAnimating ? 'scale-0' : 'scale-100'
          }`} style={{ transitionDelay: '200ms' }}>
            <Icon name="check" className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h1 className="heading-1 mb-3">
            Profile Submitted for Verification
          </h1>

          <p className="body-text mb-6">
            We're reviewing your profile to ensure quality and credibility.
          </p>

          {/* Expert ID Card */}
          <div className="card mb-5">
            <p className="body-text-small font-semibold mb-2 uppercase tracking-wide">Your Expert ID</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="idCard" className="icon-medium text-black" />
              <p className="heading-2 text-primary">
                {expertId}
              </p>
            </div>
            <p className="body-text-small">
              Save this ID for future reference
            </p>
          </div>

          {/* Review Timeline Card */}
          <div className="card mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="timer" className="icon-medium text-black" />
              <p className="heading-3">
                Review takes 24–48 hours
              </p>
            </div>
            <p className="body-text">
              We'll notify you via email once your profile is verified and activated.
            </p>
          </div>

          {/* Next Steps Info */}
          <div className="card mb-6">
            <p className="body-text-small">
              <span className="font-semibold">What's next?</span> You can check your verification status anytime from your dashboard. We'll send you an email notification once your profile is live.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/expert/dashboard')}
            className="btn-primary"
          >
            Go to Dashboard →
          </button>

          <p className="body-text-small mt-5">
            Your profile is being reviewed. Thank you for your patience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationScreen;
