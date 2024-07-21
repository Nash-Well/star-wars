import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { Button } from 'react-native-paper'
import { Row, Txt, Font } from '~modules/common'

interface HeaderProps {
	titleColor: string
	handleReset: () => void
}

export const Header: FC<HeaderProps> = ({ titleColor, handleReset }) => {
	return (
		<Row justify="space-between">
			<Txt mod="xl" font={Font.Inter600} color={titleColor}>
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
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 10,
		borderColor: 'red',
	},
})
