import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-sakhi-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-heading mb-6">About Your Sakhi</h1>
            <p className="text-lg text-foreground/80">
            <i>Your Health. Your Power. Your Companion.</i>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="aboutus.jpg" 
                alt="Women supporting each other" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold gradient-heading">Our Story</h2>
              <p className="text-lg text-foreground/80">
                Your Sakhi was born from a vision to create a supportive, informative, and 
                accessible platform dedicated to women's health and wellness.
              </p>
              <p className="text-foreground/80">
                The term "Sakhi" means "female friend" or "companion" in Hindi, and that's exactly 
                what we aim to be - a trusted companion throughout your health journey.
              </p>
              <p className="text-foreground/80">
                Our team of healthcare professionals, technology experts, and passionate advocates 
                for women's health came together to create a platform that addresses the unique 
                health needs and concerns of women, providing tools, resources, and community 
                support to empower informed health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-sakhi-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold gradient-heading">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              At Your Sakhi, our mission is to empower women with knowledge, tools, and support 
              to take control of their health and wellbeing.
            </p>
            <p className="text-foreground/80">
              We believe that every woman deserves access to accurate, comprehensive health 
              information and supportive resources tailored to her unique needs.
            </p>
            <p className="text-foreground/80">
              Through our platform, we strive to bridge gaps in women's healthcare, foster 
              a supportive community, and ultimately contribute to better health outcomes 
              for women everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold gradient-heading text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-2 border-sakhi-200">
                    <img 
                      src="nams.jpeg" 
                      alt="Namrata Gupta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Namrata Gupta</h3>
                  
                 
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-2 border-sakhi-200">
                    <img 
                      src="mans.jpeg" 
                      alt="Namrata Gupta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Manya Sachdeva</h3>
               
                  
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-2 border-sakhi-200">
                    <img 
                      src="navs.jpeg" 
                      alt="Namrata Gupta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Navya Singh</h3>
             
                  
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-center">
                   <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-2 border-sakhi-200">
                    <img 
                      src="k.jpeg" 
                      alt="Namrata Gupta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Khushi Goyal</h3>
                
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sakhi-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold gradient-heading text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sakhi-600">Empowerment</h3>
              <p className="text-foreground/80">
                We believe in empowering women with knowledge and tools to take control 
                of their health and make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sakhi-600">Accessibility</h3>
              <p className="text-foreground/80">
                We are committed to making reliable health information and resources 
                accessible to women from all walks of life.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sakhi-600">Inclusivity</h3>
              <p className="text-foreground/80">
                We celebrate diversity and strive to create an inclusive space where 
                every woman feels represented and supported.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sakhi-600">Education</h3>
              <p className="text-foreground/80">
                We are dedicated to providing evidence-based education on women's health, 
                dismantling myths, and promoting health literacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
