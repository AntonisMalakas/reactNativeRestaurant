import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../Themes/'

let height = Dimensions.get('window').height;

export default StyleSheet.create({
    foodItemView: {
        width: '100%',
        height: height / 4,
        paddingLeft: '5%',
        paddingTop: '5%',
    },
    priceView: {
        backgroundColor: '#8DBA25',
        height: '20%',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5,
    },
    priceText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400',
    },
    foodImageView: {
        width: '60%',
        height: '90%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '15%',
    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    foodDescriptionView: {
        width: '60%',
        height: '90%',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '35%',
        marginTop: '10%',
        borderRadius: 40,
        backgroundColor: '#ECECEC',

    },
    foodTextView: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        zIndex: 1,
        marginLeft: '40%',
        marginTop: '5%',

    },
    foodTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 18,
    },
    foodDescription: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 16
    },

})
