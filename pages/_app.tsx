import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Layout } from '../components/Containers';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
