import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainContainer: {
        marginVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily:'Roboto',
        fontSize: 22,
        margin:30,
    },
    textListBenefits: {
        fontFamily:'Roboto',
        fontSize: 20,
        marginBottom: 20
    },
    textDetailsBold: {
        fontFamily:'Roboto',
        fontSize: 16,
        fontWeight:'bold',
    },
    textDetails: {
        fontFamily:'Roboto',
        fontSize: 16,
    },
    button: {
        fontFamily:'Roboto',
        fontSize: 20,
        backgroundColor: '#ffb2b2',
        padding:10,
        borderRadius:10
    }
});

export default styles;
