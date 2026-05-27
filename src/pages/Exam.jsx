import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Flag
} from 'lucide-react';

const Exam = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "Which of the following numbers is prime?",
      options: ["15", "21", "29", "33"],
      category: "Mathematics"
    },
    {
      id: 2,
      text: "If A is to B as C is to D, and A=2, B=4, C=3, then D=?",
      options: ["5", "6", "7", "8"],
      category: "Logical Reasoning"
    },
    {
      id: 3,
      text: "What is the next number in the sequence: 2, 6, 12, 20, ...?",
      options: ["28", "30", "32", "36"],
      category: "Quantitative"
    },
    // Mocking more questions
    ...Array(17).fill(0).map((_, i) => ({
      id: i + 4,
      text: `Mock Question ${i + 4}: Lorem ipsum dolor sit amet, consectetur adipiscing elit?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      category: "General"
    }))
  ];

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/result');
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-16 bg-card border-b border-border px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">AT</div>
          <div>
            <h1 className="text-lg font-bold text-primary leading-tight">General Aptitude Q1</h1>
            <p className="text-xs text-muted-foreground">30 Questions • 45 Minutes</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Time Remaining</p>
            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-destructive animate-pulse' : 'text-primary'}`}>
              <Clock size={20} />
              {formatTime(timeLeft)}
            </div>
          </div>
          <Button variant="success" onClick={() => navigate('/review')}>
            Review & Submit
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Question Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                {questions[currentQuestion].category}
              </span>
              <span className="text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</span>
            </div>

            <Card className="border-none shadow-md overflow-hidden bg-card">
              <CardContent className="p-8">
                <h2 className="text-xl font-medium text-foreground mb-8 leading-relaxed">
                  {questions[currentQuestion].text}
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(option)}
                      className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 group
                        ${answers[currentQuestion] === option 
                          ? 'border-primary bg-primary/5 text-primary shadow-sm' 
                          : 'border-border hover:border-primary/50 hover:bg-accent/50 text-muted-foreground'}`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold transition-colors
                        ${answers[currentQuestion] === option 
                          ? 'bg-primary border-primary text-white' 
                          : 'border-border group-hover:border-primary/50 group-hover:text-primary text-muted-foreground'}`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-medium text-lg">{option}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ChevronLeft size={18} /> Previous
              </Button>
              
              <Button variant="ghost" className="text-muted-foreground gap-2">
                <Flag size={18} /> Mark for Review
              </Button>

              <Button 
                onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                disabled={currentQuestion === questions.length - 1}
                className="gap-2"
              >
                Next <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </main>

        {/* Right: Question Navigation Panel */}
        <aside className="w-80 border-l border-border bg-card p-6 hidden lg:flex flex-col">
          <div className="mb-8">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              Question Palette
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuestion(i)}
                  className={`h-10 w-full rounded-md text-sm font-bold flex items-center justify-center border-2 transition-all
                    ${currentQuestion === i 
                      ? 'border-primary bg-primary text-white shadow-md scale-110 z-10' 
                      : answers[i] 
                        ? 'border-green-500 bg-green-50 text-green-600' 
                        : 'border-border bg-transparent text-muted-foreground hover:border-primary/30'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-6 border-t border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <div className="w-3 h-3 bg-green-500 rounded-full" /> Answered
              </span>
              <span className="font-bold text-foreground">{Object.keys(answers).length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <div className="w-3 h-3 bg-border rounded-full" /> Unanswered
              </span>
              <span className="font-bold text-foreground">{questions.length - Object.keys(answers).length}</span>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-2">Completion Progress</p>
              <ProgressBar value={Object.keys(answers).length} max={questions.length} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Exam;
