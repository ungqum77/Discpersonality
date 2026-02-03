
export type DISCType = 'D' | 'I' | 'S' | 'C';
export type AgeGroup = '10s' | '20s' | '30s' | '40s' | '50s' | '60s';
export type Gender = 'F' | 'M' | 'O'; // Female, Male, Other/None

export interface Answer {
  text: string;
  type: DISCType;
}

export interface Question {
  id: number;
  category: string;
  target_age_min: number;
  target_age_max: number;
  question: string;
  options: Answer[];
}

export interface ResultContent {
  type: string;
  base_name: string;
  titles: string[];
  summaries: string[];
  famous_people_pool: string[];
  advice_list: string[];
  lucky_items: string[];
  color?: string;
}

export type TestMode = {
  id: 'CORE' | 'DEEP' | 'FULL';
  count: number;
  label: string;
  branding: string;
  time: string;
  recommended?: boolean;
};

export type AppState = 'HOME' | 'GENDER_SELECT' | 'AGE_SELECT' | 'MODE_SELECT' | 'QUIZ' | 'RESULT';
