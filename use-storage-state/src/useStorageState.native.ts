import { GenericStorage, storage as Storage } from "./storage";
import { UseStorageStateProps, UseStorageStateReturn } from "types";
import { useCallback, useEffect, useState } from "react";

const getKeyValue = async (
  storage: GenericStorage,
  key: any,
  initialValue: any,
  setValue: (arg: any) => any
): Promise<void> => {
  try {
    const item = await storage.get(key);
    setValue(item ?? initialValue);
  } catch (error) {
    return initialValue;
  }
};

function useFetch<T>(
  storage: GenericStorage,
  key: any,
  initialValue: any
): any {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    getKeyValue(storage, key, initialValue, setValue);
  }, []);

  return value;
}

export function useStorageState<T>({
  storage = Storage,
  key,
  initialValue,
}: UseStorageStateProps): UseStorageStateReturn<T> {
  const fetchValue = useFetch<T>(storage, key, initialValue);
  const [storedValue, setStoredValue] = useState(fetchValue);

  useEffect(() => {
    setStoredValue(fetchValue);
  }, [fetchValue]);

  const setValue = useCallback(
    (value: (arg0: T) => T) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        storage.set(key, valueToStore);
      } catch (error) {
        console.log(error);
      }
    },
    [key, storage, storedValue]
  );

  return [storedValue || initialValue, setValue];
}
