import React from 'react';
import { ModuleData, ModuleStatus } from '../types';
import { CheckCircleIcon, LockClosedIcon, PlayIcon } from './Icons';

interface ModuleCardProps {
  module: ModuleData;
  status: ModuleStatus;
  score: number | null;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, status, score, onClick }) => {
  const isLocked = status === 'locked';

  const statusIndicator = () => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <CheckCircleIcon className="h-6 w-6" />
            <span className="font-bold">Completed | {score}%</span>
          </div>
        );
      case 'ready':
        return (
          <div className="flex items-center gap-2 text-brand-blue">
            <PlayIcon className="h-6 w-6" />
            <span className="font-bold">Start Module</span>
          </div>
        );
      case 'locked':
      default:
        return (
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <LockClosedIcon className="h-6 w-6" />
            <span className="font-bold">Locked</span>
          </div>
        );
    }
  };
  
  const cardClasses = `
    bg-brand-off-white dark:bg-brand-night rounded-xl p-6 flex flex-col justify-between h-full
    transition-all duration-300 ease-in-out transform shadow-md dark:shadow-none
    ${isLocked 
      ? 'opacity-60 cursor-not-allowed' 
      : 'hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/20 dark:hover:shadow-brand-blue/10 cursor-pointer'}
  `;

  return (
    <div className={cardClasses} onClick={!isLocked ? onClick : undefined}>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{module.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{module.description}</p>
      </div>
      <div className="mt-6">
        {statusIndicator()}
      </div>
    </div>
  );
};

export default ModuleCard;