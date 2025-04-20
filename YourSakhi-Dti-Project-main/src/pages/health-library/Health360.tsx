import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Understanding PCOS: Symptoms, Causes, and Treatment Options",
    excerpt: "Polycystic ovary syndrome (PCOS) affects up to 1 in 10 women of childbearing age. Learn about its symptoms, causes, and how to manage it effectively.",
    category: "Reproductive Health",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Nutrition Guide for Women in Different Life Stages",
    excerpt: "From adolescence to menopause, women's nutritional needs evolve. Discover the essential nutrients you need at every stage of your life.",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?q=80&w=800&auto=format&fit=crop",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Managing Menstrual Pain: Effective Strategies and When to See a Doctor",
    excerpt: "From home remedies to medical interventions, learn how to manage menstrual pain and recognize when it's time to consult a healthcare provider.",
    category: "Menstrual Health",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "The Connection Between Hormones and Mental Health in Women",
    excerpt: "Hormonal fluctuations can significantly impact women's mental health. Understand this connection and learn strategies for emotional well-being.",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?q=80&w=800&auto=format&fit=crop",
    readTime: "9 min read"
  },
  {
    id: 5,
    title: "Breast Health: Self-Examination and Screening Guidelines",
    excerpt: "Regular breast screening is crucial for early detection of potential issues. Learn the proper technique for breast self-examination and screening recommendations.",
    category: "Preventive Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Exercise for Women: Building Strength and Preventing Osteoporosis",
    excerpt: "Discover exercise routines specifically designed for women to build strength, enhance fitness, and reduce the risk of osteoporosis.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read"
  }
];

const categories = [
  "All Categories",
  "Reproductive Health",
  "Nutrition",
  "Menstrual Health",
  "Mental Health",
  "Preventive Care",
  "Fitness"
];

const Health360 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All Categories" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Health 360°</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive articles and resources covering all aspects of women's health and wellness.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">Search Articles</h2>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category
                        ? "bg-sakhi-100 text-sakhi-600 font-medium"
                        : "hover:bg-sakhi-50 text-foreground/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-sakhi-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Health Resources</h2>
              <div className="space-y-3">
                <Link to="/health-library/your-cycle" className="block text-sakhi-600 hover:text-sakhi-700">
                  Menstrual Cycle Phases
                </Link>
                <Link to="/health-library/quizzes" className="block text-sakhi-600 hover:text-sakhi-700">
                  Health Quizzes
                </Link>
                <Link to="/calculators/period" className="block text-sakhi-600 hover:text-sakhi-700">
                  Period Calculator
                </Link>
                <Link to="/calculators/ovulation" className="block text-sakhi-600 hover:text-sakhi-700">
                  Ovulation Calculator
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <Link to={`/health-library/article/${article.id}`} key={article.id}>
                    <Card className="overflow-hidden card-hover transition-transform hover:scale-[1.02]">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs bg-sakhi-100 text-sakhi-600 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <Button variant="link" className="p-0 text-sakhi-600 hover:text-sakhi-700">
                          Read Article →
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg border border-sakhi-100 text-center">
                <svg
                  className="h-12 w-12 text-sakhi-200 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-1">No Articles Found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any articles matching your search. Please try different keywords or categories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Categories");
                  }}
                  className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health360;
