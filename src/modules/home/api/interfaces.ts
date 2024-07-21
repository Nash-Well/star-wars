import { Gender } from '~modules/common'

export interface ICharacter {
	birth_year: string
	eye_color: string
	films: string[]
	gender: Gender
	hair_color: string
	height: string
	homeworld: string
	mass: string
	name: string
	skin_color: string
	created: string
	edited: string
	species: string[]
	starships: string[]
	url: string
	vehicles: string[]
}

export interface IPlanet {
	name: string
	rotation_period: string
	orbital_period: string
	diameter: string
	climate: string
	gravity: string
	terrain: string
	surface_water: string
	population: string
}
