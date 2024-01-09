// ** React Imports
import { createContext, useState, ReactNode } from 'react';

// ** ThemeConfig Import
import themeConfig from '@/configs/themeConfig';

export type Settings = {
  toastPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

interface SettingsProviderProps {
  children: ReactNode;
  pageSettings?: Settings | void;
}

const initialSettings: Settings = {
  toastPosition: themeConfig.toastPosition,
};

// set settings in localStorage
const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings);

  delete initSettings.toastPosition;
  window.localStorage.setItem('settings', JSON.stringify(initSettings));
};

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updatedSettings: Settings) => {
    storeSettings(updatedSettings);
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
