import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

// Quiz data
const quizzes = [
  {
    id: 1,
    title: "Menstrual Health Knowledge",
    description: "Test your knowledge about menstrual health and common misconceptions.",
    questions: [
      {
        question: "What is the average length of a menstrual cycle?",
        options: ["14 days", "21 days", "28 days", "35 days"],
        correctAnswer: 2,
        explanation: "The average menstrual cycle is 28 days, although anywhere from 21-35 days is considered normal."
      },
      {
        question: "Which hormone is primarily responsible for triggering ovulation?",
        options: ["Estrogen", "Progesterone", "Luteinizing hormone (LH)", "Follicle-stimulating hormone (FSH)"],
        correctAnswer: 2,
        explanation: "LH triggers ovulation by causing the release of an egg from the ovary."
      },
      {
        question: "Which of the following is NOT a common symptom of PMS?",
        options: ["Mood swings", "Bloating", "High fever", "Food cravings"],
        correctAnswer: 2,
        explanation: "High fever is not a typical PMS symptom. If you experience fever during your period, consult a healthcare provider."
      },
      {
        question: "How long does an egg typically survive after ovulation if not fertilized?",
        options: ["12-24 hours", "2-3 days", "5-7 days", "10-14 days"],
        correctAnswer: 0,
        explanation: "An unfertilized egg survives for only 12-24 hours after ovulation."
      },
      {
        question: "Which of these factors can affect your menstrual cycle?",
        options: ["Stress", "Significant weight changes", "Intense exercise", "All of the above"],
        correctAnswer: 3,
        explanation: "Many factors can affect your cycle, including stress, weight changes, and exercise intensity."
      }
    ]
  },
  {
    id: 2,
    title: "Women's Nutritional Needs",
    description: "How much do you know about the specific nutritional needs of women?",
    questions: [
      {
        question: "Which vitamin is especially important for women of childbearing age?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Folate (Vitamin B9)"],
        correctAnswer: 3,
        explanation: "Folate is crucial for preventing birth defects and supporting cell growth."
      },
      {
        question: "Women are at higher risk of which condition during menopause?",
        options: ["Diabetes", "Osteoporosis", "Hypertension", "Asthma"],
        correctAnswer: 1,
        explanation: "Decreased estrogen during menopause increases the risk of osteoporosis."
      },
      {
        question: "Which mineral is commonly deficient in women due to menstrual blood loss?",
        options: ["Calcium", "Iron", "Potassium", "Zinc"],
        correctAnswer: 1,
        explanation: "Iron deficiency is common in menstruating women due to blood loss."
      },
      {
        question: "Which food is the best natural source of calcium?",
        options: ["Spinach", "Eggs", "Dairy products", "Bananas"],
        correctAnswer: 2,
        explanation: "Dairy products are excellent sources of easily absorbable calcium."
      },
      {
        question: "Which omega fatty acid is particularly important during pregnancy?",
        options: ["Omega-3", "Omega-6", "Omega-9", "Omega-12"],
        correctAnswer: 0,
        explanation: "Omega-3 fatty acids are crucial for fetal brain and eye development."
      }
    ]
  },
  {
    id: 3,
    title: "PCOS Awareness",
    description: "Learn about Polycystic Ovary Syndrome (PCOS) and its effects.",
    questions: [
      {
        question: "What percentage of women of reproductive age are affected by PCOS?",
        options: ["1-2%", "5-7%", "8-13%", "20-25%"],
        correctAnswer: 2,
        explanation: "PCOS affects approximately 8-13% of women of reproductive age."
      },
      {
        question: "Which of these is NOT a common symptom of PCOS?",
        options: ["Irregular periods", "Weight gain", "Fever", "Acne"],
        correctAnswer: 2,
        explanation: "Fever is not a symptom of PCOS. Common symptoms include irregular periods, weight gain, and acne."
      },
      {
        question: "Which hormone is often elevated in women with PCOS?",
        options: ["Estrogen", "Androgens", "Progesterone", "Prolactin"],
        correctAnswer: 1,
        explanation: "Women with PCOS often have elevated levels of androgens (male hormones)."
      },
      {
        question: "What is a common treatment approach for PCOS?",
        options: ["Antibiotics", "Birth control pills", "Antihistamines", "Antidepressants"],
        correctAnswer: 1,
        explanation: "Birth control pills can help regulate periods and reduce androgen levels."
      },
      {
        question: "Which lifestyle change can help manage PCOS symptoms?",
        options: ["Smoking", "Regular exercise", "Irregular sleep", "Skipping meals"],
        correctAnswer: 1,
        explanation: "Regular exercise can help manage weight and improve insulin sensitivity."
      }
    ]
  },
  {
    id: 4,
    title: "Mental Health & Wellness",
    description: "Understanding women's mental health and emotional well-being.",
    questions: [
      {
        question: "Which mental health condition is more common in women than men?",
        options: ["Depression", "Schizophrenia", "Autism", "ADHD"],
        correctAnswer: 0,
        explanation: "Women are almost twice as likely as men to experience depression."
      },
      {
        question: "What percentage of women experience postpartum depression?",
        options: ["1-5%", "5-10%", "10-15%", "15-20%"],
        correctAnswer: 2,
        explanation: "Approximately 10-15% of new mothers experience postpartum depression."
      },
      {
        question: "Which hormone fluctuation can affect mood?",
        options: ["Estrogen", "Vitamin D", "Calcium", "Iron"],
        correctAnswer: 0,
        explanation: "Estrogen fluctuations can significantly impact mood and emotional well-being."
      },
      {
        question: "What is NOT a healthy coping mechanism for stress?",
        options: ["Exercise", "Meditation", "Alcohol consumption", "Deep breathing"],
        correctAnswer: 2,
        explanation: "Alcohol is not a healthy way to cope with stress and can worsen mental health."
      },
      {
        question: "Which activity can help improve mental health?",
        options: ["Social isolation", "Regular exercise", "Poor sleep habits", "Skipping meals"],
        correctAnswer: 1,
        explanation: "Regular exercise releases endorphins and can improve mood and mental health."
      }
    ]
  },
  {
    id: 5,
    title: "Breast Health Awareness",
    description: "Essential knowledge about breast health and early detection.",
    questions: [
      {
        question: "How often should women perform breast self-exams?",
        options: ["Daily", "Weekly", "Monthly", "Yearly"],
        correctAnswer: 2,
        explanation: "Monthly breast self-exams are recommended for early detection."
      },
      {
        question: "At what age should women start getting mammograms?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 1,
        explanation: "Women should start getting mammograms at age 40, or earlier if high risk."
      },
      {
        question: "Which is NOT a common risk factor for breast cancer?",
        options: ["Family history", "Age", "Exercise", "Dense breast tissue"],
        correctAnswer: 2,
        explanation: "Exercise actually reduces breast cancer risk."
      },
      {
        question: "What percentage of breast lumps are cancerous?",
        options: ["80-90%", "60-70%", "40-50%", "20-30%"],
        correctAnswer: 3,
        explanation: "Only 20-30% of breast lumps are cancerous, but all should be checked."
      },
      {
        question: "Which lifestyle change can reduce breast cancer risk?",
        options: ["Smoking", "Alcohol consumption", "Physical activity", "High-fat diet"],
        correctAnswer: 2,
        explanation: "Regular physical activity can help reduce breast cancer risk."
      }
    ]
  }
];

