import AppRouter from './AppRouter/AppRouter';
import AppNavBar from './AppNavBar/AppNavBar';
import AppContainer from './AppContainer/AppContainer';

const App = () => {
  return (
    <AppContainer>
      <AppNavBar />
      <AppRouter />
    </AppContainer>
  );
};

export default App;
