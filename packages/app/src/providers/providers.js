import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'lib/auth';
import { queryClient } from 'lib/react-query';
import { Spinner } from 'components/loading';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes';

export const AppProvider = ({ children }) => {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <Router>{children}</Router>
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  );
};
