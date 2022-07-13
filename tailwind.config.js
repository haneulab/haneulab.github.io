module.exports = {
  content: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // light themed
        'light-primary': '#F9EBC8',
        'light-secondary': '#FEFBE7',
        'light-green': '#DAE5D0',
        'light-blue': '#A0BCC2',
        // dark themed
        'dark-primary': '#303841',
        'dark-secondary': '#3A4750',
        'dark-light': '#EEEEEE',
        'dark-blue': '#00ADB5',
      },
    },
  },
  plugins: [],
};
