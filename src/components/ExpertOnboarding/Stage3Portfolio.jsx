import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from './OnboardingProgress';
import { Icon } from '../Icons';

const Stage3Portfolio = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);

  const tools = ['Canva', 'Figma', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'Adobe Creative Suite', 'Other'];

  const toggleTool = (tool) => {
    setSelectedTools(prev =>
      prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]
    );
  };

  const handleContinue = () => {
    onComplete({ portfolio: portfolioItems, tools: selectedTools });
    navigate('/expert/onboarding/compliance');
  };

  return (
    <div className="bg-white">
      <OnboardingProgress currentStage={3} totalStages={4} />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">
              Portfolio & Credibility
            </h1>
            <p className="text-base text-charcoal-light">
              Showcase your work and build trust with potential clients.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="document" className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-dark">Portfolio Uploads</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-2">
                  Portfolio Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-primary smooth-transition cursor-pointer">
                  <input type="file" multiple accept="image/*" className="hidden" id="images-upload" />
                  <label htmlFor="images-upload" className="cursor-pointer">
                    <Icon name="upload" className="w-8 h-8 mx-auto mb-2 text-black" />
                    <span className="text-charcoal-dark font-medium text-sm block">Click to upload images</span>
                    <span className="text-charcoal-light text-xs block mt-1">PNG, JPG up to 10MB each</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                  Video Links (YouTube, Vimeo)
                </label>
                <input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-2">
                  PDF Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-primary smooth-transition cursor-pointer">
                  <input type="file" accept=".pdf" className="hidden" id="pdf-upload" />
                  <label htmlFor="pdf-upload" className="cursor-pointer">
                    <Icon name="document" className="w-8 h-8 mx-auto mb-2 text-black" />
                    <span className="text-charcoal-dark font-medium text-sm">Upload PDFs</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-1.5">
                  Portfolio URLs
                </label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-dark mb-2">
                  Certifications
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-primary smooth-transition cursor-pointer">
                  <input type="file" accept=".pdf,.jpg,.png" className="hidden" id="cert-upload" />
                  <label htmlFor="cert-upload" className="cursor-pointer">
                    <Icon name="document" className="w-8 h-8 mx-auto mb-2 text-black" />
                    <span className="text-charcoal-dark font-medium text-sm">Upload Certifications</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="settings" className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-dark">Tools & Technologies</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => {
                const isSelected = selectedTools.includes(tool);
                return (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => toggleTool(tool)}
                    className={`px-3 py-2 rounded-lg border-2 smooth-transition text-xs font-medium ${
                      isSelected
                        ? 'border-primary bg-primary-light/20 text-primary-dark shadow-sm'
                        : 'border-gray-200 hover:border-primary/50 text-charcoal-dark'
                    }`}
                  >
                    {isSelected && <Icon name="check" className="w-3 h-3 inline mr-1 text-black" />}
                    {tool}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <button
              onClick={handleContinue}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Continue — Complete Compliance Verification →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage3Portfolio;
