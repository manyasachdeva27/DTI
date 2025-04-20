import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading leading-tight">
                Your Body Your Rules!
              </h1>
              <p className="text-lg text-foreground/80">
              YourSakhi is a holistic women's health platform offering cycle tracking, expert consultations, and wellness insights. From menarche to menopause, it empowers women with knowledge and community support at every stage
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup">
                  <Button size="lg" className="bg-sakhi-500 hover:bg-sakhi-600">
                    Join us today
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                style={{width: "400%", height: "400%", marginLeft: "-2rem"}}
                src="home.png" 
                alt="Woman with menstrual health illustrations" 
                className="rounded-xl w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-heading mb-4">
              Everything You Need for Your Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your Sakhi provides comprehensive tools and resources designed to support 
              your health journey, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sakhi-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sakhi-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Period & Ovulation Calculators</h3>
                <p className="text-muted-foreground mb-4">
                  Track your menstrual cycle and predict your most fertile days with our easy-to-use calculators.
                </p>
                <Link to="/calculators/period" className="text-sakhi-500 hover:text-sakhi-600 font-medium">
                  Try our calculators
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sakhi-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sakhi-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Library</h3>
                <p className="text-muted-foreground mb-4">
                  Access comprehensive articles, guides, and information on women's health and wellness.
                </p>
                <Link to="/health-library/health360" className="text-sakhi-500 hover:text-sakhi-600 font-medium">
                  Explore our library
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sakhi-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sakhi-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other women, share experiences, and find support in our safe community space.
                </p>
                <Link to="/community" className="text-sakhi-500 hover:text-sakhi-600 font-medium">
                  Join the conversation
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sakhi-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold gradient-heading mb-4">
              Your Health Journey Starts Here
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sign up today to access all our tools and resources, track your health data, 
              and join a supportive community of women.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-sakhi-500 hover:bg-sakhi-600">
                Create your free account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
