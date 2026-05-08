export const hospitalConfig = {
  // 病院名・ヘッダー表示
  hospitalName: process.env.EXPO_PUBLIC_HOSPITAL_NAME || 'テンプレート病院',
  
  // デザイン設定
  primaryColor: process.env.EXPO_PUBLIC_PRIMARY_COLOR || '#5E969E',
  accentColor: process.env.EXPO_PUBLIC_ACCENT_COLOR || '#8EB8BC',
  
  // バナーテキスト
  bannerTitle: process.env.EXPO_PUBLIC_BANNER_TITLE || '患者さまアンケート',
  bannerDescription: process.env.EXPO_PUBLIC_BANNER_DESC || 'より良い医療サービスの提供のため、\n率直なご意見をお聞かせください',
  
  // バックエンド設定
  gasUrl: process.env.EXPO_PUBLIC_GAS_URL || '',
  googleReviewUrl: process.env.EXPO_PUBLIC_GOOGLE_REVIEW_URL || '',
  
  // 画像・アイコン
  logoUrl: process.env.EXPO_PUBLIC_LOGO_URL || '',
  headerIcon: 'heart', // Ioniconsのアイコン名
};
