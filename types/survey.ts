export interface SurveyAnswer {
  // ご利用状況
  usageScene: string;
  orderMethod: string;
  // デリバリー品質
  deliveryTime: string;
  deliveryStaff: string;
  deliveryCondition: string;
  // お弁当品質
  bentoAppearance: string;
  bentoTaste: string;
  bentoRice: string;
  bentoVolume: string;
  bentoWarmth: string;
  // 総評
  recommendation: string;
  comments: string;
  submittedAt: string;
}

export interface SurveyFormState {
  // ご利用状況
  usageScene: string;
  orderMethod: string;
  // デリバリー品質
  deliveryTime: string;
  deliveryStaff: string;
  deliveryCondition: string;
  // お弁当品質
  bentoAppearance: string;
  bentoTaste: string;
  bentoRice: string;
  bentoVolume: string;
  bentoWarmth: string; // 任意（該当なし含む）
  // 総評
  recommendation: string;
  comments: string;
}

export type SurveyFormErrors = Partial<Record<keyof SurveyFormState, string>>;
