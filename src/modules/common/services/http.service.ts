import axios from 'axios'
import { accessConfig } from '~config'

const axiosInstance = axios.create({
	baseURL: accessConfig.API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

interface Response<T> {
	data: T
}

type AsyncFunction<T> = () => Promise<Response<T>>

const request = async <T>(func: AsyncFunction<T>): Promise<T> => {
	try {
		const resp = await func()
		return resp.data
	} catch (e) {
		throw e
	}
}

export const api = {
	get: async <T>(url: string): Promise<T> => {
		return request<T>(() => axiosInstance.get<T>(url))
	},
}
