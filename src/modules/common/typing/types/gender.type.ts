import { GenderOptions } from '../enums'

export type Gender =
	| GenderOptions.Male
	| GenderOptions.Female
	| GenderOptions.Other

export const defaultGenders = [GenderOptions.Male, GenderOptions.Female]
