import React from 'react'

import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

import { Root } from '~modules/root'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		},
	},
})

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<NavigationContainer>
				<QueryClientProvider client={queryClient}>
					<PaperProvider theme={DefaultTheme}>
						<Root />
					</PaperProvider>
				</QueryClientProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
