import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  text: string;
  explanation: string;
  options: {
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Do you have irregular periods?",
    explanation: "Regular periods typically occur every 21-35 days. Irregular periods can be a key indicator of PCOS.",
    options: [
      { text: "No, my periods are regular (every 21-35 days)", score: 0 },
      { text: "Sometimes irregular (every 2-3 months)", score: 1 },
      { text: "Very irregular (less than 8-9 periods per year)", score: 2 }
    ]
  },
  {
    id: 2,
    text: "Do you experience excessive hair growth on face, chest, or back?",
    explanation: "This condition, known as hirsutism, is caused by elevated androgen levels common in PCOS.",
    options: [
      { text: "No excess hair growth", score: 0 },
      { text: "Mild excess hair growth", score: 1 },
      { text: "Significant excess hair growth", score: 2 }
    ]
  },
  {
    id: 3,
    text: "Have you experienced unexplained weight gain or difficulty losing weight?",
    explanation: "PCOS can affect how your body processes insulin, which can lead to weight gain.",
    options: [
      { text: "No weight changes", score: 0 },
      { text: "Slight weight gain or difficulty losing weight", score: 1 },
      { text: "Significant weight gain or very difficult to lose weight", score: 2 }
    ]
  },
  {
    id: 4,
    text: "Do you experience acne breakouts, especially during non-menstrual periods?",
    explanation: "Hormonal acne, particularly on the jawline and chin, can be a sign of hormonal imbalance.",
    options: [
      { text: "Rarely or never have acne", score: 0 },
      { text: "Occasional breakouts", score: 1 },
      { text: "Frequent or persistent acne", score: 2 }
    ]
  },
  {
    id: 5,
    text: "Do you experience fatigue or low energy levels?",
    explanation: "Hormonal imbalances and insulin resistance can contribute to fatigue.",
    options: [
      { text: "Rarely feel fatigued", score: 0 },
      { text: "Sometimes feel tired", score: 1 },
      { text: "Often feel exhausted", score: 2 }
    ]
  },
  {
    id: 6,
    text: "Have you noticed dark patches of skin, especially around neck or underarms?",
    explanation: "This condition, called acanthosis nigricans, can be related to insulin resistance.",
    options: [
      { text: "No skin darkening", score: 0 },
      { text: "Slight darkening in some areas", score: 1 },
      { text: "Noticeable dark patches", score: 2 }
    ]
  },
  {
    id: 7,
    text: "Do you experience mood swings or anxiety more than usual?",
    explanation: "Hormonal imbalances can affect mood and emotional well-being.",
    options: [
      { text: "Rarely experience mood changes", score: 0 },
      { text: "Occasional mood swings", score: 1 },
      { text: "Frequent mood swings or anxiety", score: 2 }
    ]
  },
  {
    id: 8,
    text: "Have you been diagnosed with or experience fertility issues?",
    explanation: "PCOS is one of the most common causes of infertility in women.",
    options: [
      { text: "No fertility issues", score: 0 },
      { text: "Not sure / Haven't tried to conceive", score: 1 },
      { text: "Yes, have experienced fertility issues", score: 2 }
    ]
  },
  {
    id: 9,
    text: "Do you have a family history of PCOS?",
    explanation: "PCOS can have a genetic component and run in families.",
    options: [
      { text: "No family history", score: 0 },
      { text: "Not sure", score: 1 },
      { text: "Yes, family history of PCOS", score: 2 }
    ]
  },
  {
    id: 10,
    text: "Have you noticed thinning hair or hair loss from your scalp?",
    explanation: "Hair loss (androgenic alopecia) can be caused by elevated androgen levels.",
    options: [
      { text: "No hair loss", score: 0 },
      { text: "Slight thinning", score: 1 },
      { text: "Noticeable hair loss", score: 2 }
    ]
  }
];

