import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTheme, Appbar } from 'react-native-paper'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import {
	Txt,
	Font,
	LoadingScreen,
	extractIDFromURL,
	useLocalStatistic,
} from '~modules/common'
import { View, ScrollView, StyleSheet } from 'react-native'

import { getCharacter, getPlanet, IPlanet } from '~modules/home/api'
import { UserParamStack, UserRouteKey } from '~modules/root/typing'

export const InfoScreen = () => {
	const {
		params: { id },
	} = useRoute<RouteProp<UserParamStack, UserRouteKey.Info>>()

	const { colors } = useTheme()
	const navigation = useNavigation()

	const [characters, characterExist, handleLike] = useLocalStatistic(
		state => [
			state.characters,
			state.characterExist,
			state.appendCharacter,
		],
	)

	const { data: character, isLoading: isCharacterLoading } = useQuery({
		queryKey: ['character', id],
		queryFn: () => getCharacter(id),
	})

	useEffect(() => {
		if (character) {
			navigation.setOptions({
				headerShown: true,
				header: () => (
					<Appbar.Header>
						<Appbar.BackAction
							onPress={() => navigation.goBack()}
						/>

						<Appbar.Content title={character.name} />

						<Appbar.Action
							icon={
								characterExist(id) ? 'heart' : 'heart-outline'
							}
							color="red"
							onPress={() =>
								handleLike({ id: id, gender: character.gender })
							}
						/>
					</Appbar.Header>
				),
			})
			setPlanetID(extractIDFromURL(character.homeworld))
		}
	}, [character, navigation, characters])

	const [planetID, setPlanetID] = useState<number | null>(null)

	const { data: planet, isLoading: isPlanetLoading } = useQuery<IPlanet>({
		queryKey: ['planet', planetID],
		queryFn: () => getPlanet(planetID),
		enabled: planetID !== null,
	})

	return !isCharacterLoading && !isPlanetLoading ? (
		<ScrollView
			bounces={false}
			contentContainerStyle={[
				styles.container,
				{ backgroundColor: colors.background },
			]}>
			<View style={{ rowGap: 10 }}>
				<Txt mod="xl" color={colors.scrim} font={Font.Inter600}>
					Information
				</Txt>

				<Txt mod="md" color={colors.scrim}>
					Birth year: {character.birth_year}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Eye color: {character.eye_color}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Gender: {character.gender}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Hair color: {character.hair_color}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Height: {character.height}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Mass: {character.mass}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Skin color: {character.skin_color}
				</Txt>
			</View>

			<View style={{ rowGap: 10 }}>
				<Txt mod="xl" color={colors.scrim} font={Font.Inter600}>
					HomeWorld
				</Txt>

				<Txt mod="md" color={colors.scrim}>
					Name: {planet.name}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Climate: {planet.climate}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Diameter: {planet.diameter}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Gravity: {planet.gravity}
				</Txt>
				<Txt mod="md" color={colors.scrim}>
					Orbital Period: {planet.orbital_period}
				</Txt>
			</View>
		</ScrollView>
	) : (
		<LoadingScreen />
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		rowGap: 15,
	},
})
