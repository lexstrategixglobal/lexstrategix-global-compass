
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid container with better responsive classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold font-serif">
              Lexstrategix<span className="text-gold-400">Global</span>
            </h3>
            <p className="text-navy-100 text-sm max-w-xs">
              Professional business services for US clients, delivered with
              precision from our base in India.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-navy-100 hover:text-white text-sm block">
                  Business Incorporation
                </a>
              </li>
              <li>
                <a href="#services" className="text-navy-100 hover:text-white text-sm block">
                  Compliance Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-navy-100 hover:text-white text-sm block">
                  Bookkeeping
                </a>
              </li>
              <li>
                <a href="#services" className="text-navy-100 hover:text-white text-sm block">
                  Contract Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-navy-100 hover:text-white text-sm block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-navy-100 hover:text-white text-sm block">
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-navy-100 hover:text-white text-sm block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-navy-100 hover:text-white text-sm block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hi@lexstrategixglobal.com"
                  className="text-navy-100 hover:text-white text-sm block"
                >
                  hi@lexstrategixglobal.com
                </a>
              </li>
              <li className="text-navy-100 text-sm">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with improved responsive layout */}
        <div className="pt-8 border-t border-navy-400">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-navy-100 text-sm">
              © {currentYear} Lexstrategix Global. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="#" className="text-navy-100 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd" 
                  />
                </svg>
              </a>

              <a href="#" className="text-navy-100 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path 
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
