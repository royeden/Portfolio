import { useState } from 'react';

function useToggle(
  initialState = false
): [boolean, () => void, (arg0: boolean) => void] {
  const [state, setState] = useState(initialState);

  function toggleState(): void {
    setState(prevState => !prevState);
  }

  function overrideState(override: boolean): void {
    setState(override);
  }

  return [state, toggleState, overrideState];
}

export default useToggle;
