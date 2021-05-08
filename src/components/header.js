import React from "react";
import { Header } from 'react-native-elements';

const HeaderApp = () => {
    return(
        <Header
            style={{backgroundColor:'#ffb2b2'}}
            centerComponent={{ text: 'Test Technique Nobo - Augustin dL', style: { color: '#fafafa' } }}
            backgroundColor={'#ffb2b2'}
        />
    )
}

export default HeaderApp
