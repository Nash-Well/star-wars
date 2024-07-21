import React, { FC, useRef } from 'react'

import { Icon, useTheme } from 'react-native-paper'

import {
	Row,
	Txt,
	Font,
	extractIDFromURL,
	useLocalStatistic,
} from '~modules/common'
import { StyleSheet, TouchableOpacity } from 'react-native'

import AwesomeIcons from 'react-native-vector-icons/FontAwesome'

import { ICharacter } from '~modules/home/api/interfaces'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { useNavigation } from '@react-navigation/native'
import { UserRouteKey, UserStackNavigation } from '~modules/root/typing'

interface CharacterItemProps {
	character: ICharacter
}

export const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
	const { colors } = useTheme()
	const styles = characterItemStyles(colors)

	const characterID = useRef(extractIDFromURL(character.url)).current
	const [exist, handleLike] = useLocalStatistic(state => [
		state.characterExist,
		state.appendCharacter,
	])

	const navigation = useNavigation<UserStackNavigation>()

	const handleMoreInfo = () =>
		navigation.navigate(UserRouteKey.Info, {
			id: characterID,
		})

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={styles.container}
			onPress={handleMoreInfo}>
			<Row gap={5} justify="space-between">
				<Txt
					mod="lg"
					style={{ flex: 1 }}
					color={colors.scrim}
					font={Font.Inter700}
					numberOfLines={1}>
					{character.name}
				</Txt>

				<Row gap={10}>
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={() =>
							handleLike({
								id: characterID,
								gender: character.gender,
							})
						}>
						<Icon
							size={22}
							color="red"
							source={
								exist(characterID) ? 'heart' : 'heart-outline'
							}
						/>
					</TouchableOpacity>

					{['male', 'female'].includes(character.gender) ? (
						<AwesomeIcons
							name={character.gender}
							color={
								character.gender == 'female'
									? colors.error
									: 'blue'
							}
							size={22}
						/>
					) : (
						<AwesomeIcons
							name="tint"
							color={colors.scrim}
							size={22}
						/>
					)}
				</Row>
			</Row>

			<Row gap={5} justify="space-between">
				<Txt
					mod="md"
					numberOfLines={1}
					style={{ flex: 1 }}
					color={colors.scrim}>
					Mass: {character.mass}
				</Txt>

				<Txt
					mod="md"
					numberOfLines={1}
					style={{ flex: 1, textAlign: 'right' }}
					color={colors.scrim}>
					Height: {character.height}
				</Txt>
			</Row>

			<Txt
				mod="sm"
				color={colors.scrim}
				font={Font.Inter300}
				style={{ alignSelf: 'flex-end' }}>
				Birth year: {character.birth_year}
			</Txt>
		</TouchableOpacity>
	)
}

const characterItemStyles = (theme: MD3Colors) =>
	StyleSheet.create({
		container: {
			padding: 15,
			borderRadius: 10,
			rowGap: 10,
			backgroundColor: theme.surfaceVariant,
		},
	})
