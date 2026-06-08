export interface SurveyAnswer {
  taste: string;
  submittedAt: string;
}

export interface SurveyFormState {
  taste: string;
}

export type SurveyFormErrors = Partial<Record<keyof SurveyFormState, string>>;
