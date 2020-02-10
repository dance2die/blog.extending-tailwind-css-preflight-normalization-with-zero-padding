const fractions = [2, 4, 5, 6, 7, 8];
const height = fractions.reduce((acc, fraction) => {
  acc[`screen-1/${fraction}`] = `calc(100vh / ${fraction})`;
  return acc;
}, {});

module.exports = {
  theme: {
    extend: {
      height
    }
  },
  variants: {},
  plugins: []
};
