import React, { FC } from 'react'

import { useTheme } from 'react-native-paper'

import { Text, TextProps, TextStyle } from 'react-native'

import { Font } from '~modules/common/typing'

export type TxtModType = 's' | 'es' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const sizes = {
	s: 10,
	es: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20,
	xxl: 24,
}

const lineHeights = {
	s: 12,
	es: 14,
	sm: 16,
	md: 18,
	lg: 20,
	xl: 22,
	xxl: 26,
}

export interface TxtProps extends TextProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any
	style?: TextStyle | TextStyle[]
	color?: string
	mod?: keyof typeof sizes
	numberOfLines?: number
	font?: Font
}

export const Txt: FC<TxtProps> = ({
	children,
	style = {},
	mod = 'es',
	color,
	font = Font.Inter400,
	...props
}) => {
	const { colors } = useTheme()

	return (
		<Text
			{...props}
			style={[
				{
					color: color ? color : colors.secondary,
					fontFamily: font,
					fontSize: sizes[mod],
					lineHeight: lineHeights[mod],
				},
				style,
			]}>
			{children}
		</Text>
	)
}
