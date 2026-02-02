module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#1f4f43',
        greenSoft: '#2e6b5f',
        gold: '#d7b06d',
        bg: '#f4f6f7',
        card: '#ffffff',
        border: '#e5e7eb',
        grayText: '#6b7280',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.06), 0 10px 30px rgba(0,0,0,.05)',
      },
    },
  },
};
