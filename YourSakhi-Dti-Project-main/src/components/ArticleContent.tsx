import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const articleContents = {
  1: {
    title: "Understanding PCOS: Symptoms, Causes, and Treatment Options",
    content: `
      Polycystic ovary syndrome (PCOS) is a common hormonal disorder that affects women of reproductive age. This comprehensive guide will help you understand its symptoms, causes, and available treatment options.

      ## What is PCOS?
      PCOS is a hormonal disorder that can affect women during their reproductive years. It's characterized by irregular periods, elevated levels of male hormones (androgens), and multiple small cysts on the ovaries.

      ## Common Symptoms
      - Irregular menstrual cycles
      - Heavy periods
      - Excess facial and body hair
      - Acne
      - Weight gain
      - Difficulty getting pregnant
      - Hair thinning on the scalp
      - Darkening of skin in certain areas

      ## Causes and Risk Factors
      The exact cause of PCOS is unknown, but several factors may play a role:
      - Genetics
      - Excess insulin
      - Low-grade inflammation
      - Excess androgen production

      ## Diagnosis
      Doctors typically diagnose PCOS based on:
      - Medical history
      - Physical examination
      - Blood tests
      - Ultrasound imaging

      ## Treatment Options
      1. Lifestyle Changes
         - Regular exercise
         - Healthy diet
         - Weight management
         - Stress reduction

      2. Medications
         - Birth control pills
         - Anti-androgen medications
         - Metformin
         - Fertility medications (if trying to conceive)

      3. Natural Remedies
         - Supplements (inositol, omega-3)
         - Herbal remedies
         - Acupuncture

      ## Living with PCOS
      While PCOS is a chronic condition, it can be managed effectively with proper treatment and lifestyle modifications. Regular monitoring and working closely with healthcare providers can help maintain overall health and manage symptoms.

      ## When to See a Doctor
      Consult a healthcare provider if you experience:
      - Irregular periods
      - Difficulty getting pregnant
      - Signs of excess androgen
      - Significant weight gain
      
      Remember, early diagnosis and treatment can help prevent long-term complications and improve quality of life.
    `,
    category: "Reproductive Health",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    publishDate: "2024-03-15"
  },
  2: {
    title: "Nutrition Guide for Women in Different Life Stages",
    content: `
      A woman's nutritional needs change throughout her life. This comprehensive guide will help you understand the essential nutrients needed at each stage and how to maintain optimal health through proper nutrition.

      ## Adolescence (12-18 years)
      ### Key Nutrients:
      - Iron for menstruation
      - Calcium for bone development
      - Vitamin D for calcium absorption
      - Protein for growth
      
      ## Early Adulthood (19-30 years)
      ### Essential Nutrients:
      - Folate for reproductive health
      - Iron for menstrual health
      - B vitamins for energy
      - Omega-3 fatty acids
      
      ## Pregnancy and Lactation
      ### Critical Nutrients:
      - Folic acid for fetal development
      - Iron for blood volume
      - Calcium for fetal bone development
      - DHA for brain development
      
      ## Middle Age (31-50 years)
      ### Important Nutrients:
      - Calcium for bone health
      - Vitamin D for immunity
      - Antioxidants for cell protection
      - Fiber for digestive health
      
      ## Menopause and Beyond
      ### Key Nutrients:
      - Calcium and Vitamin D for bone health
      - Protein for muscle maintenance
      - B12 for nerve function
      - Omega-3s for heart health

      ## General Nutrition Tips
      1. Stay Hydrated
         - Drink 8-10 glasses of water daily
         - Monitor urine color
         - Include hydrating foods
      
      2. Eat a Rainbow
         - Variety of fruits and vegetables
         - Different colored foods
         - Diverse nutrient intake
      
      3. Protein Sources
         - Lean meats
         - Fish
         - Legumes
         - Plant-based options
      
      4. Healthy Fats
         - Avocados
         - Nuts and seeds
         - Olive oil
         - Fatty fish

      ## Special Considerations
      - Food allergies and intolerances
      - Dietary restrictions
      - Medical conditions
      - Activity level
      
      Remember to consult with healthcare providers about specific nutritional needs based on your individual circumstances.
    `,
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    readTime: "10 min read",
    author: "Dr. Emily Chen",
    publishDate: "2024-03-10"
  },
  3: {
    title: "Managing Menstrual Pain: Effective Strategies and When to See a Doctor",
    content: `
      Menstrual pain, or dysmenorrhea, affects many women. This guide provides comprehensive strategies for managing period pain and helps you understand when to seek medical attention.

      ## Understanding Menstrual Pain
      ### Types of Menstrual Pain:
      1. Primary Dysmenorrhea
         - Natural menstrual cramps
         - Usually begins with periods
         - Improves with age
      
      2. Secondary Dysmenorrhea
         - Caused by underlying conditions
         - May worsen over time
         - Requires medical attention

      ## Common Symptoms
      - Lower abdominal cramps
      - Lower back pain
      - Headaches
      - Nausea
      - Fatigue
      - Diarrhea or constipation

      ## Home Remedies
      ### Heat Therapy
      - Hot water bottle
      - Heating pad
      - Warm bath
      
      ### Exercise
      - Light walking
      - Yoga
      - Stretching
      - Swimming
      
      ### Dietary Changes
      - Reduce caffeine
      - Increase water intake
      - Add anti-inflammatory foods
      - Consider supplements

      ## Medical Treatments
      ### Over-the-Counter Options
      - NSAIDs (ibuprofen, naproxen)
      - Acetaminophen
      - Combined pain relievers
      
      ### Prescription Options
      - Birth control pills
      - Hormonal IUD
      - Prescription pain medication
      - Other hormonal treatments

      ## When to See a Doctor
      ### Red Flags:
      - Severe pain that interferes with daily life
      - Heavy bleeding
      - Irregular periods
      - Pain outside menstruation
      - Fever
      - Unusual discharge

      ## Preventive Measures
      1. Lifestyle Changes
         - Regular exercise
         - Stress management
         - Adequate sleep
         - Balanced diet
      
      2. Tracking Symptoms
         - Keep a period diary
         - Note pain patterns
         - Track related symptoms
         - Document effective remedies

      Remember, severe menstrual pain is not normal and should be evaluated by a healthcare provider.
    `,
    category: "Menstrual Health",
    image: "https://images.unsplash.com/photo-1616694554275-824b5fea04dc?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read",
    author: "Dr. Maria Rodriguez",
    publishDate: "2024-03-08"
  }
};

export function ArticleContent() {
  const { id } = useParams();
  const article = articleContents[Number(id)];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/health-library/health360">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <Link to="/health-library/health360">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        <article className="prose prose-sakhi max-w-none">
          <div className="aspect-video overflow-hidden rounded-lg mb-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-sakhi-100 text-sakhi-600 px-2 py-1 rounded-full">
              {article.category}
            </span>
            <span>{article.readTime}</span>
            <span>By {article.author}</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>

          <h1 className="text-3xl font-bold mb-6 !mt-0">{article.title}</h1>

          <div className="space-y-4 article-content">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('##')) {
                return <h2 key={index} className="text-xl font-semibold mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
              } else if (paragraph.trim().startsWith('#')) {
                return <h3 key={index} className="text-lg font-semibold mt-6 mb-3">{paragraph.replace('#', '').trim()}</h3>;
              } else if (paragraph.trim().startsWith('-')) {
                return <li key={index} className="ml-4">{paragraph.replace('-', '').trim()}</li>;
              } else if (paragraph.trim()) {
                return <p key={index}>{paragraph.trim()}</p>;
              }
              return null;
            })}
          </div>
        </article>
      </div>
    </div>
  );
} 