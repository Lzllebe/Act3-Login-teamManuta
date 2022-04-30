import React from "react";
import LotteView from 'lottie-react-native';
import { View, StyleSheet } from "react-native";



export default function HeaderLottie2(){
    return(
        <View style={styles.lottiecontainer}>
            <LotteView 
            style ={{height: 330, width: 90}}
            source = { require('../assets/lottie/73849-social-network.json')}
            loop={true}
            autoPlay={true} />
        </View>
            
     );
}


const styles = StyleSheet.create({
    lottiecontainer:{
        flex: 1.25,
        flexDirection: 'row',
        marginBottom: 50
    }
    }
)