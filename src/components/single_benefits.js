import React, {useState} from "react"
import {View, Text, Modal, Pressable} from "react-native"
import styles from "../../App.css";
import {ScrollView} from "react-native";

const benefitsData = require('../../assets/list_benefits.json')
let textButtonHide = "Retour à la liste"
let textButtonShow = "Détails sur la prestation"

function findBenefit (idBenefit) {
    for (let i = 0; i < Object.keys(benefitsData).length; i++){
        if (benefitsData[i].prestation_id === idBenefit){
            return benefitsData[i]
        }
    }
    return undefined
}

function isCanceled(code){
    if(code === "0") return "Non annulée"
    return "Annulée"
}

function getRating(benefit){
    let listRating = []
    if(benefit.rating.ironing) {
        listRating.push(<Text style = {styles.textDetails}>{"Repassage :" + benefit.rating.ironing + "\n"}</Text>)
    }
    if(benefit.rating.cleaning) {
        listRating.push(<Text style = {styles.textDetails}>{"Menage : " + benefit.rating.cleaning + "\n"}</Text>)
    }
    if (listRating.length === 0) listRating.push(<Text style = {styles.textDetails}>{"Aucun\n"}</Text>)
    return listRating
}

const SingleBenefits = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const benefit = findBenefit(props.idBenefit)
    return(
            <View style={styles.mainContainer}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={isVisible}
                    onRequestClose={() => {
                        setIsVisible(!isVisible)
                    }}
                >
                    <ScrollView>
                        <View style={styles.mainContainer}>
                            <Text style={styles.textDetailsBold}>{"Statut : "}</Text><Text style = {styles.textDetails}>{isCanceled(benefit.canceled) + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Adresse : "}</Text><Text style = {styles.textDetails}>{benefit.address.street + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Ville: "}</Text><Text style = {styles.textDetails}>{benefit.address.city + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Code Postal : "}</Text><Text style = {styles.textDetails}>{benefit.address.zipcode + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Pays : "}</Text><Text style = {styles.textDetails}>{benefit.address.country + "\n\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Nom du Client ou de la Cliente:   "}</Text><Text style = {styles.textDetails}>{benefit.customer.lastname + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Prénom du Client ou de la Cliente:   "}</Text><Text style = {styles.textDetails}>{benefit.customer.firstname+ "\n\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Nom du Fournisseur:   "}</Text><Text style = {styles.textDetails}>{benefit.provider.lastname + "\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Prénom du Fournisseur :   "}</Text><Text style = {styles.textDetails}>{benefit.provider.firstname + "\n\n"}</Text>
                            <Text style={styles.textDetailsBold}>{"Avis:  "}</Text>
                            {getRating(benefit)}
                            <Pressable
                                onPress={() => {setIsVisible(!isVisible)}}
                            >
                                <Text style={styles.button}>{textButtonHide}</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </Modal>
                    <Text style={styles.textListBenefits}>{benefit.customer.firstname + " " + benefit.customer.lastname + " :  " + benefit.address.street + ", " + benefit.address.city}</Text>
                    <Pressable
                        onPress={() => {setIsVisible(!isVisible)}}
                    >
                        <Text style={styles.button}>{textButtonShow}</Text>
                    </Pressable>
            </View>
    )
}

export default SingleBenefits
