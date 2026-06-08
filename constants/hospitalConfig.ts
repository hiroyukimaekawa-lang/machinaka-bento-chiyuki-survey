export const hospitalConfig = {
  // 店舗名・ヘッダー表示
  hospitalName: process.env.EXPO_PUBLIC_HOSPITAL_NAME || '街中弁当 千行',

  // デザイン設定（暖色系・高級感）
  primaryColor: process.env.EXPO_PUBLIC_PRIMARY_COLOR || '#C8622A',
  accentColor: process.env.EXPO_PUBLIC_ACCENT_COLOR || '#E8943A',

  // バナーテキスト
  bannerTitle: process.env.EXPO_PUBLIC_BANNER_TITLE || 'お客様アンケート',
  bannerDescription:
    process.env.EXPO_PUBLIC_BANNER_DESC ||
    'より良いお弁当・配達サービスのため、\n率直なご意見をお聞かせください',

  // バックエンド設定
  gasUrl: process.env.EXPO_PUBLIC_GAS_URL || '',
  googleReviewUrl:
    process.env.EXPO_PUBLIC_GOOGLE_REVIEW_URL ||
    'https://www.google.com/maps/place//data=!4m3!3m2!1s0x6001214bc41412af:0x1ccd52182bb4bc2b!12e1?source=g.page.m._&laa=merchant-review-solicitation',

  // 画像・アイコン
  logoUrl: process.env.EXPO_PUBLIC_LOGO_URL || '',
  headerIcon: 'restaurant', // Ioniconsのアイコン名

  // クチコミ投稿のデフォルト定型文
  defaultReviewText:
    '街中弁当 千行さんのお弁当を注文しました！仕出しの高級感があり、お弁当も温かくてとても美味しかったです。また利用します。',
};
