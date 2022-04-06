import './App.css';
import Router from './routes/index.js';
import './assets/_custom.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './assets/fonts/muli.light.ttf';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

function App() {
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
