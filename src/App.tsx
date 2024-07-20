import React from 'react'

import {
	initialWindowMetrics,
	SafeAreaProvider,
} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

import { Root } from '~modules/root'

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<NavigationContainer>
				<PaperProvider theme={DefaultTheme}>
					<Root />
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
