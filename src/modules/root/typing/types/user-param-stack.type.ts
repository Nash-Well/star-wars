import { NavigationProp } from '@react-navigation/native'
import { UserRouteKey } from '~modules/root/typing'

export type UserParamStack = {
	[UserRouteKey.Home]: undefined
	[UserRouteKey.Info]: undefined
}

export type UserStackNavigation = NavigationProp<UserParamStack>
