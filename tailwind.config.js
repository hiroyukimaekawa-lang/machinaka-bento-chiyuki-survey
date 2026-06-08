/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8622A', // 深みのある暖色（仕出し弁当の高級感）
          light: '#FDF4EE',   // 薄い暖色背景
          dark: '#A34E20',    // ダーク版
        },
        surface: '#FFFFFF',
        background: '#FFFAF6',  // 温かみのあるオフホワイト
        accent: '#E8943A',      // アクセントオレンジ
        gold: '#D4A84B',        // 高級感を演出するゴールド
        text: {
          DEFAULT: '#2D1A0E',   // 深みのあるブラウン
          muted: '#7A5C45',     // ミュートブラウン
        },
        error: '#EF4444',
      },
      fontFamily: {
        noto: ['NotoSansJP'],
      },
    },
  },
  plugins: [],
};
