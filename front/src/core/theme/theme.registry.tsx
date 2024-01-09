'use client';

import * as React from 'react';
import NextAppDirEmotionCacheProvider from './emotion-cache';
import {
  SettingsConsumer,
  SettingsProvider,
} from '@/core/context/settingsContext';
import ThemeComponent from '@/core/theme/theme.component';
import ReactHotToast from '@/core/styles/libs/react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {children}
                <ReactHotToast>
                  <Toaster
                    position={settings.toastPosition}
                    toastOptions={{ className: 'react-hot-toast' }}
                  />
                </ReactHotToast>
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
