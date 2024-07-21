import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { statisticStore } from '../services'
import { defaultGenders, Gender, GenderOptions } from '../typing'

export interface IStatistic {
	id: number
	gender: Gender
}

interface IActions {
	characterExist: (id: number) => boolean
	genderCount: (gender: Gender) => string
	appendCharacter: (character: IStatistic) => void
	resetCharacters: () => void
}

interface IStates {
	characters: IStatistic[]
}

export const useLocalStatistic = create<IActions & IStates>()(
	persist(
		(set, get) => ({
			characters: [],

			characterExist: (id: number) =>
				get().characters.some(character => character.id === id),

			genderCount: gender => {
				return get()
					.characters.filter(character => character.gender === gender)
					.length.toString()
			},

			appendCharacter: character => {
				set(state => {
					if (!defaultGenders.includes(character.gender)) {
						character.gender = GenderOptions.Other
					}

					const exist = state.characters.findIndex(
						char => char.id === character.id,
					)

					if (exist !== -1) {
						return {
							characters: state.characters.filter(
								char => char.id !== character.id,
							),
						}
					}

					return {
						characters: [...state.characters, character],
					}
				})
			},

			resetCharacters: () => {
				set({ characters: [] })
			},
		}),
		{
			name: 'local-storage',
			storage: createJSONStorage(() => statisticStore),
		},
	),
)
