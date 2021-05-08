import React from "react";
import { Header } from 'react-native-elements';
import styles from "../../App.css";

let text = "Wollah c'est un header"

const HeaderApp = (props) => {
    return(
        <Header
            style={{backgroundColor:'#ffb2b2'}}
            centerComponent={{ text: 'Test Technique Nobo - Augustin dL', style: { color: '#fff' } }}
            backgroundColor={'#ffb2b2'}
        />
    )
}

export default HeaderApp
