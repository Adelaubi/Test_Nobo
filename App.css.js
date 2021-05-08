import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainContainer: {
        marginHorizontal:20,
        marginVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPresentation: {
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
        color:'#fafafa',
        fontSize: 20,
        backgroundColor: '#67cabf',
        padding:10,
        borderRadius:10
    }
});

export default styles;
