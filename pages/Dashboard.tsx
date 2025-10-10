import React from 'react';
import { User } from '../types';
import { MODULES } from '../data/trainingData';
import ModuleCard from '../components/ModuleCard';
import { LogoutIcon, SunIcon, MoonIcon } from '../components/Icons';

interface DashboardProps {
  user: User;
  onSelectModule: (moduleId: string) => void;
  onLogout: () => void;
  onViewCertificate: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Avatar: React.FC<{ name: string }> = ({ name }) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return (
        <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
            {initials}
        </div>
    );
};

const ThemeToggle: React.FC<{ theme: 'light' | 'dark'; setTheme: (theme: 'light' | 'dark') => void; }> = ({ theme, setTheme }) => {
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue transition-colors">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>
    );
};


const Dashboard: React.FC<DashboardProps> = ({ user, onSelectModule, onLogout, onViewCertificate, theme, setTheme }) => {
  const completedModules = Object.values(user.progress).filter(p => p.status === 'completed').length;
  const totalModules = MODULES.length;
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  const allModulesCompleted = completedModules === totalModules;

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-gray-900 dark:text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Avatar name={user.name} />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Welcome, {user.name.split(' ')[0]}!</h1>
              <p className="text-gray-600 dark:text-gray-400">Your training dashboard</p>
            </div>
          </div>
           <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button onClick={onLogout} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <LogoutIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        <div className="bg-brand-off-white dark:bg-brand-night rounded-xl p-6 mb-8 shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Overall Progress</h2>
            <span className="text-lg font-bold text-brand-blue">{overallProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div className="bg-brand-blue h-4 rounded-full transition-all duration-500" style={{ width: `${overallProgress}%` }}></div>
          </div>
        </div>
        
        {allModulesCompleted && (
          <div className="bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-500 text-green-800 dark:text-green-300 rounded-xl p-6 mb-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="mb-4">You have successfully completed all training modules.</p>
            <button 
              onClick={onViewCertificate}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              View Your Certificate
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              status={user.progress[module.id].status}
              score={user.progress[module.id].score}
              onClick={() => onSelectModule(module.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;