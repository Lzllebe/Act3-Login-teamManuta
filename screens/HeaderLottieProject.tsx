import React from "react";
import LotteView from 'lottie-react-native';
import { View, StyleSheet } from "react-native";



export default function HeaderLottie2(){
    return(
        <View style={styles.lottiecontainer}>
            <LotteView 
           
            source = { require('../assets/lottie/95531-chef.json')}
            loop={true}
            autoPlay={true} />
        </View>
            
     );
}


const styles = StyleSheet.create({
    lottiecontainer:{
        flex: 1.25,
        flexDirection: 'row',
        
       
       

    }
    }
)