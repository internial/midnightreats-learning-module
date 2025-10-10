import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { User } from './types';
import { MODULES } from './data/trainingData';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ModuleViewer from './pages/ModuleViewer';
import Certificate from './pages/Certificate';

type View = 'login' | 'dashboard' | 'module' | 'certificate';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [user, setUser] = useLocalStorage<User | null>('midnight-treats-user', null);
  const [theme, setTheme] = useLocalStorage<Theme>('midnight-treats-theme', 'dark');
  const [view, setView] = useState<View>('login');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (user) {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      if (now - user.lastLogin < oneDay) {
        setView('dashboard');
      } else {
        // User data exists but is old, show login with "continue" option
        setView('login');
      }
    } else {
      setView('login');
    }
  }, []);

  const handleLogin = (loggedInUser: User) => {
    const userWithLoginTime = { ...loggedInUser, lastLogin: Date.now() };
    setUser(userWithLoginTime);
    setView('dashboard');
  };

  const handleLogout = () => {
    // We keep user data in local storage for the "continue" feature
    // but clear the current user state to force login screen
    setUser(prev => prev ? { ...prev, lastLogin: 0 } : null);
    setView('login');
  };

  const handleSelectModule = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setView('module');
  };
  
  const handleUpdateProgress = (updatedUser: User) => {
      setUser(updatedUser);
  };
  
  const renderView = () => {
    switch (view) {
      case 'dashboard':
        if (!user) return <Login onLogin={handleLogin} savedUser={user} />;
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
            setView('dashboard');
            return null;
        }
        return <ModuleViewer 
                  user={user} 
                  module={activeModule} 
                  onBack={() => setView('dashboard')} 
                  onUpdateProgress={handleUpdateProgress}
               />;
      
      case 'certificate':
        if (!user) return <Login onLogin={handleLogin} savedUser={user} />;
        return <Certificate user={user} onBack={() => setView('dashboard')} />;

      case 'login':
      default:
        return <Login onLogin={handleLogin} savedUser={user} />;
    }
  };

  return <div className="font-sans">{renderView()}</div>;
};

export default App;