import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// Styles
import styles from '../../styles/FoodScreenStyle'

import HeaderFood from '../components/HeaderFood';


export default class FoodScreen extends Component {
    render() {
        return (
            <View>
                <HeaderFood />
            </View>
        )
    }
}
