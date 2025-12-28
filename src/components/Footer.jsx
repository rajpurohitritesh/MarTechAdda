const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-200 text-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Social */}
          <div>
            <h3 className="text-sm font-medium mb-3">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-600 hover:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="/martechadda-logo.png" 
                alt="MarTechAdda Logo" 
                className="h-6 w-auto"
              />
              <div className="text-base font-semibold text-black">
                MarTechAdda
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Built for businesses and marketing professionals
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MarTechAdda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

