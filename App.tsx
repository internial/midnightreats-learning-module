import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { User } from './types';
import { MODULES } from './data/trainingData';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ModuleViewer from './pages/ModuleViewer';
import Certificate from './pages/Certificate';

// Defines the possible views/pages in the application.
type View = 'login' | 'dashboard' | 'module' | 'certificate';
// Defines the possible color themes.
type Theme = 'light' | 'dark';

/**
 * The root component of the application.
 * It manages the current user session, theme, and view state (routing).
 */
const App: React.FC = () => {
  // State management using the custom useLocalStorage hook to persist data
  const [user, setUser] = useLocalStorage<User | null>('midnight-treats-user', null);
  const [theme, setTheme] = useLocalStorage<Theme>('midnight-treats-theme', 'dark');
  
  // State for controlling which view is currently displayed
  const [view, setView] = useState<View>('login');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  // Effect to apply the dark/light theme class to the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Effect to determine the initial view on app load
  useEffect(() => {
    if (user) {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      // If the user was last active within 24 hours, go to the dashboard.
      if (now - user.lastLogin < oneDay) {
        setView('dashboard');
      } else {
        // Otherwise, show the login screen with a "Continue as" option.
        setView('login');
      }
    } else {
      // If no user data, show the login screen.
      setView('login');
    }
  }, []); // Runs only once on component mount

  /** Handles user login, saves user data, and navigates to the dashboard. */
  const handleLogin = (loggedInUser: User) => {
    const userWithLoginTime = { ...loggedInUser, lastLogin: Date.now() };
    setUser(userWithLoginTime);
    setView('dashboard');
  };

  /** Handles user logout by resetting the last login time and navigating to the login screen. */
  const handleLogout = () => {
    // Keep user data for the "Continue as" feature but expire the session.
    setUser(prev => prev ? { ...prev, lastLogin: 0 } : null);
    setView('login');
  };

  /** Sets the active module and navigates to the module viewer. */
  const handleSelectModule = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setView('module');
  };
  
  /** Updates the user object in state and localStorage. */
  const handleUpdateProgress = (updatedUser: User) => {
      setUser(updatedUser);
  };
  
  /**
   * Renders the current view based on the `view` state variable.
   * This acts as a simple router.
   */
  const renderView = () => {
    switch (view) {
      case 'dashboard':
        if (!user) return <Login onLogin={handleLogin} savedUser={user} theme={theme} setTheme={setTheme} />;
        return <Dashboard 
                  user={user} 
                  onSelectModule={handleSelectModule} 
                  onLogout={handleLogout}
                  onViewCertificate={() => setView('certificate')}
                  theme={theme}
                  setTheme={setTheme}
                />;
      
      case 'module':
        const activeModule = MODULES.find(m => m.id === activeModuleId);
        if (!user || !activeModule) {
            // Fallback to dashboard if user or module is not found
            setView('dashboard');
            return null;
        }
        return <ModuleViewer 
                  user={user} 
                  module={activeModule} 
                  onBack={() => setView('dashboard')} 
                  onUpdateProgress={handleUpdateProgress}
                  onSelectModule={handleSelectModule}
               />;
      
      case 'certificate':
        if (!user) return <Login onLogin={handleLogin} savedUser={user} theme={theme} setTheme={setTheme} />;
        return <Certificate user={user} onBack={() => setView('dashboard')} />;

      case 'login':
      default:
        return <Login onLogin={handleLogin} savedUser={user} theme={theme} setTheme={setTheme} />;
    }
  };

  return <div className="font-sans">{renderView()}</div>;
};

export default App;
