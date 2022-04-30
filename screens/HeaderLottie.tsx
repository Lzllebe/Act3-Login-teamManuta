import React from "react";
import LotteView from 'lottie-react-native';
import { View, StyleSheet } from "react-native";



export default function HeaderLottie(){
    return(
        <View style={styles.lottiecontainer}>
            <LotteView 
            style ={{height: 100, width: 100}}
            source = { require('../assets/lottie/98267-bicycle.json')}
            loop={true}
            autoPlay={true} />

            <View style={styles.lottiecontainer}>
            <LotteView 
            style ={{height: 100, width: 100}}
            source = { require('../assets/lottie/98267-bicycle.json')}
            loop={true}
            autoPlay={true} />

            <View style={styles.lottiecontainer}>
            <LotteView 
            style ={{height: 100, width: 100}}
            source = { require('../assets/lottie/98267-bicycle.json')}
            loop={true}
            autoPlay={true} />
            
            <View style={styles.lottiecontainer}>
            <LotteView 
            style ={{height: 100, width: 100}}
            source = { require('../assets/lottie/98267-bicycle.json')}
            loop={true}
            autoPlay={true} />
            
        </View>
            
        </View>
        </View>
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