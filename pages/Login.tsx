import React, { useState } from 'react';
import { User, UserProgress } from '../types';
import { MODULES } from '../data/trainingData';
import { UserIcon, MailIcon, IdentificationIcon } from '../components/Icons';

interface LoginProps {
  onLogin: (user: User) => void;
  savedUser: User | null;
}

const initializeProgress = (): UserProgress => {
  const progress: UserProgress = {};
  MODULES.forEach((module, index) => {
    progress[module.id] = {
      status: index === 0 ? 'ready' : 'locked',
      score: null,
      attempts: 0,
    };
  });
  return progress;
};

const Login: React.FC<LoginProps> = ({ onLogin, savedUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && employeeId) {
      const newUser: User = {
        name,
        email,
        employeeId,
        progress: initializeProgress(),
        lastLogin: Date.now(),
      };
      onLogin(newUser);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light dark:bg-brand-dark p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <img src="https://storage.googleapis.com/aai-web-samples/prompt-images/51352e67-d867-4e94-a957-a36c92d54e4f.png" alt="Midnight Treats Logo" className="w-48 inline-block" />
            <p className="text-brand-blue mt-4 text-lg">New Hire Onboarding</p>
        </div>

        <div className="bg-brand-off-white dark:bg-brand-night shadow-2xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Create Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
            </div>
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Employee ID</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IdentificationIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required className="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-off-white dark:focus:ring-offset-brand-night focus:ring-brand-blue transition-colors">
              Start Training
            </button>
          </form>
          {savedUser && (
            <>
              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <button onClick={() => onLogin(savedUser)} className="w-full flex justify-center py-3 px-4 border border-brand-blue rounded-md shadow-sm text-sm font-medium text-brand-blue bg-transparent hover:bg-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-off-white dark:focus:ring-offset-brand-night focus:ring-brand-blue transition-colors">
                Continue as {savedUser.name}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;