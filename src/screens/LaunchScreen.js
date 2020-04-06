import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'


// Styles
import styles from '../../styles/LaunchScreenStyle'
import HeaderLanding from '../components/HeaderLanding';
import PromoFoodItem from '../components/PromoFoodItem';


let burgerImage = require('../assets/images/burger.jpg');
let porkImage = require('../assets/images/pork.jpg');
let pizzaImage = require('../assets/images/pizza.jpg');


export default class LaunchScreen extends Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <HeaderLanding />
                <ScrollView style={styles.scrollStyle}>

                    <PromoFoodItem
                        navigation={navigate}
                        image={burgerImage}
                        foodTitle={'BBQ'}
                        text={'BURGER'} />

                    <PromoFoodItem
                        navigation={navigate}
                        image={porkImage}
                        text={'PORK'} />

                    <PromoFoodItem
                        navigation={navigate}
                        image={pizzaImage}
                        text={'PIZZA'} />
                </ScrollView>
            </View>
        )
    }
}
