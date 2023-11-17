/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      gap: {
        '4': '1rem', 
        '8': '2rem', 
      },
      colors: {
        "dark": "#1E293B",
        "secondary": "#64748B",
        "bg-dark": "#0F172A",
        "gray-300": "#DDE0E5",
        "gray-100": "#F9FAFB",
        "gray-400": "#CED4DA",
        "gray-200": "#E0E1E2",
        "bg-light": "rgba(255, 255, 255, 0.20)",
        "border-rgba": "rgba(255, 255, 255, 0.45)",
        "white-100":"#fff"
      },
      gap: {
        '6': '1.5rem', 
      },
    },
    plugins: [],
  }
}
