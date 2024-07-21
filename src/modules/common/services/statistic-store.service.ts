import { MMKV } from 'react-native-mmkv'
import { StateStorage } from 'zustand/middleware'

export const storage = new MMKV({
	id: 'user-storage',
})

export const statisticStore: StateStorage = {
	setItem: (key, value) => {
		return storage.set(key, value)
	},
	getItem: key => {
		const value = storage.getString(key)
		return value ?? null
	},
	removeItem: key => {
		return storage.delete(key)
	},
}
