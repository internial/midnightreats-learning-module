import React, { useState } from 'react';
import { User, UserProgress } from '../types';
import { MODULES } from '../data/trainingData';
import { UserIcon, MailIcon, ThemeToggle, LockClosedIcon } from '../components/Icons';

interface LoginProps {
  onLogin: (user: User) => void;
  savedUser: User | null;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

/**
 * Creates the initial progress object for a new user.
 * The first module is set to 'ready', and all others are 'locked'.
 * @returns {UserProgress} The initial user progress object.
 */
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

/**
 * Login page component.
 * Handles new user creation and allows returning users to continue their session.
 */
const Login: React.FC<LoginProps> = ({ onLogin, savedUser, theme, setTheme }) => {
  // State for user input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /** Handles the form submission to create and log in a new user. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== 'cookie1') {
      setError('Incorrect password. Please try again.');
      return;
    }

    if (name && email) {
      const newUser: User = {
        name,
        email,
        progress: initializeProgress(),
        lastLogin: Date.now(),
      };
      onLogin(newUser);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light dark:bg-brand-dark p-4 font-sans relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <img src="https://hang-prod-218598721.imgix.net/live/nft_loyalty_programs/images/000/000/492/normal/ee509_Logo_Brick.png" alt="Midnight Treats Logo" className="w-40 h-auto mx-auto" />
            <h1 className="text-brand-blue mt-4 text-3xl font-bold tracking-wider">New Hire Onboarding</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome to the team!</p>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
               {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400 text-center">{error}</p>}
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-off-white dark:focus:ring-offset-brand-night focus:ring-brand-blue transition-colors">
              Start Training
            </button>
          </form>
          {/* "Continue as" button appears if there's a recent user in localStorage */}
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