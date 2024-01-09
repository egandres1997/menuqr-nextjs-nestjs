import 'react-perfect-scrollbar/dist/css/styles.css';

import ThemeRegistry from '@/core/theme/theme.registry';
import QueryClientProvider from '@/providers/queryClient.provider';
import getDomain from '@/utils/getDomain';
import { prefetchTenant } from '@/infra/queries/getTenantByUrl.query';
import safelyRunningContext from '@/utils/safelyRunningContext';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import queryClient from '@/infra/query.client';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await prefetchTenant(getDomain())();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ThemeRegistry>{children}</ThemeRegistry>
          </HydrationBoundary>
        </QueryClientProvider>
      </body>
    </html>
  );
}
