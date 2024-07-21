import { NavigationProp } from '@react-navigation/native'
import { UserRouteKey } from '~modules/root/typing'

export type UserParamStack = {
	[UserRouteKey.Home]: undefined
	[UserRouteKey.Info]: { id: number }
}

export type UserStackNavigation = NavigationProp<UserParamStack>
