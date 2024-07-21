import React, { FC } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

export type JustifyMode =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| undefined

interface RowProps {
	gap?: number
	style?: ViewStyle
	justify?: JustifyMode
	children: JSX.Element | JSX.Element[]
}

export const Row: FC<RowProps> = ({
	gap = 0,
	style = {},
	justify = 'flex-start',
	children,
}) => {
	return (
		<View
			style={[
				style,
				{ justifyContent: justify, columnGap: gap },
				styles.container,
			]}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
