import React from 'react'

import { StyleSheet, View } from 'react-native'

import { UserStackGroup } from './navigation-groups'

export const Root = () => {
	return (
		<View style={styles.container}>
			<UserStackGroup />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
