import { AppRouter } from './AppRouter';
import { AppNavBar } from './AppNavBar/AppNavBar';
import { AppContainer } from './AppContainer/AppContainer';

export const App = () => {
  return (
    <div>
      <AppContainer>
        <AppNavBar />
        <AppRouter />
      </AppContainer>
    </div>
  );
};
