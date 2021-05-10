import React from "react";
import {Image, Text, View} from "react-native";
import styles from "../../App.css";
import HeaderApp from "../components/header";
import logo from '../../assets/logo_nobo.png'
import {ScrollView} from "react-native";

let text = "  Bienvenue sur la réalisation du test technique pour l'entreprise Nobo par Augustin de Laubier ! \n\n" +
    " Pour aller sur la page de la liste des prestations. Il suffit de cliquer sur la page correspondante sur la barre de menu en bas !"

const Home = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <HeaderApp/>
                <View style={styles.mainContainer}>
                    <Image source={logo} style={{width: 500,height:200} }/>
                    <Text style={styles.textPresentation}>{text}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home