const PCOSTest = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [currentQuestion]: score });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = questions.length * 2;
    const percentage = (totalScore / maxPossibleScore) * 100;

    if (percentage < 30) {
      return {
        level: "Low Risk",
        color: "bg-green-500",
        message: "Your symptoms suggest a low risk of PCOS. However, if you have concerns, it's always good to consult with a healthcare provider.",
        recommendations: [
          "Continue monitoring your menstrual cycle",
          "Maintain a healthy lifestyle with regular exercise",
          "Consider a follow-up with your healthcare provider if symptoms change"
        ]
      };
    } else if (percentage < 60) {
      return {
        level: "Moderate Risk",
        color: "bg-yellow-500",
        message: "Your symptoms suggest a moderate risk of PCOS. We recommend scheduling a consultation with a healthcare provider for proper evaluation.",
        recommendations: [
          "Schedule a consultation with a healthcare provider",
          "Keep a symptom diary to track changes",
          "Consider lifestyle modifications to manage symptoms",
          "Learn more about PCOS through our educational resources"
        ]
      };
    } else {
      return {
        level: "High Risk",
        color: "bg-red-500",
        message: "Your symptoms suggest a high risk of PCOS. We strongly recommend scheduling a consultation with a healthcare provider for proper evaluation and treatment planning.",
        recommendations: [
          "Schedule an immediate consultation with a healthcare provider",
          "Get hormone level testing",
          "Consider an ultrasound examination",
          "Begin tracking your symptoms in detail",
          "Explore our PCOS management resources"
        ]
      };
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setStarted(false);
    setShowExplanation(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!started) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold gradient-heading">PCOS Risk Assessment</h2>
            <p className="text-muted-foreground">
              This screening tool helps identify potential PCOS symptoms. Answer a series of questions 
              about your health to assess your risk level.
            </p>
          </div>

          <Alert className="bg-sakhi-50 border-sakhi-200">
            <AlertDescription>
              This test is for screening purposes only and does not replace professional medical diagnosis. 
              PCOS can only be properly diagnosed through clinical examination, hormone tests, and ultrasound 
              by qualified healthcare providers.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="font-semibold">Before you begin:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The test takes approximately 5-7 minutes to complete</li>
              <li>Answer all questions honestly for the most accurate assessment</li>
              <li>You can go back to previous questions if needed</li>
              <li>Your responses are private and not stored</li>
            </ul>
          </div>

          <Button 
            onClick={() => setStarted(true)}
            className="w-full bg-sakhi-500 hover:bg-sakhi-600"
          >
            Start Assessment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {!showResults ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Question {currentQuestion + 1} of {questions.length}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium">{questions[currentQuestion].text}</p>
              <RadioGroup
                value={answers[currentQuestion]?.toString()}
                onValueChange={(value) => handleAnswer(Number(value))}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>

              {showExplanation && (
                <Alert className="bg-sakhi-50 mt-4">
                  <AlertDescription>
                    {questions[currentQuestion].explanation}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="bg-sakhi-500 hover:bg-sakhi-600"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Your PCOS Risk Assessment</h3>
              <div className={`inline-block px-4 py-2 rounded-full text-white ${calculateRisk().color}`}>
                {calculateRisk().level}
              </div>
            </div>

            <p className="text-center text-muted-foreground">
              {calculateRisk().message}
            </p>

            <div className="space-y-6">
              <div className="bg-sakhi-50 p-6 rounded-lg space-y-4">
                <h4 className="font-semibold">Recommended Next Steps:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {calculateRisk().recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              <Alert className="border-sakhi-200">
                <AlertDescription>
                  Remember: This assessment is not a diagnosis. Only a qualified healthcare provider 
                  can properly diagnose PCOS through clinical examination, blood tests, and ultrasound.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={restartTest} variant="outline" className="flex-1">
                  Take Test Again
                </Button>
                <Link to="/consultation" className="flex-1">
                  <Button className="w-full bg-sakhi-500 hover:bg-sakhi-600">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PCOSTest; 