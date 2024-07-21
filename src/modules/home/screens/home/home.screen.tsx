import React, { useCallback, useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { ActivityIndicator, Searchbar, useTheme } from 'react-native-paper'

import { Header } from './atoms'
import { CountCard, CharacterItem } from './components'
import { Row, GenderOptions, useLocalStatistic } from '~modules/common'
import { View, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { getCharacters, ICharacter } from '~modules/home/api'

export const HomeScreen = () => {
	const { colors } = useTheme()

	const [genderCount, handleReset] = useLocalStatistic(state => [
		state.genderCount,
		state.resetCharacters,
	])

	const [currentPage, setCurrentPage] = useState(1)
	const [isFetchingMore, setIsFetchingMore] = useState(false)
	const [characters, setCharacters] = useState<ICharacter[]>([])

	const { data, isLoading } = useQuery({
		queryKey: ['characters', currentPage],
		queryFn: () => getCharacters(currentPage),
		onSuccess: data => {
			setCharacters(oldCharacters => [...oldCharacters, ...data.results])
			setIsFetchingMore(false)
		},
		onError: () => setIsFetchingMore(false),
	})

	useEffect(() => {
		if (data && currentPage === 1) setCharacters(data.results)
	}, [data])

	const handleEndReached = useCallback(() => {
		if (!data || !data.next || isFetchingMore) return

		setIsFetchingMore(true)
		setCurrentPage(oldPage => oldPage + 1)
	}, [data, isFetchingMore])

	return (
		<SafeAreaView
			style={[styles.container, { backgroundColor: colors.scrim }]}>
			<FlatList
				data={characters}
				ListHeaderComponent={() => (
					<>
						<Header
							titleColor={colors.scrim}
							handleReset={handleReset}
						/>

						<View style={styles.cardContainer}>
							<Row gap={15} style={styles.cardRowContainer}>
								<CountCard
									space
									title={genderCount(GenderOptions.Male)}
									description="Male"
								/>
								<CountCard
									space
									title={genderCount(GenderOptions.Female)}
									description="Female"
								/>
							</Row>
							<CountCard
								title={genderCount(GenderOptions.Other)}
								description="Other"
							/>

							<Searchbar
								value={''}
								autoComplete="off"
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="Search"
								onChangeText={v => console.log(v)}
							/>
						</View>
					</>
				)}
				renderItem={({ item }) => <CharacterItem character={item} />}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
				onEndReached={handleEndReached}
				onEndReachedThreshold={0.1}
				initialNumToRender={10}
				contentContainerStyle={{ rowGap: 15 }}
				bounces={false}
				ListFooterComponent={() =>
					isLoading || isFetchingMore ? (
						<ActivityIndicator
							size="large"
							color={colors.primary}
						/>
					) : null
				}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		padding: 10,
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
