'use client';

import { ReactNode } from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import queryClient from '@/infra/query.client';
import safelyRunningContext from '@/utils/safelyRunningContext';

const persister = createSyncStoragePersister({
  storage: safelyRunningContext({
    client: () => window.sessionStorage,
  }),
});

export type QueryClientProvider = {
  children: ReactNode;
};

export default function QueryClientProvider({ children }: QueryClientProvider) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  );
}
