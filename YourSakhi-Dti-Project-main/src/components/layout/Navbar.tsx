import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-sakhi-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
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
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/about" className="nav-link">
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center">
                  Calculators <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/calculators/period" className="w-full">
                    Period Calculator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/calculators/ovulation" className="w-full">
                    Ovulation Calculator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center">
                  Health Library <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/health-library/health360" className="w-full">
                    Health 360
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/health-library/your-cycle" className="w-full">
                    Your Cycle
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/health-library/quizzes" className="w-full">
                    Quizzes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/community" className="nav-link">
              Community Forum
            </Link>
            
            <Link to="/consultation" className="nav-link">
              Consultation
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/signin">
              <Button variant="outline" size="sm" className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-sakhi-500 hover:bg-sakhi-600">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-sakhi-500 hover:text-sakhi-700 hover:bg-sakhi-50 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/about" 
              className="px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="relative group">
              <button className="w-full flex items-center justify-between px-3 py-2 text-foreground group-hover:text-sakhi-500 group-hover:bg-sakhi-50 rounded-md">
                Calculators
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                <Link 
                  to="/calculators/period" 
                  className="block px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Period Calculator
                </Link>
                <Link 
                  to="/calculators/ovulation" 
                  className="block px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ovulation Calculator
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="w-full flex items-center justify-between px-3 py-2 text-foreground group-hover:text-sakhi-500 group-hover:bg-sakhi-50 rounded-md">
                Health Library
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-hover:block">
                <Link 
                  to="/health-library/health360" 
                  className="block px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Health 360
                </Link>
                <Link 
                  to="/health-library/your-cycle" 
                  className="block px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Cycle
                </Link>
                <Link 
                  to="/health-library/quizzes" 
                  className="block px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quizzes
                </Link>
              </div>
            </div>
            
            <Link 
              to="/community" 
              className="px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Community Forum
            </Link>
            
            <Link 
              to="/consultation" 
              className="px-3 py-2 text-foreground hover:text-sakhi-500 hover:bg-sakhi-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultation
            </Link>
            
            <div className="pt-2 flex space-x-2">
              <Link 
                to="/signin" 
                className="flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50">
                  Sign In
                </Button>
              </Link>
              <Link 
                to="/signup" 
                className="flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-sakhi-500 hover:bg-sakhi-600">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
