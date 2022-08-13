// Import global stylesheets
import '../src/stylesheets/index.css';
import '../src/containers/App/App.css';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default parameters;
