export interface GenericStorage {
  get(key: string): any;
  set(key: string, value: any): void;
}
