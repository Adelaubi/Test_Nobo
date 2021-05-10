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
        textAlign:'justify',
        fontSize: 22,
        margin:30,
    },
    textListBenefits: {
        fontSize: 20,
        marginBottom: 20
    },
    textDetailsBold: {
        fontSize: 16,
        fontWeight:'bold',
    },
    textDetails: {
        fontSize: 16,
    },
    button: {
        color:'#fafafa',
        fontSize: 20,
        backgroundColor: '#67cabf',
        padding:10,
        borderRadius:10
    }
});

export default styles;
