import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'


// Styles
import styles from '../../styles/FoodItemStyles'


export default class FoodItem extends Component {
    render() {

        return (
            <TouchableOpacity onPress={() => alert('Food Item pressed')}>

                <View style={styles.foodItemView}>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}> 10$ </Text>
                    </View>

                    <View style={styles.foodImageView}>
                        <Image style={styles.foodImage} source={this.props.foodImage} />
                    </View>

                    <View style={styles.foodDescriptionView}>
                        <View style={styles.foodTextView}>
                            <Text style={styles.foodTitle}> {this.props.foodTitle} </Text>
                            <Text style={styles.foodDescription}> Some kind of descripotion of the food</Text>
                        </View>

                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}
