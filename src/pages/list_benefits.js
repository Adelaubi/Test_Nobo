import {ScrollView, View} from "react-native";
import styles from "../../App.css";
import React from 'react'
import HeaderApp from "../components/header";
import SingleBenefits from "../components/single_benefits";

const benefitsData = require('../../assets/list_benefits.json')

const ListBenefits = (navigation) => {
    let list = []

    for (let i = 0; i <Object.keys(benefitsData).length; i++){
        list.push(<SingleBenefits key={benefitsData[i].prestation_id} idBenefit ={benefitsData[i].prestation_id}/>)
    }

    return(
        <View style={styles.container}>
            <HeaderApp/>
            <ScrollView>
                {list}
            </ScrollView>
        </View>
    )
}

export default ListBenefits
