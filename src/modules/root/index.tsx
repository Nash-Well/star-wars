import React from 'react'

import { View } from 'react-native'

import { UserStackGroup } from './navigation-groups'

export const Root = () => {
	return (
		<View style={{ flex: 1 }}>
			<UserStackGroup />
		</View>
	)
}
