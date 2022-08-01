// Adapted https://usehooks.com/useLocalStorage/
import { useCallback, useEffect, useState } from 'react';

import useBrowser from './useBrowser';

type StorableValue = boolean | object | string | undefined | null;

type StorableValues = Array<StorableValue> | StorableValue;

function useStorage(
  storage: Storage,
  key: string,
  initialValue: StorableValues
): [StorableValues, (args0: StorableValues) => void] {
  const hasWindowAccess: boolean = useBrowser();

  const setInitialState = useCallback(() => {
    try {
      // Get from local storage by key
      const item = storage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  }, [initialValue, key, storage]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(setInitialState);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: StorableValues): void => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        storage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    },
    [key, storage, storedValue]
  );

  useEffect(() => {
    if (hasWindowAccess) setValue(setInitialState);
  }, [hasWindowAccess, setInitialState, setValue]);

  return [storedValue, setValue];
}

export default useStorage;
