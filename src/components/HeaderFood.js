import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Button } from 'native-base'


// Styles
import styles from '../../styles/HeaderFoodScreenStyle'

export default class HeaderFood extends Component {
    render() {
        return (
            <View >

                <Header style={styles.headerStyle}>
                    <Left>
                        <Button transparent onPress={() => alert("back btn pressed")}>
                            <Icon style={styles.iconStyle} name="ios-arrow-back" />
                        </Button>

                    </Left>
                    <Body>
                        <Text>
                            asdsf
                    </Text>
                    </Body>
                    <Right>
                        <Text>
                            zndasjdh
                    </Text>
                    </Right>

                </Header>
            </View>


        )
    }
}
