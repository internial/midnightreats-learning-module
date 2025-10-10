import { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * A custom React hook that syncs a state value with `window.localStorage`.
 * @template T The type of the value to be stored.
 * @param {string} key The key to use in `localStorage`.
 * @param {T} initialValue The initial value to use if no value is found in `localStorage`.
 * @returns {[T, Dispatch<SetStateAction<T>>]} A stateful value and a function to update it, similar to `useState`.
 */
// FIX: Use imported Dispatch and SetStateAction types instead of the React.* namespace to resolve the error.
function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  // Get initial value from localStorage or use the provided initialValue.
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // useEffect to update localStorage whenever the state changes.
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;