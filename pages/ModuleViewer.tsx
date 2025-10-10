import React, { useState } from 'react';
import { ModuleData, User } from '../types';
import { renderContentBlock } from '../components/ContentBlocks';
import Quiz from '../components/Quiz';
import { ArrowLeftIcon } from '../components/Icons';

interface ModuleViewerProps {
  user: User;
  module: ModuleData;
  onBack: () => void;
  onUpdateProgress: (user: User) => void;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ user, module, onBack, onUpdateProgress }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const progress = user.progress[module.id];

  const handleQuizComplete = (score: number) => {
    const newUser = { ...user };
    const newProgress = { ...newUser.progress };
    const passed = score >= module.quiz.passingScore;

    if (passed) {
      newProgress[module.id] = { ...newProgress[module.id], status: 'completed', score };
      
      const currentModuleIndex = MODULES.findIndex(m => m.id === module.id);
      if (currentModuleIndex + 1 < MODULES.length) {
        const nextModuleId = MODULES[currentModuleIndex + 1].id;
        if (newProgress[nextModuleId].status === 'locked') {
          newProgress[nextModuleId] = { ...newProgress[nextModuleId], status: 'ready' };
        }
      }
    } else {
        newProgress[module.id] = { ...newProgress[module.id], score };
    }

    newUser.progress = newProgress;
    onUpdateProgress(newUser);
  };
  
  const handleRetry = () => {
      const newUser = { ...user };
      const newProgress = { ...newUser.progress };
      newProgress[module.id] = { ...newProgress[module.id], attempts: newProgress[module.id].attempts + 1 };
      newUser.progress = newProgress;
      onUpdateProgress(newUser);
      setShowQuiz(false); // This will hide the quiz...
      setTimeout(() => setShowQuiz(true), 0); // and then show it again to reset its state
  };
  
  const attemptsLeft = module.quiz.maxAttempts - progress.attempts;

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-gray-900 dark:text-white font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Dashboard
        </button>
        
        <div className="bg-brand-off-white dark:bg-brand-night rounded-xl p-6 sm:p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{module.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{module.description}</p>
          <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
          
          {!showQuiz ? (
            <>
              {module.content.map(renderContentBlock)}
              {progress.status !== 'completed' && attemptsLeft > 0 && (
                <div className="text-center mt-12">
                  <button onClick={() => setShowQuiz(true)} className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
                    Start Quiz
                  </button>
                   <p className="text-yellow-600 dark:text-yellow-400 mt-4 text-sm">You have {attemptsLeft} {attemptsLeft === 1 ? 'attempt' : 'attempts'} to pass.</p>
                </div>
              )}
               {progress.status === 'completed' && (
                 <div className="text-center mt-12 p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                    <p className="text-green-800 dark:text-green-300 font-bold">You have already completed this module with a score of {progress.score}%. Feel free to review the content.</p>
                </div>
              )}
               {attemptsLeft <= 0 && progress.status !== 'completed' && (
                 <div className="text-center mt-12 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                    <p className="text-red-800 dark:text-red-300 font-bold">You have no attempts left for this quiz. Please contact your manager.</p>
                </div>
              )}
            </>
          ) : (
            <Quiz 
              module={module}
              attemptsLeft={attemptsLeft}
              onQuizComplete={handleQuizComplete}
              onRetry={handleRetry}
            />
          )}
        </div>
      </div>
    </div>
  );
};
// Dummy MODULES to satisfy TS, real data is in data/trainingData
const MODULES = [
    {id: 'module-1'}, {id: 'module-2'}, {id: 'module-3'}
];
export default ModuleViewer;