import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static instance: Storage;

  private constructor() {}

  static getInstance() {
    if (Storage.instance) return Storage.instance;
    return (Storage.instance = new Storage());
  }

	async set(
		key: string,
		value: string | Date | Record<string, unknown>,
	): Promise<any> {
		return await AsyncStorage.setItem(key, JSON.stringify(value));
	}

	async get(key: string): Promise<any> {
		const value = await AsyncStorage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
		return null;
	}

	async del(key: string): Promise<any> {
		return await AsyncStorage.removeItem(key);
	}
}

export const storage = Storage.getInstance();
