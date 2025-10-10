
export type ModuleStatus = 'locked' | 'ready' | 'completed';

export interface UserProgress {
  [moduleId: string]: {
    status: ModuleStatus;
    score: number | null;
    attempts: number;
  };
}

export interface User {
  name: string;
  email: string;
  employeeId: string;
  progress: UserProgress;
  lastLogin: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export type ContentBlockType = 'heading' | 'paragraph' | 'list' | 'scenario' | 'clickToReveal';

export interface ContentBlock {
  type: ContentBlockType;
  content: string | string[] | { title: string; body: string };
}

export interface ModuleData {
  id: string;
  title: string;
  description: string;
  content: ContentBlock[];
  quiz: {
    questions: QuizQuestion[];
    passingScore: number;
    maxAttempts: number;
  };
}
