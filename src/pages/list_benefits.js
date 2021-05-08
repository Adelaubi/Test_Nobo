import {Modal, Pressable, Text, View} from "react-native";
import styles from "../../App.css";
import React, {useState} from 'react'
import HeaderApp from "../components/header";
import single_benefits from "../components/single_benefits";
import list_benefits from "./list_benefits";
import SingleBenefits from "../components/single_benefits";

const benefitsData = require('../../assets/list_benefits.json')

const ListBenefits = (navigation) => {
    let list = []

    for (let i = 0; i <Object.keys(benefitsData).length; i++){
        list.push(<SingleBenefits idBenefit ={benefitsData[i].prestation_id}/>)
    }

    return(
        <View style={styles.container}>
            <HeaderApp/>
            {list}
        </View>
    )
}

export default ListBenefits
