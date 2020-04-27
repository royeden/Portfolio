// THANK YOU https://usehooks.com/useMedia/ <3
// Adapted to NextJS
import useBrowser from './useBrowser';
import { useCallback, useEffect, useMemo, useState } from 'react';

type MediaQuery = {
  matches: unknown;
  addListener: (args0: () => void) => unknown;
  removeListener: (args0: () => void) => unknown;
};

type ReturnType = boolean | number | string;

function useMedia(
  queries: string[],
  values: Array<ReturnType>,
  defaultValue: ReturnType
): ReturnType {
  const hasWindowAccess: boolean = useBrowser();
  // Array containing a media query list for each query
  const mediaQueryLists: Array<MediaQuery | undefined> = useMemo(
    () =>
      queries.map(query =>
        hasWindowAccess ? window.matchMedia(query) : undefined
      ),
    [hasWindowAccess, queries]
  );

  // Function that gets value based on matching media query
  const getValue = useCallback((): ReturnType => {
    // Get index of first media query that matches
    const index: number | undefined = hasWindowAccess
      ? mediaQueryLists.findIndex(
          mediaQueryList => (mediaQueryList as MediaQuery).matches
        )
      : undefined;
    // Return related value or defaultValue if none
    if (hasWindowAccess) {
      return (values[index as number] as ReturnType) || defaultValue;
    } else {
      return defaultValue;
    }
  }, [defaultValue, hasWindowAccess, mediaQueryLists, values]);

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook callback is created once on mount).
    const handler = (): void => {
      setValue(getValue);
    };
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mediaQueryList =>
      (mediaQueryList as MediaQuery).addListener(handler)
    );
    // Remove listeners on cleanup
    return (): void => {
      mediaQueryLists.forEach(mediaQueryList =>
        (mediaQueryList as MediaQuery).removeListener(handler)
      );
    };
  }, [getValue, mediaQueryLists]);

  return value;
}

export default useMedia;
