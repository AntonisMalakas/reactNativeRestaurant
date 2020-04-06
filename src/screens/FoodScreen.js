import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// Styles
import styles from '../../styles/FoodScreenStyle'

import HeaderFood from '../components/HeaderFood';
import { Container, Content } from 'native-base';
import FoodItem from '../components/FoodItem';

export default class FoodScreen extends Component {
    render() {
        const { navigation } = this.props;
        let title = navigation.getParam('title', '');
        let foodImage = navigation.getParam('foodImage', '');
        let foodTitle = navigation.getParam('foodTitle', '');

        return (
            <Container>
                <HeaderFood navigation={this.props.navigation} />
                <Content style={styles.titleTextContent}>
                    <Text style={styles.titleText}>{title}</Text>
                    <FoodItem
                        foodTitle={foodTitle}
                        foodImage={foodImage} />

                </Content>
            </Container>
        )
    }
}
