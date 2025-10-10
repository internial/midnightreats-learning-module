import React, { useState } from 'react';
import { ModuleData, QuizQuestion } from '../types';
import { CheckCircleIcon, XCircleIcon } from './Icons';

interface QuizProps {
  module: ModuleData;
  attemptsLeft: number;
  onQuizComplete: (score: number) => void;
  onRetry: () => void;
}

const Quiz: React.FC<QuizProps> = ({ module, attemptsLeft, onQuizComplete, onRetry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = module.quiz.questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.answer;
  const score = Math.round((correctAnswers / module.quiz.questions.length) * 100);
  const passed = score >= module.quiz.passingScore;

  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < module.quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      onQuizComplete(score);
    }
  };
  
  const getButtonClass = (option: string) => {
    if (!isAnswered) {
        return 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600';
    }
    if (option === currentQuestion.answer) {
        return 'bg-green-100 dark:bg-green-500/50 border-green-500';
    }
    if (option === selectedAnswer && option !== currentQuestion.answer) {
        return 'bg-red-100 dark:bg-red-500/50 border-red-500';
    }
    return 'bg-gray-200 dark:bg-gray-700 opacity-60 dark:opacity-50';
  };

  if (showResults) {
    return (
      <div className="text-center p-8 bg-brand-off-white dark:bg-brand-night rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quiz Results</h2>
        <p className={`text-5xl font-bold mb-2 ${passed ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
          {score}%
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {passed ? 'Congratulations, you passed!' : 'You did not pass this time.'}
        </p>
        {!passed && attemptsLeft > 0 && (
          <p className="text-yellow-600 dark:text-yellow-400 mb-6">You have {attemptsLeft} {attemptsLeft === 1 ? 'attempt' : 'attempts'} remaining.</p>
        )}
        <div className="flex justify-center gap-4">
            {!passed && attemptsLeft > 0 && (
                 <button onClick={onRetry} className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Retry Quiz
                </button>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Close this module to return to the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-brand-off-white dark:bg-brand-night rounded-lg text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-blue">Module Quiz</h2>
        <p className="text-gray-500 dark:text-gray-400">Question {currentQuestionIndex + 1} of {module.quiz.questions.length}</p>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">{currentQuestion.question}</p>
      
      <div className="space-y-4">
        {(currentQuestion.options || ['True', 'False']).map(option => (
          <button
            key={option}
            onClick={() => !isAnswered && setSelectedAnswer(option)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 border-transparent transition-all duration-300 ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'} ${selectedAnswer === option ? 'border-brand-blue' : ''} ${isAnswered ? getButtonClass(option) : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg flex items-start gap-4 ${isCorrect ? 'bg-green-50 dark:bg-green-900/50' : 'bg-red-50 dark:bg-red-900/50'}`}>
          {isCorrect ? <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" /> : <XCircleIcon className="h-6 w-6 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />}
          <div>
            <p className={`font-bold ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect.'}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      <div className="mt-8 text-right">
        {isAnswered ? (
          <button onClick={handleNext} className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
            {currentQuestionIndex === module.quiz.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        ) : (
          <button onClick={handleAnswer} disabled={selectedAnswer === null} className="bg-gray-500 dark:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;