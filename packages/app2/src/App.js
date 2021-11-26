import { AppProvider } from 'providers';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      {/* <Helmet /> */}
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
