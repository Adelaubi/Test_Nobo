import React from "react";
import {Text, View} from "react-native";
import styles from "../../App.css";
import HeaderApp from "../components/header";

let text = "  Bienvenue sur la réalisation du test technique pour l'entreprise Nobo par Augustin de Laubier ! \n\n" +
    "   Pour aller sur la page de la liste des prestations. Il suffit de cliquer sur la page correspondante sur la barre de mnu en bas !"

const Home = () => {
    return(
        <View style={styles.container}>
            <HeaderApp/>
            <View style={styles.mainContainer}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </View>
    )
}

export default Home
