import React from "react";
import {Text, View} from "react-native";
import styles from "../../App.css";

let text = " Bienvenue sur la réalisation du test technique pour l'netreprise Nobo par Augustin de Laubier ! \n" +
    "Pour aller sur la page de la liste des prestations. Il suffit de cliquer sur la page correspondante sur la barre de mnu en bas !"

const Home = () => {
    return(
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

export default Home
