import React from 'react'

import { Button, useTheme } from 'react-native-paper'

import { Font, Row, Txt } from '~modules/common'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CountCard } from './components'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'

export const HomeScreen = () => {
	const { colors } = useTheme()
	const styles = themeStyles(colors)

	const handleReset = () => {}

	return (
		<SafeAreaView style={styles.container}>
			<Row justify="space-between">
				<Txt mod="xl" font={Font.Inter600} color={colors.scrim}>
					Fans
				</Txt>
				<Button
					mode="outlined"
					textColor={'red'}
					onPress={handleReset}
					style={styles.buttonContainer}>
					<Txt mod="md" color="red">
						Clear fans
					</Txt>
				</Button>
			</Row>

			<View style={styles.cardContainer}>
				<Row gap={15} style={styles.cardRowContainer}>
					<CountCard space title="0" description="Male" />
					<CountCard space title="0" description="Female" />
				</Row>
				<CountCard title="0" description="Other" />
			</View>
		</SafeAreaView>
	)
}

const themeStyles = (theme: MD3Colors) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexGrow: 1,
			padding: 10,
			backgroundColor: theme.background,
		},
		buttonContainer: {
			borderRadius: 10,
			borderColor: 'red',
		},
		cardContainer: {
			flex: 1,
			rowGap: 15,
		},
		cardRowContainer: {
			marginTop: 20,
			justifyContent: 'space-between',
		},
	})
