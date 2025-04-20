import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sakhi-100 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="logo.jpeg" 
                alt="Your Sakhi Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-sakhi-500 to-sakhi-700 bg-clip-text text-transparent">
                Your Sakhi
              </span>
            </Link>
            <p className="text-muted-foreground">
              Your trusted companion for women's health and wellbeing.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/health-library/health360" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Health 360
                </Link>
              </li>
              <li>
                <Link to="/health-library/your-cycle" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Your Cycle
                </Link>
              </li>
              <li>
                <Link to="/health-library/quizzes" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Health Quizzes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/calculators/period" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Period Calculator
                </Link>
              </li>
              <li>
                <Link to="/calculators/ovulation" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  Ovulation Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-sakhi-500" />
                <a href="mailto:yoursakhi@gmail.com" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  yoursakhi@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sakhi-500" />
                <a href="tel:+919987932401" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                  +91 9987932401
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-sakhi-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Sakhi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-sakhi-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
