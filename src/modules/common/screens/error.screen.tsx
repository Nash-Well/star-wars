import React, { FC } from 'react'

import { Txt } from '../components'
import { View, Image, Dimensions, StyleSheet } from 'react-native'

import { MD3Colors } from 'react-native-paper/lib/typescript/types'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

interface ErrorScreenProps {
	colors: MD3Colors
}

export const ErrorScreen: FC<ErrorScreenProps> = ({ colors }) => {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require('~assets/images/error.jpg')}
			/>
			<Txt mod="lg" color={colors.scrim} style={{ textAlign: 'center' }}>
				Unexpected error ocurred an app work. Please try again later.
			</Txt>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		rowGap: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	image: {
		width: SCREEN_WIDTH * 0.8,
		height: SCREEN_HEIGHT * 0.25,
	},
})