interface ScoreResult {
  score: number;
  total: number;
  percentage: number;
}

const Quizzes = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const handleStartQuiz = (quizId: number) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
  };
  
  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    
    const currentQuiz = quizzes.find(q => q.id === activeQuiz);
    if (!currentQuiz) return;
    
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };
  
  const handleBackToQuizzes = () => {
    setActiveQuiz(null);
    setShowResults(false);
  };
  
  const calculateScore = (): ScoreResult => {
    if (!activeQuiz) return { score: 0, total: 0, percentage: 0 };
    
    const currentQuiz = quizzes.find(q => q.id === activeQuiz);
    if (!currentQuiz) return { score: 0, total: 0, percentage: 0 };
    
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    return {
      score: correctCount,
      total: currentQuiz.questions.length,
      percentage: Math.round((correctCount / currentQuiz.questions.length) * 100)
    };
  };

  const renderActiveQuiz = () => {
    const currentQuiz = quizzes.find(q => q.id === activeQuiz);
    if (!currentQuiz) return null;
    
    if (showResults) {
      const scoreData = calculateScore();
      
      return (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold gradient-heading mb-2">Your Results</h2>
            <p className="text-lg">
              You scored {scoreData.score} out of {scoreData.total} ({scoreData.percentage}%)
            </p>
          </div>
          
          <div className="space-y-8">
            {currentQuiz.questions.map((q, index) => {
              const isCorrect = answers[index] === q.correctAnswer;
              
              return (
                <div key={index} className={`p-6 rounded-lg ${
                  isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                }`}>
                  <h3 className="font-medium mb-2">
                    {index + 1}. {q.question}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((option, optIndex) => (
                      <div key={optIndex} className={`p-3 rounded ${
                        optIndex === q.correctAnswer
                          ? "bg-green-100 text-green-800"
                          : optIndex === answers[index] && optIndex !== q.correctAnswer
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-50"
                      }`}>
                        {option}
                        {optIndex === q.correctAnswer && (
                          <span className="ml-2 text-green-600">✓ Correct</span>
                        )}
                        {optIndex === answers[index] && optIndex !== q.correctAnswer && (
                          <span className="ml-2 text-red-600">✗ Your answer</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleBackToQuizzes}
              className="bg-sakhi-500 hover:bg-sakhi-600"
            >
              Back to All Quizzes
            </Button>
          </div>
        </div>
      );
    }
    
    const question = currentQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
    
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {currentQuiz.questions.length}
            </span>
            <span className="text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        
        <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-base cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        
        <div className="mt-8 flex justify-between">
          <Button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="bg-sakhi-500 hover:bg-sakhi-600"
          >
            {currentQuestion === currentQuiz.questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Health Knowledge Quizzes</h1>
          <p className="text-lg text-muted-foreground">
            Test your knowledge about various aspects of women's health and wellness.
          </p>
        </div>

        {!activeQuiz ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">{quiz.title}</h2>
                    <p className="text-muted-foreground">{quiz.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {quiz.questions.length} questions
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      ~{quiz.questions.length * 2} minutes
                    </div>
                  </div>
                  <Button
                    onClick={() => handleStartQuiz(quiz.id)}
                    className="w-full bg-sakhi-500 hover:bg-sakhi-600 mt-6"
                  >
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              {renderActiveQuiz()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
