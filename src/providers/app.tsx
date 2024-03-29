import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';
import { Button, Flex, Heading, Spinner, Toast } from '@nayhoo/components';
import { CustomCursor } from '@/components/CustomCursor';

const ErrorFallback = () => {
  return (
    <Flex
      align="center"
      className="w-screen h-screen"
      direction="column"
      gap="4"
      justify="center"
      role="alert"
    >
      <Heading size="2">Uhhh ...</Heading>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </Flex>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Flex align="center" className="w-screen h-screen" justify="center">
          <Spinner />
        </Flex>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Toast>
            <QueryClientProvider client={queryClient}>
              {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}

              <CustomCursor />
              <Router>{children}</Router>

            </QueryClientProvider>
          </Toast>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
