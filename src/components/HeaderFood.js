import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Button } from 'native-base'


// Styles
import styles from '../../styles/HeaderScreenStyle'

export default class HeaderFood extends Component {
    render() {
        return (
            <View >

                <Header style={styles.headerStyle}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.iconStyle} name="ios-arrow-back" />
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Text style={styles.titleText} >Foodstagram</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert("Right btn pressed")}>
                            <Icon style={styles.iconStyle} type="FontAwesome5" name="shopping-cart" />
                        </Button>
                    </Right>

                </Header>
            </View>


        )
    }
}
