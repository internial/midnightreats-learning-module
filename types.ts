

/** Defines the possible states for a training module. */
export type ModuleStatus = 'locked' | 'ready' | 'completed';

/** Represents a user's progress on all modules. */
export interface UserProgress {
  [moduleId: string]: {
    status: ModuleStatus;
    score: number | null;
    attempts: number;
  };
}

/** Represents the application user. */
export interface User {
  name: string;
  progress: UserProgress;
  lastLogin: number;
}

/** Represents a single question in a quiz. */
export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

/** Defines the types of content blocks available for module content. */
export type ContentBlockType = 'heading' | 'paragraph' | 'list' | 'scenario' | 'clickToReveal';

/** Represents a generic block of content within a module. */
export interface ContentBlock {
  type: ContentBlockType;
  content: string | string[] | { title: string; body: string };
}

/** Represents the entire structure of a single training module. */
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