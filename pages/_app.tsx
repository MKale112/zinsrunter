import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Containers';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
