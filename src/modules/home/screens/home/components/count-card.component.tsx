import React, { FC } from 'react'

import { StyleSheet } from 'react-native'
import { Card, useTheme } from 'react-native-paper'

import { Font, Txt } from '~modules/common'

interface CountCardProps {
	space?: boolean
	title: string
	description: string
}

export const CountCard: FC<CountCardProps> = ({
	space = false,
	title,
	description,
}) => {
	const { colors } = useTheme()

	return (
		<Card style={{ flex: space ? 1 : 0 }}>
			<Card.Title title={title} titleStyle={styles.cardTitle} />
			<Card.Content>
				<Txt mod="md" color={colors.scrim}>
					{description}
				</Txt>
			</Card.Content>
		</Card>
	)
}

const styles = StyleSheet.create({
	cardTitle: {
		fontSize: 20,
		fontFamily: Font.Inter700,
	},
})
