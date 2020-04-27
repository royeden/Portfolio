import useBrowser from './useBrowser';
import useMedia from './useMedia';
import useStorage from './useStorage';
import { useCallback } from 'react';

const tempStorage = {
  getItem(): string | null {
    return null;
  },
  setItem(): void {
    return;
  },
  removeItem(): void {
    return;
  },
  length: 0,
  key(): string | null {
    return null;
  },
  clear(): void {
    return;
  }
};

function usePrefersDarkMode(): boolean {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false) as boolean;
}

function useDarkMode(): [boolean, () => void] {
  const hasWindowAccess = useBrowser();

  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useStorage(
    hasWindowAccess ? localStorage : tempStorage,
    'dark-mode-enabled',
    false
  );

  const toggleEnabledState = useCallback(() => {
    setEnabledState((state: any) => !Boolean(state));
  }, [setEnabledState]);

  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  // Return enabled state and setter
  return [enabled, toggleEnabledState];
}

export default useDarkMode;
