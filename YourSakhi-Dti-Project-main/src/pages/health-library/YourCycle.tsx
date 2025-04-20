
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const cyclePhases = [
  {
    id: "menstrual",
    name: "Menstrual Phase",
    days: "Days 1-5",
    description: "The first day of your period marks the beginning of your menstrual cycle. During this phase, the lining of your uterus sheds, resulting in menstrual bleeding.",
    hormones: "Estrogen and progesterone are at their lowest levels at the beginning of this phase.",
    bodyChanges: [
      "Menstrual bleeding",
      "Possible cramping or abdominal pain",
      "Possible back pain or headaches",
      "Fatigue or low energy"
    ],
    selfCare: [
      "Use heating pads for cramp relief",
      "Stay hydrated",
      "Take over-the-counter pain relievers if needed",
      "Gentle exercise like walking or yoga",
      "Get adequate rest"
    ],
    nutrition: [
      "Iron-rich foods to replenish lost iron",
      "Magnesium-rich foods for cramp relief",
      "Anti-inflammatory foods",
      "Warm, comforting foods"
    ]
  },
  {
    id: "follicular",
    name: "Follicular Phase",
    days: "Days 1-13",
    description: "This phase overlaps with the menstrual phase and continues until ovulation. During this time, your body prepares to release an egg, and the lining of your uterus begins to thicken.",
    hormones: "Estrogen rises steadily throughout this phase, reaching its peak just before ovulation. Follicle-stimulating hormone (FSH) is also active.",
    bodyChanges: [
      "Increased energy levels as menstruation ends",
      "Improved mood",
      "Enhanced cognitive function",
      "Increased cervical mucus"
    ],
    selfCare: [
      "Channel rising energy into physical activities",
      "Socialize and network (you're likely to feel more outgoing)",
      "Focus on challenging work projects",
      "Practice mindfulness to maintain balance"
    ],
    nutrition: [
      "Protein-rich foods for muscle development",
      "Vitamin E for healthy follicle development",
      "Omega-3 fatty acids",
      "Fresh fruits and vegetables"
    ]
  },
  {
    id: "ovulatory",
    name: "Ovulatory Phase",
    days: "Day 14 (approximately)",
    description: "Ovulation is when your ovary releases a mature egg. The egg travels down the fallopian tube and is available for fertilization for about 24 hours.",
    hormones: "Estrogen peaks and then drops. Luteinizing hormone (LH) surges, triggering the release of the egg.",
    bodyChanges: [
      "Slight increase in basal body temperature",
      "Clear, stretchy cervical mucus (similar to egg whites)",
      "Increased libido",
      "Possible mild pain or discomfort on one side of the abdomen",
      "Heightened senses (smell, taste, vision)"
    ],
    selfCare: [
      "Monitor fertility signs if planning or avoiding pregnancy",
      "Channel high energy into exercise",
      "Stay hydrated",
      "Practice stress management techniques"
    ],
    nutrition: [
      "Zinc-rich foods for reproductive health",
      "B-vitamin rich foods for energy",
      "Light, nutrient-dense meals",
      "Antioxidant-rich foods"
    ]
  },
  {
    id: "luteal",
    name: "Luteal Phase",
    days: "Days 15-28",
    description: "After ovulation, the follicle that released the egg transforms into a structure called the corpus luteum. If pregnancy doesn't occur, this phase ends with the beginning of your next period.",
    hormones: "Progesterone rises and peaks in the middle of this phase. Both estrogen and progesterone drop if pregnancy doesn't occur, triggering menstruation.",
    bodyChanges: [
      "Possible premenstrual symptoms (PMS)",
      "Water retention",
      "Breast tenderness",
      "Mood changes or irritability",
      "Food cravings",
      "Fatigue"
    ],
    selfCare: [
      "Prioritize rest and relaxation",
      "Warm baths with Epsom salts",
      "Gentle exercises like walking or stretching",
      "Adequate sleep",
      "Stress management techniques like deep breathing"
    ],
    nutrition: [
      "Magnesium-rich foods to reduce PMS symptoms",
      "Calcium-rich foods to alleviate mood swings",
      "Complex carbohydrates for stable energy",
      "Limit caffeine, alcohol, and salty foods"
    ]
  }
];

const YourCycle = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Understanding Your Menstrual Cycle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about the four phases of your menstrual cycle, their hormonal changes, 
            and how they affect your body, mood, and overall wellbeing.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-sakhi-200"></div>
            </div>
            <div className="relative flex justify-between">
              {cyclePhases.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 
                      ? "bg-sakhi-500 text-white" 
                      : "bg-sakhi-100 text-sakhi-500"
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 text-center hidden md:block">{phase.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="menstrual" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {cyclePhases.map((phase) => (
              <TabsTrigger 
                key={phase.id} 
                value={phase.id}
                className="data-[state=active]:bg-sakhi-100 data-[state=active]:text-sakhi-700"
              >
                {phase.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {cyclePhases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold gradient-heading">{phase.name}</h2>
                      <p className="text-sakhi-600 font-medium">{phase.days}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">What Happens</h3>
                        <p className="text-foreground/80">{phase.description}</p>
                        
                        <h3 className="text-lg font-semibold mt-4 mb-2">Hormones</h3>
                        <p className="text-foreground/80">{phase.hormones}</p>
                        
                        <h3 className="text-lg font-semibold mt-4 mb-2">Body Changes</h3>
                        <ul className="list-disc list-outside pl-5 text-foreground/80 space-y-1">
                          {phase.bodyChanges.map((change, index) => (
                            <li key={index}>{change}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Self-Care Tips</h3>
                        <ul className="list-disc list-outside pl-5 text-foreground/80 space-y-1">
                          {phase.selfCare.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                        
                        <h3 className="text-lg font-semibold mt-4 mb-2">Nutrition Tips</h3>
                        <ul className="list-disc list-outside pl-5 text-foreground/80 space-y-1">
                          {phase.nutrition.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Track Your Cycle</h3>
              <p className="text-muted-foreground mb-4">
                Knowing your cycle can help you predict your periods, understand your body better, 
                and plan for life events. Use our calculators to track your cycle.
              </p>
              <div className="flex space-x-3">
                <Link to="/calculators/period">
                  <Button variant="outline" className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50">
                    Period Calculator
                  </Button>
                </Link>
                <Link to="/calculators/ovulation">
                  <Button className="bg-sakhi-500 hover:bg-sakhi-600">
                    Ovulation Calculator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Learn More</h3>
              <p className="text-muted-foreground mb-4">
                Explore our articles to learn more about menstrual health, hormonal balance, 
                and managing cycle-related symptoms.
              </p>
              <Link to="/health-library/health360">
                <Button className="bg-sakhi-500 hover:bg-sakhi-600">
                  Browse Health Library
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YourCycle;
