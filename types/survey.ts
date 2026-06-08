export interface SurveyAnswer {
  // ご利用状況
  usageScene: string;
  orderMethod: string;
  // お弁当評価
  taste: string;
  costPerformance: string;
  volume: string;
  // 総評
  comments: string;
  submittedAt: string;
}

export interface SurveyFormState {
  usageScene: string;
  orderMethod: string;
  taste: string;
  costPerformance: string;
  volume: string;
  comments: string;
}

export type SurveyFormErrors = Partial<Record<keyof SurveyFormState, string>>;
