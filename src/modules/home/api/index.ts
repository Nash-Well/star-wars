import { api } from '~modules/common'
import { ICharacter, IPlanet } from './interfaces'

export * from './interfaces'

interface IApiResponse {
	next: string | null
	results: ICharacter[]
}

export const getCharacters = (page: number) => {
	return api.get<IApiResponse>(`/people/?page=${page}`)
}

export const getCharacter = (id: number) => {
	return api.get<ICharacter>(`/people/${id}`)
}

export const getPlanet = (id: number) => {
	return api.get<IPlanet>(`/planets/${id}`)
}
