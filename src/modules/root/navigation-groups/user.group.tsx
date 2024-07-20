import React from 'react'

import { HomeScreen, InfoScreen } from '~modules/home'

import { UserRouteKey, UserParamStack } from '../typing'

import { createStackNavigator } from '@react-navigation/stack'

const UserStack = createStackNavigator<UserParamStack>()

export const UserStackGroup = () => {
	return (
		<UserStack.Navigator screenOptions={{ headerShown: false }}>
			<UserStack.Screen name={UserRouteKey.Home} component={HomeScreen} />
			<UserStack.Screen name={UserRouteKey.Info} component={InfoScreen} />
		</UserStack.Navigator>
	)
}
