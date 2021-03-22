import { GenericStorage } from "./storage";

export type UseStorageStateReturn<T> = [_: T, _: (value: (arg0: T) => T) => void];
export interface UseStorageStateProps {
  storage?: GenericStorage;
  key: string;
  initialValue: any;
}
