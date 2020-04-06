import { StyleSheet, Platform } from 'react-native'
import { Metrics, ApplicationStyles } from '../Themes/'

export default StyleSheet.create({
    headerContainer: {
        height: Platform.OS === 'ios' ? '10%' : '7%',
        flex: 1,
        zIndex: 5
    },
    headerStyle: {
        backgroundColor: 'orange',
    },
    iconStyle: {
        color: 'white',
        fontSize: 30
    },
    titleText: {
        textAlign: 'center',
        fontSize: 21,
        fontStyle: "italic",
        fontWeight: '400',
        color: 'white'
    },
    bodyStyle: {
        textAlign: 'center',
    },
})
