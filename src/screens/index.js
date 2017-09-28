import { Navigation } from 'react-native-navigation'

import Screen from './FormExample'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('react-native-skeleton.screen', () => Screen, store, Provider)
}
