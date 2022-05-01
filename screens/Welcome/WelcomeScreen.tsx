import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewWithLoading from "../../components/ViewWithLoading";
import HeaderLottieProject from "../HeaderLottieProject";

export default function WelcomeScreen() {

        const navigation = useNavigation();

    return (
        <SafeAreaView style ={styles.container}>
        <ViewWithLoading loading={false}>
        <View style={
          [
             styles.container1
          ]
        }>
            <View style={
          [
            styles.conradius1
          ]
        }>
          <HeaderLottieProject/>
      
        </View>
      
        </View>
        <View style={
          [
             styles.container2
          ]
        }>
          <View style={
          [
            styles.conradius2
          ]
        }>
            <View style={[styles.text]} >
            <Text style = {{
                textAlign: 'left',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 45,
                marginBottom: 10
                
            }} >
               Welcome! Chef Assistant
            </Text>
            <Text style = {{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 10,
                
                
            }} >
              Are you ready to receive orders from the customers? If yes then...
            </Text>

            </View>
            
             <Button
              title= "Let's Get Started"
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              onPress={() => navigation.navigate("HomeNav", {
                  screen: "Home",
              })
            }
              buttonStyle={{
                paddingVertical: 20,
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
                backgroundColor: "#f5516a"
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
        </View>
      
        </View>
      
        </ViewWithLoading>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    container1:{
        flex:1.1,
         flexDirection: 'column',
         backgroundColor: '#191d40',
        
      
      },
      conradius1:{
        flex:1.1,
         flexDirection: 'column',
         backgroundColor: 'white',
         borderBottomRightRadius: 100
      },
    
      container2:{
        flex: 1.2,
        backgroundColor: 'white',
        
        
      },
      conradius2:{
        flex:1,
         flexDirection: 'column',
         backgroundColor: '#191d40',
         borderTopLeftRadius: 100,
         alignItems: 'center',
         justifyContent: 'center',
         
      },
      text:{
          justifyContent: 'center',
          marginBottom: 10,
      },
        
    }
    )

