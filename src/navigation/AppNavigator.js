import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen'

import FoodScreen from '../screens/FoodScreen';

import styles from '../../styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
    {
        LaunchScreen: { screen: LaunchScreen },
        FoodScreen: { screen: FoodScreen},
    },
    {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'LaunchScreen',
        navigationOptions: {
            headerStyle: styles.header
        }
    })

export default createAppContainer(PrimaryNav)
